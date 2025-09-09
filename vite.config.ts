import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  build: {
    // Optimizaciones para Vercel
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          chakra: ['@chakra-ui/react', '@emotion/react', '@emotion/styled'],
        },
      },
    },
    // Asegurar que los estilos se generen correctamente
    cssCodeSplit: false,
  },
  ssr: {
    // Configuración SSR para Vercel
    noExternal: ['@chakra-ui/react', '@emotion/react', '@emotion/styled'],
  },
});