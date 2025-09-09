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

// Configuración simple de Emotion cache
function getEmotionCache() {
  return createCache({ key: "chakra" });
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

        {/* Script para evitar FOUC */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Función para mostrar la página cuando los estilos estén listos
              function showPage() {
                document.body.classList.add('styles-loaded');
              }
              
              // Mostrar inmediatamente si ya está cargado
              if (document.readyState === 'complete') {
                showPage();
              } else {
                // Mostrar cuando esté listo
                window.addEventListener('load', showPage);
                
                // Fallback rápido para mobile
                setTimeout(showPage, 100);
              }
              
              // Manejar bfcache
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
