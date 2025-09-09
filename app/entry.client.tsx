import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { CacheProvider } from "@emotion/react";
import { ChakraProvider } from "@chakra-ui/react";
import { createEmotionCache } from "./emotion-cache";
import theme from "./theme";

// Tu App raíz (si usás React Router, es el Root export default)
import Root from "./root";

const cache = createEmotionCache();

hydrateRoot(
  document,
  <StrictMode>
    <CacheProvider value={cache}>
      <ChakraProvider theme={theme} resetCSS>
        <Root />
      </ChakraProvider>
    </CacheProvider>
  </StrictMode>
);
