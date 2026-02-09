/**
 * Copia los archivos slicer.* de public/ a app/assets/slicer/
 * para que Vite los pueda importar y las URLs funcionen en dev y build.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");
const targetDir = path.join(root, "app", "assets", "slicer");

if (!fs.existsSync(publicDir)) {
  console.warn("No existe public/, no se copia nada.");
  process.exit(0);
}

const files = fs.readdirSync(publicDir).filter((f) => f.startsWith("slicer."));
if (files.length === 0) {
  console.warn("No hay archivos slicer.* en public/.");
  process.exit(0);
}

fs.mkdirSync(targetDir, { recursive: true });
for (const file of files) {
  const src = path.join(publicDir, file);
  const dest = path.join(targetDir, file);
  fs.copyFileSync(src, dest);
}
console.log(`Slicer: copiados ${files.length} archivos a app/assets/slicer/`);
