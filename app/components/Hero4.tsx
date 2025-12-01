// Hero4.tsx
import { useEffect, useState } from "react";

const COLORS = {
  bg: "#C2C8C6",
  textSoft: "#555555",
  textStrong: "#2A2A2A",
};

const LAYOUT = {
  maxWidth: 960,
  sectionPyMobile: 44,
  sectionPyDesktop: 64,
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
          padding: `${
            mdUp ? LAYOUT.sectionPyDesktop : LAYOUT.sectionPyMobile
          }px 24px`,
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
              fontSize: mdUp ? 28 : 14,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: COLORS.textSoft,
              fontWeight: 500,
            }}
          >
            NUESTRO OBJETIVO ES
          </p>
          <p
            style={{
              margin: mdUp ? "0px 0 0" : "0px 0 0",
              fontFamily:
                "'Plus Jakarta Sans', 'Montserrat', 'Helvetica Neue', Arial, sans-serif",
              fontSize: mdUp ? 28 : 14,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: COLORS.textSoft,
              fontWeight: 500,
            }}
          >
            AYUDAR A NUESTROS CLIENTES A
          </p>

          {/* Línea inferior fuerte */}
          <p
            style={{
              margin: mdUp ? "0px 0 0" : "0px 0 0",
              fontFamily: "'Playfair Display', serif",
              fontSize: mdUp ? 48 : 32,
              fontWeight: 600,
              letterSpacing: "0.06em",
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
