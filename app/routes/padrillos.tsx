import { useMemo } from "react";

const COLORS = {
  bg: "#15322e",
  white: "#FFFFFF",
  textDim: "rgba(255,255,255,0.75)",
};

// PageTitle unificado
function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1
      style={{
        margin: "0 0 24px",
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
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap: 24,
    }),
    []
  );

  return (
    <div style={{ backgroundColor: COLORS.bg, minHeight: "100vh" }}>
      <div style={containerStyle}>
        <PageTitle>Padrillos</PageTitle>

        <p
          style={{
            margin: 0,
            color: COLORS.textDim,
            fontSize: "clamp(16px, 2.2vw, 18px)",
            lineHeight: 1.6,
            maxWidth: 760,
          }}
        >
          Contamos con un banco de semen equino con colectas evaluadas y procesadas para uso fresco
          o refrigerado, garantizando trazabilidad y calidad. Coordinamos envíos según calendario
          zafral y necesidades de cada programa reproductivo.
        </p>

        {/* IFRAME EMBEBIDO */}
        <iframe
          src="https://laquerenciacentroequino.crioonline.com/App/Guest/GroupOfHorses/1327"
          style={{
            width: "100%",
            maxWidth: 1100,
            height: "80vh",
            border: "none",
            borderRadius: 12,
            boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
            marginTop: 24,
          }}
          loading="lazy"
        />
      </div>
    </div>
  );
}
