import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Optimizando solo las imágenes que se usan en el sitio...');

const publicDir = path.join(__dirname, '../public');
const maxWidth = 3000;
const maxHeight = 3000;
const maxSizeKB = 300;
const quality = 85;

// Lista de imágenes que realmente se usan (en public)
// El slicer usa app/assets/slicer/* (copiados por copy-slicer), no esta lista
const usedImages = [
  '/vero.jpeg',
  '/pepe.jpg',
  '/walter.jpg',
  '/card1.jpg',
  '/equipo.jpg',
  '/hero1.jpg',
  '/servicios1.jpg',
  '/servicios2.jpg',
  // slicer: ahora son slicer.1.jpeg, slicer.2.jpeg, ... en app/assets/slicer (vía Slicer.tsx)
];

// Función para obtener tamaño en KB
function getFileSizeKB(filePath) {
  const stats = fs.statSync(filePath);
  return Math.round(stats.size / 1024);
}

// Función para optimizar una imagen
async function optimizeImage(imagePath) {
  try {
    const fullPath = path.join(publicDir, imagePath);
    
    // Verificar si el archivo existe
    if (!fs.existsSync(fullPath)) {
      console.log(`⚠️  No encontrada: ${imagePath}`);
      return;
    }
    
    const originalSize = getFileSizeKB(fullPath);
    const ext = path.extname(fullPath).toLowerCase();
    const name = path.basename(fullPath, ext);
    const dir = path.dirname(fullPath);
    
    console.log(`\n🖼️  Procesando: ${imagePath} (${originalSize}KB)`);
    
    // Leer metadatos
    const metadata = await sharp(fullPath).metadata();
    console.log(`   Dimensiones: ${metadata.width}x${metadata.height}`);
    
    // Verificar si necesita optimización
    const needsResize = metadata.width > maxWidth || metadata.height > maxHeight;
    const needsCompression = originalSize > maxSizeKB;
    
    if (!needsResize && !needsCompression) {
      console.log(`   ✅ Ya está optimizada`);
      return;
    }
    
    // Crear instancia de Sharp
    let sharpInstance = sharp(fullPath);
    
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
      fs.renameSync(tempPath, fullPath);
      console.log(`   ✅ Optimizada`);
    } else {
      fs.unlinkSync(tempPath);
      console.log(`   ⚠️  No optimizada (no hay mejora)`);
    }
    
  } catch (error) {
    console.error(`   ❌ Error: ${error.message}`);
  }
}

// Procesar todas las imágenes usadas
async function main() {
  console.log(`📋 Optimizando ${usedImages.length} imágenes usadas:`);
  usedImages.forEach(img => console.log(`   - ${img}`));
  
  for (const imagePath of usedImages) {
    await optimizeImage(imagePath);
  }
  
  console.log('\n🎉 ¡Optimización completada!');
}

// Ejecutar
try {
  await main();
} catch (error) {
  console.error('\n❌ Error:', error);
}
