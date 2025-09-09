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

        {/* Script mejorado para manejar hidratación en mobile */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Detectar si es mobile
              const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
              
              // Función para mostrar contenido
              function showContent() {
                document.body.style.visibility = 'visible';
                document.body.classList.add('chakra-ui-light');
              }
              
              // Mostrar contenido inmediatamente en desktop
              if (!isMobile) {
                document.addEventListener('DOMContentLoaded', showContent);
              } else {
                // En mobile, esperar un poco más para asegurar que Chakra UI se hidrate
                document.addEventListener('DOMContentLoaded', function() {
                  setTimeout(showContent, 100);
                  // Fallback adicional para mobile
                  setTimeout(showContent, 300);
                });
              }
              
              // Manejar refresh de página
              window.addEventListener('pageshow', function (e) {
                if (e.persisted) {
                  location.reload();
                }
              });
              
              // Fallback específico para mobile
              if (isMobile) {
                window.addEventListener('load', function() {
                  setTimeout(showContent, 200);
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
