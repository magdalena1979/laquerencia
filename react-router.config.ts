// react-router.config.ts
import type { Config } from "@react-router/dev/config";
import { vercelPreset } from "@vercel/react-router/vite";

export default {
  ssr: false,        // Deshabilitar SSR temporalmente para debug
  presets: [vercelPreset()],
} satisfies Config;
