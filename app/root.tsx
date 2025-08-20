import type { MetaFunction } from "react-router";
import { Meta, Links, Scripts, ScrollRestoration } from "react-router";
import { Outlet } from "react-router";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";

export const meta: MetaFunction = () => ([
  { charSet: "utf-8" },
  { title: "La Querencia" },
  { name: "viewport", content: "width=device-width, initial-scale=1" },
]);

export default function Root() {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <ChakraProvider theme={theme}>
          <Navbar />
          <Outlet />
          <Footer />
        </ChakraProvider>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
