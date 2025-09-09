import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Iniciando optimización de imágenes...');

const publicDir = path.join(__dirname, '../public');
const maxWidth = 3000;
const maxHeight = 3000;
const maxSizeKB = 300;
const quality = 85;

// Función para obtener tamaño en KB
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
    
    // Leer metadatos
    const metadata = await sharp(filePath).metadata();
    console.log(`   Dimensiones: ${metadata.width}x${metadata.height}`);
    
    // Verificar si necesita optimización
    const needsResize = metadata.width > maxWidth || metadata.height > maxHeight;
    const needsCompression = originalSize > maxSizeKB;
    
    if (!needsResize && !needsCompression) {
      console.log(`   ✅ Ya está optimizada`);
      return;
    }
    
    // Crear instancia de Sharp
    let sharpInstance = sharp(filePath);
    
    // Redimensionar si es necesario
    if (needsResize) {
      sharpInstance = sharpInstance.resize(maxWidth, maxHeight, {
        fit: 'inside',
        withoutEnlargement: true
      });
      console.log(`   📏 Redimensionando...`);
    }
    
    // Configurar compresión
    if (ext === '.jpg' || ext === '.jpeg') {
      sharpInstance = sharpInstance.jpeg({ 
        quality: quality,
        progressive: true
      });
    } else if (ext === '.png') {
      sharpInstance = sharpInstance.png({ 
        quality: quality,
        compressionLevel: 9
      });
    }
    
    // Crear archivo temporal
    const tempPath = path.join(dir, `${name}_temp${ext}`);
    
    // Procesar imagen
    await sharpInstance.toFile(tempPath);
    
    // Verificar resultado
    const newSize = getFileSizeKB(tempPath);
    const savings = originalSize - newSize;
    const savingsPercent = Math.round((savings / originalSize) * 100);
    
    console.log(`   📊 Nuevo tamaño: ${newSize}KB (${savingsPercent}% reducción)`);
    
    // Reemplazar si es mejor
    if (newSize < originalSize) {
      fs.renameSync(tempPath, filePath);
      console.log(`   ✅ Optimizada`);
    } else {
      fs.unlinkSync(tempPath);
      console.log(`   ⚠️  No optimizada`);
    }
    
  } catch (error) {
    console.error(`   ❌ Error: ${error.message}`);
  }
}

// Procesar directorio
async function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const itemPath = path.join(dirPath, item);
    const stat = fs.statSync(itemPath);
    
    if (stat.isDirectory()) {
      await processDirectory(itemPath);
    } else if (stat.isFile()) {
      const ext = path.extname(item).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        await optimizeImage(itemPath);
      }
    }
  }
}

// Ejecutar
try {
  await processDirectory(publicDir);
  console.log('\n🎉 ¡Optimización completada!');
} catch (error) {
  console.error('\n❌ Error:', error);
}
