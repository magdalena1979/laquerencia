import type { Config } from "@react-router/dev/config";
import { vercelPreset } from "@vercel/react-router/vite";

export default {
  ssr: true, // o false, pero que sea igual en local y en Vercel
  presets: [vercelPreset()],
} satisfies Config;
