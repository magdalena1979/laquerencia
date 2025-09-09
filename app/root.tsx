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

// Cache global para Emotion - solución más robusta para Vercel
let emotionCache: any = null;

function getEmotionCache() {
  if (emotionCache) return emotionCache;
  
  if (typeof document === "undefined") {
    // SSR
    emotionCache = createCache({ 
      key: "chakra",
      prepend: true,
    });
  } else {
    // Cliente
    const insertionPoint = document.querySelector<HTMLMetaElement>(
      'meta[name="emotion-insertion-point"]'
    ) || undefined;

    emotionCache = createCache({
      key: "chakra",
      prepend: true,
      insertionPoint,
    });
  }
  
  return emotionCache;
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
          {/* resetCSS para asegurar base consistente y evitar FOUC */}
          <ChakraProvider theme={theme} resetCSS={true}>
            <div suppressHydrationWarning>
              <Navbar />
              <Outlet />
              <Footer />
            </div>
          </ChakraProvider>
        </CacheProvider>

        <ScrollRestoration />
        <Scripts />

        {/* Scripts para manejar hidratación en Vercel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Forzar rehidratación si hay problemas
              window.addEventListener('pageshow', function (e) {
                if (e.persisted) location.reload();
              });
              
              // Manejar navegación en SPA
              window.addEventListener('popstate', function() {
                setTimeout(function() {
                  document.body.classList.add('chakra-ui-light');
                  document.body.style.visibility = 'visible';
                }, 50);
              });
              
              // Asegurar que los estilos se carguen correctamente
              document.addEventListener('DOMContentLoaded', function() {
                // Agregar clase de Chakra UI para mostrar contenido
                document.body.classList.add('chakra-ui-light');
                
                // Fallback para Vercel - manejar rutas específicas
                if (typeof window !== 'undefined' && window.location.hostname.includes('vercel')) {
                  // Función para forzar rehidratación de estilos
                  function forceStyleRehydration() {
                    document.body.style.visibility = 'visible';
                    document.body.classList.add('chakra-ui-light');
                    
                    // Forzar re-render de componentes Chakra si es necesario
                    const chakraElements = document.querySelectorAll('[data-chakra-component]');
                    chakraElements.forEach(el => {
                      el.style.display = 'none';
                      el.offsetHeight; // Trigger reflow
                      el.style.display = '';
                    });
                  }
                  
                  // Aplicar inmediatamente
                  forceStyleRehydration();
                  
                  // Fallback con delay para rutas específicas
                  setTimeout(forceStyleRehydration, 100);
                  setTimeout(forceStyleRehydration, 300);
                }
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
