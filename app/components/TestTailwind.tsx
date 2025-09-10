import { colors, spacing, borderRadius, buttonStyles, textStyles, combineStyles } from '../styles';

export default function TestTailwind() {
  return (
    <div>
      {/* Test con CSS inline */}
      <div className="test-inline">
        <h1>Test CSS Inline</h1>
        <p>Si ves esto en verde con texto blanco, el CSS inline funciona.</p>
      </div>
      
      {/* Test con estilos del sistema */}
      <div style={{
        backgroundColor: colors.querencia,
        color: colors.white,
        padding: spacing.md,
        margin: spacing.md,
        borderRadius: borderRadius.lg,
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={combineStyles(textStyles.heading2, { color: colors.white, marginBottom: spacing.sm })}>
          Test Sistema de Estilos
        </h1>
        <p style={combineStyles(textStyles.body, { color: colors.white, marginBottom: spacing.md })}>
          Si ves esto en rosa con texto blanco, el sistema de estilos funciona.
        </p>
        <button style={buttonStyles.secondary}>
          Botón de prueba
        </button>
      </div>
      
      {/* Test con diferentes variantes */}
      <div style={{
        padding: spacing.md,
        margin: spacing.md,
        backgroundColor: colors.crema,
        borderRadius: borderRadius.lg,
        border: `2px solid ${colors.querencia}`
      }}>
        <h2 style={textStyles.heading3}>Variantes de Botones</h2>
        <div style={{ display: 'flex', gap: spacing.md, flexWrap: 'wrap' }}>
          <button style={buttonStyles.primary}>Primario</button>
          <button style={buttonStyles.secondary}>Secundario</button>
          <button style={buttonStyles.outline}>Outline</button>
        </div>
      </div>
    </div>
  );
}
