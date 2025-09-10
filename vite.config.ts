import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [reactRouter(), tsconfigPaths()],
  // Podés borrar la sección build entera, o dejar explícito:
  build: {
    cssCodeSplit: true,
  },
});
