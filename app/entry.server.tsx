import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { CacheProvider } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { createEmotionCache } from "./emotion-cache";
import theme from "./theme";

// Tu App raíz del server (mismo árbol que hidrata el cliente)
import Root from "./root";

// ⚠️ Esta función es un ejemplo genérico. En @react-router/node
// normalmente exportás un handler que arma el HTML y devuelve Response.
// Adaptala al hook/handler de tu server (Express, Vercel, etc).
export async function handleRequest(req: Request): Promise<Response> {
  const cache = createEmotionCache();
  const { extractCriticalToChunks, constructStyleTagsFromChunks } =
    createEmotionServer(cache);

  // 1) Render a string con Emotion/Chakra
  const appHtml = renderToString(
    <StrictMode>
      <CacheProvider value={cache}>
        {/* ColorModeScript antes del provider asegura color correcto en el primer paint */}
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ChakraProvider theme={theme} resetCSS>
          <Root />
        </ChakraProvider>
      </CacheProvider>
    </StrictMode>
  );

  // 2) Extraer CSS crítico de Emotion
  const chunks = extractCriticalToChunks(appHtml);
  const emotionStyleTags = constructStyleTagsFromChunks(chunks); // <style data-emotion="...">

  // 3) HTML final (inyectamos estilos en <head>)
  const html = `<!doctype html>
<html lang="es">
  <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>La Querencia</title>

    <!-- insertion point p/ Emotion opcional -->
    <meta name="emotion-insertion-point" content="emotion-insertion-point" />

    <!-- Google Fonts Roboto -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet" />

    ${emotionStyleTags}
  </head>
  <body>
    <div id="root">${appHtml}</div>
    <script type="module" src="/app/entry.client.tsx"></script>
  </body>
</html>`;

  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
