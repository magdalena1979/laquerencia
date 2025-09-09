// app/theme.ts
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// ✅ Configuración del modo de color
const config: ThemeConfig = {
  initialColorMode: "light",   // podés poner "dark" si preferís por defecto
  useSystemColorMode: false,   // evita que tome el modo del sistema y genere flash
};

// ✅ Tema extendido
const theme = extendTheme({
  config,
  fonts: {
    heading: `"Roboto", system-ui, -apple-system, Segoe UI, Ubuntu, Cantarell, "Helvetica Neue", Arial, "Noto Sans"`,
    body: `"Roboto", system-ui, -apple-system, Segoe UI, Ubuntu, Cantarell, "Helvetica Neue", Arial, "Noto Sans"`,
  },
  colors: {
    querencia: {
      50: "#f2f6f3",
      100: "#e4eee7",
      200: "#c2dac7",
      300: "#9fc5a7",
      400: "#6fa882",
      500: "#3f8a5d",
      600: "#2f6a47",
      700: "#224e35",
      800: "#153323",
      900: "#0b1d14",
    },
    crema: {
      50: "#fffdf7",
      100: "#fff8e7",
      200: "#ffefc3",
      300: "#fde59a",
      400: "#f8d46b",
      500: "#e9bd3e",
      600: "#c79a2c",
      700: "#9d7420",
      800: "#775417",
      900: "#50380f",
    },
    rosa: {
      50: "#faf8f9",
      100: "#f5f0f2",
      200: "#eae0e3",
      300: "#d9c7cc",
      400: "#c4a8b0",
      500: "#aa8f94",
      600: "#9a7d83",
      700: "#816a6f",
      800: "#6b575b",
      900: "#584a4d",
    },
  },
  components: {
    Button: {
      defaultProps: { colorScheme: "querencia" },
      variants: {
        solid:   { rounded: "xl", fontWeight: 600 },
        outline: { rounded: "xl", borderWidth: "2px" },
        subtle:  { bg: "querencia.50", _hover: { bg: "querencia.100" } },
      },
    },
    Heading: {
      baseStyle: { letterSpacing: "-0.02em" },
    },
  },
});

export default theme;
export { theme };
