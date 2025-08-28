// app/theme.ts
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: `"Inter", system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, "Helvetica Neue", Arial, "Noto Sans"`,
    body: `"Inter", system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, "Helvetica Neue", Arial, "Noto Sans"`,
  },
  colors: {
    querencia: {
      50:  "#f2f6f3",
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
      50:  "#fffdf7",
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
  },
  components: {
    Button: {
      defaultProps: { colorScheme: "querencia" },
      variants: {
        solid: { rounded: "xl", fontWeight: 600 },
        outline: { rounded: "xl", borderWidth: "2px" },
        subtle: { bg: "querencia.50", _hover: { bg: "querencia.100" } },
      },
    },
    Heading: { baseStyle: { letterSpacing: "-0.02em" } },
  },
});
export default theme;
