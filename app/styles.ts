// Estilos como objetos JavaScript para usar con estilos inline
export const colors = {
  querencia: '#aa8f94',
  crema: '#f5f5dc',
  rosa: '#f8e8e8',
  gold: '#A8743F', // Color dorado original
  goldHover: '#C18A4D', // Color dorado hover original
  darkGreen: '#15322e', // Color verde oscuro original
  darkGreenLight: '#1E3832', // Color verde claro original
  darkGreenDark: '#142824', // Color verde más oscuro original
  white: '#ffffff',
  black: '#000000',
  gray100: '#f7fafc',
  gray200: '#edf2f7',
  gray300: '#e2e8f0',
  gray400: '#cbd5e0',
  gray500: '#a0aec0',
  gray600: '#718096',
  gray700: '#4a5568',
  gray800: '#2d3748',
  gray900: '#1a202c',
};

export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
};

export const typography = {
  fontFamily: "'Roboto', system-ui, -apple-system, sans-serif",
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    bold: 700,
    black: 900,
  },
};

export const borderRadius = {
  none: '0',
  sm: '0.125rem',
  base: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  full: '9999px',
};

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
};

// Estilos de componentes comunes
export const buttonStyles = {
  primary: {
    backgroundColor: colors.goldHover,
    color: colors.white,
    padding: `${spacing.sm} ${spacing.lg}`,
    borderRadius: borderRadius.lg,
    fontWeight: typography.fontWeight.medium,
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    textDecoration: 'none',
    display: 'inline-block',
    textAlign: 'center' as const,
  },
  secondary: {
    backgroundColor: colors.goldHover,
    color: colors.white,
    padding: `${spacing.sm} ${spacing.lg}`,
    borderRadius: borderRadius.lg,
    fontWeight: typography.fontWeight.medium,
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    textDecoration: 'none',
    display: 'inline-block',
    textAlign: 'center' as const,
  },
  outline: {
    backgroundColor: 'transparent',
    color: colors.white,
    padding: `${spacing.sm} ${spacing.lg}`,
    borderRadius: borderRadius.lg,
    fontWeight: typography.fontWeight.medium,
    border: `1px solid rgba(255, 255, 255, 0.7)`,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    textDecoration: 'none',
    display: 'inline-block',
    textAlign: 'center' as const,
  },
};

export const containerStyles = {
  base: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: `0 ${spacing.md}`,
  },
  fluid: {
    width: '100%',
    padding: `0 ${spacing.md}`,
  },
};

export const textStyles = {
  heading1: {
    fontSize: typography.fontSize['4xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.gray800,
    marginBottom: spacing.lg,
  },
  heading2: {
    fontSize: typography.fontSize['3xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.gray800,
    marginBottom: spacing.md,
  },
  heading3: {
    fontSize: typography.fontSize['2xl'],
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
    fontWeight: typography.fontWeight.normal,
    color: colors.gray600,
  },
};

// Estilos responsive
export const responsive = {
  mobile: '@media (max-width: 768px)',
  tablet: '@media (min-width: 769px) and (max-width: 1024px)',
  desktop: '@media (min-width: 1025px)',
};

// Función para obtener estilos responsive
export const getResponsiveStyles = (mobile: React.CSSProperties, desktop: React.CSSProperties) => {
  return {
    ...mobile,
    [`@media (min-width: 769px)`]: desktop,
  };
};

// Estilos de layout
export const layoutStyles = {
  header: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    borderBottom: '1px solid transparent',
    transition: 'all 0.3s ease',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: `${spacing.sm} ${spacing.md}`,
  },
  flexRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexCol: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: spacing.sm,
  },
};

// Función helper para combinar estilos
export const combineStyles = (...styles: React.CSSProperties[]): React.CSSProperties => {
  return Object.assign({}, ...styles);
};
