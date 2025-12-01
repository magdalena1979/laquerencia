// Hero6.tsx
import { useEffect, useState } from "react";

const COLORS = {
  title: "#333333",
  body: "#444444",
  line: "#d4d4d4",
  bg: "#ffffff",
};

const LAYOUT = {
  maxWidth: 1152,
  paddingX: 24,
  paddingYDesktop: 80,
  paddingYMobile: 48,
};

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia(query);
    const update = () => setMatches(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [query]);
  return matches;
}

export default function Hero6() {
  const mdUp = useMediaQuery("(min-width: 768px)");

  return (
    <section style={{ backgroundColor: COLORS.bg }}>
      <div
        style={{
          maxWidth: LAYOUT.maxWidth,
          margin: "0 auto",
          padding: `${
            mdUp ? LAYOUT.paddingYDesktop : LAYOUT.paddingYMobile
          }px ${LAYOUT.paddingX}px`,
        }}
      >
        {/* Título */}
        <h2
          style={{
            margin: 0,
            marginBottom: mdUp ? 24 : 16,
            fontFamily: "'Playfair Display', serif",
            fontSize: mdUp ? 50 : 36,
            lineHeight: 1.1,
            fontWeight: 600,
            color: COLORS.title,
          }}
        >
          Misión:
        </h2>

        {/* Texto */}
        <div
          style={{
            fontFamily: "'Plus Jakarta Sans', 'Montserrat', sans-serif",
            fontSize: mdUp ? 17 : 15,
            lineHeight: 1.6,
            color: COLORS.body,
            maxWidth: 640, // similar al bloque del PDF
          }}
        >
          <p style={{ margin: 0, marginBottom: 16 }}>
            Nuestra misión es{" "}
            <span style={{ fontStyle: "italic", fontWeight: 600 }}>
              ser líderes en tecnologías reproductivas equinas
            </span>
            , potenciando la genética y promoviendo una producción más eficiente.
          </p>

          <p style={{ margin: 0 }}>
            Buscamos ser una{" "}
            <span style={{ fontWeight: 600 }}>
              empresa de vanguardia en Uruguay
            </span>
            , que colabore activamente con los criadores para{" "}
            <span style={{ fontWeight: 600 }}>
              mejorar la calidad y el rendimiento de sus producciones.
            </span>
          </p>
        </div>

        {/* Línea separadora como en el PDF */}
        <div
          style={{
            marginTop: mdUp ? 56 : 40,
            borderTop: `1px solid ${COLORS.line}`,
          }}
        />
      </div>
    </section>
  );
}
