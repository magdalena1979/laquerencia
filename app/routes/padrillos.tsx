import { useMemo } from "react";

const COLORS = {
  bg: "#15322e",
  white: "#FFFFFF",
  textDim: "rgba(255,255,255,0.75)",
  gold: "#C18A4D",
};

function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1
      className="padrillos-title"
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
      padding: "0 16px clamp(40px, 8vh, 64px)", // desktop
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
    <div className="padrillos-section" style={{ backgroundColor: COLORS.bg, minHeight: "100vh" }}>
      <div style={containerStyle} className="padrillos-container">
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
          Contamos con un banco de semen equino con colectas evaluadas y procesadas
          para uso fresco o refrigerado, garantizando trazabilidad y calidad.
          Coordinamos envíos según calendario zafral y necesidades de cada programa
          reproductivo.
        </p>

        {/* iframe visible solo en desktop */}
        <div className="padrillos-iframe">
          <iframe
            src="https://laquerenciacentroequino.crioonline.com/App/Guest/GroupOfHorses/1327"
            loading="lazy"
            title="Padrillos — Crio Online"
          />
        </div>

        {/* link visible solo en mobile */}
        <a
          className="padrillos-link"
          href="https://laquerenciacentroequino.crioonline.com/App/Guest/GroupOfHorses/1327"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver padrillos en Crio Online
        </a>
      </div>

      <style>
        {`
          .padrillos-iframe{
            width: 100%;
            display: flex;
            justify-content: center;
          }
          .padrillos-iframe iframe{
            width: min(100%, 1100px);
            height: 80vh;
            border: none;
            border-radius: 12px;
            box-shadow: 0 6px 20px rgba(0,0,0,0.3);
            margin-top: 24px;
            box-sizing: border-box;
          }

          .padrillos-link{
            display: none;
            margin-top: 24px;
            padding: 12px 20px;
            background-color: ${COLORS.gold};
            color: ${COLORS.white};
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            transition: background 0.2s;
            box-sizing: border-box;
          }
          .padrillos-link:hover{ background-color: #a8743f; }

         @media (max-width: 768px){
  .padrillos-section{ min-height: auto !important; }
  .padrillos-container{ padding-bottom: 16px !important; }

  /* 👇 ajuste de separación del título */
  .padrillos-title{ margin-top: 96px !important; }

  .padrillos-iframe{ display:none; }
  .padrillos-iframe iframe{ margin-top: 0; }
  .padrillos-link{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 16px;
  }
}
        `}
      </style>
    </div>
  );
}
