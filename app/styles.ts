// styles.ts
export const colors = {
  querencia: "#AE8A79",        // Pantone 4725 C
  crema: "#F5F5DC",
  rosa: "#F8E8E8",

  gold: "#C6893F",             // Pantone 7510 C
  goldHover: "#D79A4A",

  darkGreen: "#0E352D",        // Pantone 627 C
  darkGreenLight: "#13322B",
  darkGreenDark: "#19191A",

  white: "#FFFFFF",
  black: "#000000",

  gray100: "#D9D9D6",          // Cool Gray 1 C
  gray200: "#C1C6C8",          // 428 C
  gray300: "#ACA39A",          // Warm Gray 5 C
  gray400: "#888B8D",          // Cool Gray 8 C
  gray500: "#7E7F74",          // 416 C
  gray600: "#373A36",          // 447 C
  gray700: "#222223",
  gray800: "#19191A",
  gray900: "#000000",
};

export const spacing = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  "2xl": "3rem",
  "3xl": "4rem",
};

export const typography = {
  fontFamily: "'Montserrat', 'Helvetica Neue', Arial, sans-serif",
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    bold: 700,
    black: 900,
  },
};

export const textStyles = {
  heading1: {
    fontSize: typography.fontSize["4xl"],
    fontWeight: typography.fontWeight.bold,
    color: colors.gray800,
    marginBottom: spacing.lg,
  },
  heading2: {
    fontSize: typography.fontSize["3xl"],
    fontWeight: typography.fontWeight.bold,
    color: colors.gray800,
    marginBottom: spacing.md,
  },
  heading3: {
    fontSize: typography.fontSize["2xl"],
    fontWeight: typography.fontWeight.bold,
    color: colors.gray800,
    marginBottom: spacing.sm,
  },
  body: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.normal,
    color: colors.gray700,
    lineHeight: 1.5,
  },
  caption: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    color: colors.gray600,
  },
};

export const layoutStyles = {
  header: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    borderBottom: "1px solid transparent",
    transition: "all 0.3s ease",
  },
  container: {
    maxWidth: "1152px",
    margin: "0 auto",
    padding: `${spacing.md} ${spacing.lg}`,
  },
  flexRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
};

export const combineStyles = (...styles: React.CSSProperties[]) =>
  Object.assign({}, ...styles);
