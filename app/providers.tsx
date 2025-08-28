// app/providers.tsx (crealo si no existe)
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme"; // si tenés uno

function createEmotionCache() {
  if (typeof document === "undefined") return createCache({ key: "chakra" });
  const insertionPoint = document.querySelector<HTMLMetaElement>(
    'meta[name="emotion-insertion-point"]'
  );
  return createCache({
    key: "chakra",
    prepend: true,
    insertionPoint: insertionPoint ?? undefined,
  });
}

const cache = createEmotionCache();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider value={cache}>
      <ChakraProvider theme={theme} resetCSS>
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}
