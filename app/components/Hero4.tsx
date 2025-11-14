// Hero4.tsx
import { useEffect, useState } from "react";

const COLORS = {
  bg: "#C2C8C6",
  textSoft: "#444444",
  textStrong: "#2a2a2a",
};

const LAYOUT = {
  maxWidth: 1152,
  sectionPyMobile: 48,
  sectionPyDesktop: 72,
};

// media query hook
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

export default function Hero4() {
  const mdUp = useMediaQuery("(min-width: 768px)");

  return (
    <section
      style={{
        backgroundColor: COLORS.bg,
      }}
    >
      <div
        style={{
          maxWidth: LAYOUT.maxWidth,
          margin: "0 auto",
          padding: `${mdUp ? LAYOUT.sectionPyDesktop : LAYOUT.sectionPyMobile}px 24px`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            textAlign: "center",
          }}
        >
          {/* Líneas superiores */}
          <p
            style={{
              margin: 0,
              fontFamily:
                "'Plus Jakarta Sans', 'Montserrat', 'Helvetica Neue', Arial, sans-serif",
              fontSize: mdUp ? 36 : 24,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: COLORS.textSoft,
            }}
          >
            NUESTRO OBJETIVO ES
          </p>
          <p
            style={{
              margin: mdUp ? "0px 0 0px 0" : "0px 0 0px 0",
              fontFamily:
                "'Plus Jakarta Sans', 'Montserrat', 'Helvetica Neue', Arial, sans-serif",
              fontSize: mdUp ? 36 : 24,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: COLORS.textSoft,
            }}
          >
            AYUDAR A NUESTROS CLIENTES A
          </p>

          {/* Línea inferior fuerte */}
          <p
            style={{
              margin: mdUp ? "0px 0 0 0" : "0px 0 0 0",
              fontFamily: "'Playfair Display', serif",
              fontSize: mdUp ? 54 : 36,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: COLORS.textStrong,
            }}
          >
            PRODUCIR MEJOR
          </p>
        </div>
      </div>
    </section>
  );
}
