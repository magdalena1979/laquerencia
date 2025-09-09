import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [reactRouter(), tsconfigPaths()],
  build: {
    // Asegurar que los estilos se generen correctamente
    cssCodeSplit: false,
  },
  ssr: {
    // Configuración SSR para Vercel
    noExternal: ['@chakra-ui/react', '@emotion/react', '@emotion/styled'],
  },
});