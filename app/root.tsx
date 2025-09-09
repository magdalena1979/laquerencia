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

// Configuración ultra simplificada de Emotion cache
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
        
        {/* Estilos críticos para mobile */}
        <style dangerouslySetInnerHTML={{
          __html: `
            body { 
              font-family: "Roboto", system-ui, sans-serif !important;
              margin: 0 !important;
              padding: 0 !important;
              background-color: #ffffff !important;
              color: #1a202c !important;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            #root { min-height: 100vh !important; }
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

        {/* Script robusto para mobile */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Detectar mobile
              const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
              
              // Función para forzar estilos
              function forceStyles() {
                // Agregar estilos críticos directamente
                const style = document.createElement('style');
                style.textContent = \`
                  body { 
                    font-family: "Roboto", system-ui, sans-serif !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    background-color: #ffffff !important;
                    color: #1a202c !important;
                  }
                  #root { min-height: 100vh !important; }
                  * { box-sizing: border-box !important; }
                \`;
                document.head.appendChild(style);
                
                // Forzar re-render de Chakra UI
                const root = document.getElementById('root');
                if (root) {
                  root.style.display = 'none';
                  root.offsetHeight; // Trigger reflow
                  root.style.display = '';
                }
              }
              
              // Aplicar inmediatamente
              forceStyles();
              
              // Aplicar en DOMContentLoaded
              document.addEventListener('DOMContentLoaded', forceStyles);
              
              // Aplicar en load
              window.addEventListener('load', forceStyles);
              
              // Fallback para mobile
              if (isMobile) {
                setTimeout(forceStyles, 100);
                setTimeout(forceStyles, 500);
                setTimeout(forceStyles, 1000);
              }
              
              // Manejar refresh
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
