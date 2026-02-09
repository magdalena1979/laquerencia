import fs from "fs";
import path from "path";
import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const STATIC_EXT = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".mp4", ".webm", ".ico", ".svg", ".woff2", ".woff", ".ttf"];

function servePublicBeforeRouter() {
  return {
    name: "serve-public-before-router",
    configureServer(server: { config: { root: string }; middlewares: { use: (fn: (req: any, res: any, next: () => void) => void) => void } }) {
      server.middlewares.use((req: { url?: string }, res: { setHeader: (a: string, b: string) => void; end: (b?: unknown) => void; statusCode: number }, next: () => void) => {
        const url = req.url?.split("?")[0] ?? "";
        const ext = path.extname(url).toLowerCase();
        if (!STATIC_EXT.includes(ext)) {
          next();
          return;
        }
        const root = server.config.root;
        const filePath = path.join(root, "public", url);
        if (!fs.existsSync(filePath)) {
          next();
          return;
        }
        const data = fs.readFileSync(filePath);
        const mime: Record<string, string> = {
          ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".gif": "image/gif",
          ".webp": "image/webp", ".mp4": "video/mp4", ".webm": "video/webm", ".ico": "image/x-icon",
          ".svg": "image/svg+xml",
        };
        res.setHeader("Content-Type", mime[ext] ?? "application/octet-stream");
        res.end(data);
      });
    },
  };
}

export default defineConfig({
  plugins: [servePublicBeforeRouter(), reactRouter(), tsconfigPaths()],
  publicDir: "public",
  build: {
    cssCodeSplit: true,
    copyPublicDir: true,
  },
});
