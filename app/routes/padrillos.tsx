import { useMemo, useState } from "react";

const COLORS = {
  bg: "#15322e",
  white: "#FFFFFF",
  textDim: "rgba(255,255,255,0.75)",
  gold: "#C18A4D",
  goldDark: "#A8743F",
};

// PageTitle unificado
function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1
      style={{
        margin: "0 0 16px",
        marginTop: "clamp(112px, 14vh, 140px)",
        color: COLORS.white,
        fontSize: "clamp(28px, 5vw, 40px)",
        fontWeight: 700,
        textAlign: "center",
        letterSpacing: "0.02em",
        lineHeight: 1.3,
      }}
    >
      {children}
    </h1>
  );
}

export default function PadrillosPage() {
  const containerStyle = useMemo<React.CSSProperties>(
    () => ({
      maxWidth: 1280,
      margin: "0 auto",
      padding: "0 16px clamp(40px, 8vh, 64px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    }),
    []
  );

  const [hover, setHover] = useState(false);

  return (
    <div style={{ backgroundColor: COLORS.bg, minHeight: "100vh" }}>
      <div style={containerStyle}>
        <div style={{ maxWidth: 760, display: "flex", flexDirection: "column", gap: 16 }}>
          <PageTitle>Padrillos</PageTitle>

          <p
            style={{
              margin: 0,
              color: COLORS.textDim,
              fontSize: "clamp(16px, 2.2vw, 18px)",
              lineHeight: 1.6,
            }}
          >
            Contamos con un banco de semen equino con colectas evaluadas y procesadas para uso
            fresco o refrigerado, garantizando trazabilidad y calidad. Coordinamos envíos según
            calendario zafral y necesidades de cada programa reproductivo.
          </p>

          <div style={{ marginTop: 20 }}>
            <a
              href="https://tu-link-externo.com" // poné tu URL real
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              style={{
                display: "inline-block",
                backgroundColor: hover ? COLORS.goldDark : COLORS.gold,
                color: COLORS.white,
                padding: "12px 32px",
                borderRadius: 6,
                fontWeight: 600,
                textDecoration: "none",
                transition: "background-color 0.2s ease",
              }}
            >
              Ver padrillos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
