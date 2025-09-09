// react-router.config.ts
import type { Config } from "@react-router/dev/config";
import { vercelPreset } from "@vercel/react-router/vite";

export default {
  ssr: true,         // Habilitar SSR para consistencia entre servidor y cliente
  presets: [vercelPreset()],
} satisfies Config;
