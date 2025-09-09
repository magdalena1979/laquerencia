// react-router.config.ts
import type { Config } from "@react-router/dev/config";
import { vercelPreset } from "@vercel/react-router/vite";

export default {
  ssr: false,        // Volver a SPA pero con solución robusta
  presets: [vercelPreset()],
} satisfies Config;
