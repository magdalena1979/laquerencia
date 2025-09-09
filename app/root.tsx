import * as React from "react";
import type { MetaFunction } from "react-router";
import { Meta, Links, Scripts, ScrollRestoration, Outlet } from "react-router";
import "./app.css";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
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

// 👉 Cache de Emotion optimizado para SSR
function getEmotionCache() {
  let insertionPoint: HTMLElement | undefined;
  if (typeof document !== "undefined") {
    insertionPoint = document.querySelector<HTMLMetaElement>(
      'meta[name="emotion-insertion-point"]'
    ) ?? undefined;
  }
  return createCache({ 
    key: "chakra", 
    insertionPoint,
    prepend: true // Asegura que los estilos de Chakra se carguen primero
  });
}

export default function Root() {
  const emotionCache = getEmotionCache();

  return (
    <html lang="es">
      <head>
        <Meta />
        {/* insertion point para Emotion */}
        <meta name="emotion-insertion-point" content="emotion-insertion-point" />
        {/* Roboto */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
        <Links />
      </head>
      <body>
        {/* ✅ Evita el flash de tema/colores */}
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />

        <CacheProvider value={emotionCache}>
          <ChakraProvider theme={theme} resetCSS>
            <Navbar />
            <Outlet />
            <Footer />
          </ChakraProvider>
        </CacheProvider>

        <ScrollRestoration />
        <Scripts />

        {/* (Opcional) este reload en pageshow puede generar saltos; probá quitarlo */}
        {/* 
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('pageshow', function (e) {
                if (e.persisted) location.reload();
              });
            `,
          }}
        />
        */}
      </body>
    </html>
  );
}
