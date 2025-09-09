import * as React from "react";
import type { MetaFunction } from "react-router";
import { Meta, Links, Scripts, ScrollRestoration, Outlet } from "react-router";
import "./app.css";
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
        {/* Google Fonts - Roboto */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
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
