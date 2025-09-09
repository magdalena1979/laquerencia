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

// Configuración de Emotion cache para SSR
function getEmotionCache() {
  const isServer = typeof window === "undefined";
  
  if (isServer) {
    // Server-side: crear cache limpio
    return createCache({ key: "chakra", prepend: true });
  } else {
    // Client-side: reutilizar cache existente o crear nuevo
    const existingCache = (window as any).__EMOTION_CACHE__;
    if (existingCache) {
      return existingCache;
    }
    
    const cache = createCache({ key: "chakra", prepend: true });
    (window as any).__EMOTION_CACHE__ = cache;
    return cache;
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
        
        {/* Estilos críticos inline para mobile */}
        <style dangerouslySetInnerHTML={{
          __html: `
            html, body {
              margin: 0 !important;
              padding: 0 !important;
              font-family: "Roboto", system-ui, sans-serif !important;
              background-color: #ffffff !important;
              color: #1a202c !important;
              visibility: visible !important;
            }
            #root {
              min-height: 100vh !important;
              background-color: #ffffff !important;
            }
            * { box-sizing: border-box !important; }
            @media (max-width: 768px) {
              body { font-size: 16px !important; }
            }
          `
        }} />
        
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

        {/* Script para SSR */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Solo manejar bfcache para SSR
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
