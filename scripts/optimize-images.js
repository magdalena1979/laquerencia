import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración de optimización
const MAX_WIDTH = 3000;
const MAX_HEIGHT = 3000;
const MAX_SIZE_KB = 300; // 300KB máximo
const QUALITY = 85; // Calidad JPEG/PNG

// Directorio de imágenes
const IMAGES_DIR = path.join(__dirname, '../public');

// Extensiones de imagen soportadas
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

// Función para obtener el tamaño del archivo en KB
function getFileSizeKB(filePath) {
  const stats = fs.statSync(filePath);
  return Math.round(stats.size / 1024);
}

// Función para optimizar una imagen
async function optimizeImage(filePath) {
  try {
    const originalSize = getFileSizeKB(filePath);
    const ext = path.extname(filePath).toLowerCase();
    const name = path.basename(filePath, ext);
    const dir = path.dirname(filePath);
    
    console.log(`\n🖼️  Procesando: ${path.basename(filePath)} (${originalSize}KB)`);
    
    // Leer metadatos de la imagen
    const metadata = await sharp(filePath).metadata();
    console.log(`   Dimensiones originales: ${metadata.width}x${metadata.height}`);
    
    // Verificar si necesita optimización
    const needsResize = metadata.width > MAX_WIDTH || metadata.height > MAX_HEIGHT;
    const needsCompression = originalSize > MAX_SIZE_KB;
    
    if (!needsResize && !needsCompression) {
      console.log(`   ✅ Ya está optimizada`);
      return;
    }
    
    // Crear instancia de Sharp
    let sharpInstance = sharp(filePath);
    
    // Redimensionar si es necesario
    if (needsResize) {
      sharpInstance = sharpInstance.resize(MAX_WIDTH, MAX_HEIGHT, {
        fit: 'inside',
        withoutEnlargement: true
      });
      console.log(`   📏 Redimensionando a máximo ${MAX_WIDTH}x${MAX_HEIGHT}`);
    }
    
    // Configurar compresión según el formato
    if (ext === '.jpg' || ext === '.jpeg') {
      sharpInstance = sharpInstance.jpeg({ 
        quality: QUALITY,
        progressive: true,
        mozjpeg: true
      });
    } else if (ext === '.png') {
      sharpInstance = sharpInstance.png({ 
        quality: QUALITY,
        progressive: true,
        compressionLevel: 9
      });
    } else if (ext === '.webp') {
      sharpInstance = sharpInstance.webp({ 
        quality: QUALITY
      });
    }
    
    // Crear archivo temporal
    const tempPath = path.join(dir, `${name}_temp${ext}`);
    
    // Procesar imagen
    await sharpInstance.toFile(tempPath);
    
    // Verificar tamaño resultante
    const newSize = getFileSizeKB(tempPath);
    const savings = originalSize - newSize;
    const savingsPercent = Math.round((savings / originalSize) * 100);
    
    console.log(`   📊 Nuevo tamaño: ${newSize}KB (${savingsPercent}% reducción)`);
    
    // Si el nuevo archivo es mejor, reemplazar el original
    if (newSize < originalSize) {
      fs.renameSync(tempPath, filePath);
      console.log(`   ✅ Optimizada y guardada`);
    } else {
      fs.unlinkSync(tempPath);
      console.log(`   ⚠️  No se optimizó (no hay mejora)`);
    }
    
  } catch (error) {
    console.error(`   ❌ Error procesando ${filePath}:`, error.message);
  }
}

// Función para procesar todas las imágenes en un directorio
async function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const itemPath = path.join(dirPath, item);
    const stat = fs.statSync(itemPath);
    
    if (stat.isDirectory()) {
      // Procesar subdirectorios recursivamente
      await processDirectory(itemPath);
    } else if (stat.isFile()) {
      const ext = path.extname(item).toLowerCase();
      if (IMAGE_EXTENSIONS.includes(ext)) {
        await optimizeImage(itemPath);
      }
    }
  }
}

// Función principal
async function main() {
  console.log('🚀 Iniciando optimización de imágenes...');
  console.log(`📋 Configuración:`);
  console.log(`   - Tamaño máximo: ${MAX_WIDTH}x${MAX_HEIGHT}px`);
  console.log(`   - Peso máximo: ${MAX_SIZE_KB}KB`);
  console.log(`   - Calidad: ${QUALITY}%`);
  console.log(`   - Directorio: ${IMAGES_DIR}`);
  
  try {
    await processDirectory(IMAGES_DIR);
    console.log('\n🎉 ¡Optimización completada!');
  } catch (error) {
    console.error('\n❌ Error durante la optimización:', error);
    process.exit(1);
  }
}

// Ejecutar si se llama directamente
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { optimizeImage, processDirectory };
