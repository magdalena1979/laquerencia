// root.tsx
import { Outlet } from "react-router";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../app/theme"; // o mejor mover theme a theme.ts
import { Navbar } from "../app/components/Navbar"; // o mejor mover Navbar a components/Navbar
import { Footer } from "../app/components/Footer";

export default function Root() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Outlet />
      <Footer />
    </ChakraProvider>
  );
}
