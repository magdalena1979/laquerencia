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

// Configuración simplificada de Emotion cache
function getEmotionCache() {
  if (typeof document === "undefined") {
    // SSR - configuración simple
    return createCache({ key: "chakra" });
  } else {
    // Cliente - configuración simple
    return createCache({ key: "chakra" });
  }
}

export default function Root() {
  const emotionCache = getEmotionCache();

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
          <ChakraProvider theme={theme} resetCSS={true}>
            <Navbar />
            <Outlet />
            <Footer />
          </ChakraProvider>
        </CacheProvider>

        <ScrollRestoration />
        <Scripts />

        {/* Script simple para manejar hidratación */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Script simple para asegurar que los estilos se carguen
              document.addEventListener('DOMContentLoaded', function() {
                // Mostrar contenido inmediatamente
                document.body.style.visibility = 'visible';
                document.body.classList.add('chakra-ui-light');
              });
              
              // Manejar refresh de página
              window.addEventListener('pageshow', function (e) {
                if (e.persisted) {
                  location.reload();
                }
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
