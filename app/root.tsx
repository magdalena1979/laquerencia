import * as React from "react";
import type { MetaFunction } from "react-router";
import { Meta, Links, Scripts, ScrollRestoration, Outlet } from "react-router";

import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import { theme } from "./theme";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";

export const meta: MetaFunction = () => ([
  { charSet: "utf-8" },
  { title: "La Querencia" },
  { name: "viewport", content: "width=device-width, initial-scale=1" },
]);

// crea un cache que usa el insertion point cuando estamos en el cliente
function useEmotionCache() {
  return React.useMemo(() => {
    if (typeof document === "undefined") {
      // SSR
      return createCache({ key: "chakra" });
    }
    const insertionPoint = document.querySelector<HTMLMetaElement>(
      'meta[name="emotion-insertion-point"]'
    ) || undefined;

    return createCache({
      key: "chakra",
      prepend: true,
      insertionPoint,
    });
  }, []);
}

export default function Root() {
  const emotionCache = useEmotionCache();

  return (
    <html lang="es">
      <head>
        <Meta />
        {/* 👇 insertion point para Emotion/Chakra */}
        <meta name="emotion-insertion-point" content="emotion-insertion-point" />
        <Links />
      </head>
      <body>
        <CacheProvider value={emotionCache}>
          {/* resetCSS opcional para asegurar base consistente */}
          <ChakraProvider theme={theme} resetCSS>
            <Navbar />
            <Outlet />
            <Footer />
          </ChakraProvider>
        </CacheProvider>

        <ScrollRestoration />
        <Scripts />

        {/* Parche opcional por si el navegador usa bfcache y no rehidrata (puede omitirse si ya te funciona) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('pageshow', function (e) {
                if (e.persisted) location.reload();
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
