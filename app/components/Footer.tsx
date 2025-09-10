// app/components/Footer.tsx
import { colors, spacing, textStyles, layoutStyles } from '../styles';

export function Footer() {
  return (
    <footer style={{
      marginTop: spacing['2xl'],
      padding: `${spacing.lg} 0`,
      backgroundColor: colors.gray100,
    }}>
      <div style={layoutStyles.container}>
        <p style={textStyles.caption}>
          © {new Date().getFullYear()} La Querencia — Centro de Reproducción Equina (Uruguay)
        </p>
      </div>
    </footer>
  );
}
