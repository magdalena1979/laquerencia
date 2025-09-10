import { useEffect } from "react";

const COLORS = {
  bg: "#15322e",
  white: "#FFFFFF",
  textDim: "rgba(255,255,255,0.75)",
  card: "rgba(255,255,255,0.10)",
};

const items = [
  { title: "Seguimiento folicular" },
  { title: "Colecta y banco de semen" },
  { title: "Inseminación artificial" },
  { title: "Transferencia de embriones" },
  { title: "OPU (Ovum Pick-Up)" },
];

// PageTitle unificado
function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1
      style={{
        margin: "0 0 12px",
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

export default function Servicios() {
  // fondo y margin del body para evitar “blancos” detrás del blur
  useEffect(() => {
    const prevBg = document.body.style.backgroundColor;
    const prevMargin = document.body.style.margin;
    document.body.style.backgroundColor = COLORS.bg;
    document.body.style.margin = "0";
    return () => {
      document.body.style.backgroundColor = prevBg;
      document.body.style.margin = prevMargin;
    };
  }, []);

  return (
    <div style={{ backgroundColor: COLORS.bg, minHeight: "100vh" }}>
      {/* Encabezado (título + párrafo) */}
      <section
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 16px",
          textAlign: "center",
        }}
      >
        <PageTitle>Servicios de reproducción equina</PageTitle>

        <p
          style={{
            margin: 0,
            color: COLORS.textDim,
            fontSize: "clamp(16px, 2.2vw, 18px)",
            lineHeight: 1.6,
          }}
        >
          Acompañamos cada etapa del ciclo reproductivo con protocolos
          actualizados y foco en bienestar animal.
        </p>
      </section>

      {/* Cards estáticas (no clickeables, sin hover) */}
      <section
        style={{
          maxWidth: 1280,
          margin: "32px auto 56px",
          padding: "0 16px",
        }}
      >
        <div
          style={{
            display: "grid",
            gap: 16,
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          }}
        >
          {items.map((it) => (
            <div
              key={it.title}
              style={{
                backgroundColor: COLORS.card,
                color: COLORS.white,
                borderRadius: 12,
                padding: 20,
                textAlign: "center",
                fontWeight: 700,
                fontSize: 16,
                letterSpacing: "0.02em",
                boxShadow: "0 6px 10px rgba(0,0,0,0.25)",
                // TODO: si querés ícono, metelo acá antes del título
              }}
            >
              {it.title}
            </div>
          ))}
        </div>
      </section>

      {/* Imagen full-width al final (ocupa todo el ancho de la pantalla) */}
      <section
        style={{
          width: "100vw",
          margin: 0,
          padding: 0,
          // si este section está dentro de un contenedor centrado,
          // asegúrate de no envolverlo en uno con maxWidth para que realmente sea full-bleed
        }}
      >
        <img
          src="/slicer6.png"
          alt="Servicios de La Querencia"
          style={{
            width: "100%",
          height: "clamp(360px, 50vw, 1640px)",
            objectFit: "cover",
            display: "block",
          }}
          decoding="async"
          loading="lazy"
        />
      </section>
    </div>
  );
}
