import { useMemo } from "react";

const COLORS = {
  bg: "#FFFFFF",
  green: "rgba(21,50,46,0.70)",
  white: "#ffffff",
  gold: "#C18A4D",
};

function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1
      style={{
        margin: "clamp(24px, 4vh, 48px) 0 clamp(16px, 3vh, 32px)",
        color: COLORS.green,
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

export default function Padrillos() {
  const containerStyle = useMemo<React.CSSProperties>(
    () => ({
      maxWidth: 1280,
      margin: "0 auto",
      padding: "0 16px 48px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap: 24,
      boxSizing: "border-box",
      width: "100%",
    }),
    []
  );

  return (
    <div style={{ backgroundColor: COLORS.bg }}>
      <section
        id="padrillos-section"
        style={{
          backgroundColor: COLORS.bg,
          paddingTop: 0,
          paddingBottom: 0,
          scrollMarginTop: 120,
        }}
      >
        <div style={containerStyle}>
          <PageTitle>Padrillos</PageTitle>

          <p
            style={{
              margin: 0,
            
              fontSize: "clamp(16px, 2.2vw, 18px)",
              lineHeight: 1.6,
              maxWidth: 760,
            }}
          >
            Contamos con un banco de semen equino con colectas evaluadas y procesadas
            para uso fresco o refrigerado, garantizando trazabilidad y calidad.
            Coordinamos envíos según calendario zafral y necesidades de cada programa
            reproductivo.
          </p>

          {/* Botón para ver padrillos */}
          <a
            className="padrillos-link"
            href="https://laquerenciacentroequino.crioonline.com/App/Guest/GroupOfHorses/1327"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver padrillos disponibles
          </a>
        </div>

        <style>
          {`
            .padrillos-link{
              margin-top: 32px;
              padding: 14px 24px;
              background-color: ${COLORS.gold};
              color: ${COLORS.white};
              text-decoration: none;
              border-radius: 8px;
              font-weight: 600;
              transition: background 0.2s;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              width: 100%;
              max-width: 400px;
            }
            .padrillos-link:hover{ background-color: #a8743f; }
          `}
        </style>
      </section>
    </div>
  );
}
