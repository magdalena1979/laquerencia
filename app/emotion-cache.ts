// Crea un cache de Emotion reutilizable en client y server
import createCache from "@emotion/cache";

export const createEmotionCache = () =>
  createCache({
    key: "chakra",
    // si usás <meta name="emotion-insertion-point" />, podés setearlo acá
    // insertionPoint: typeof document !== "undefined"
    //   ? document.querySelector<HTMLMetaElement>('meta[name="emotion-insertion-point"]') ?? undefined
    //   : undefined,
  });
