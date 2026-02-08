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
  return (
    <section className="hero4-section">
      <div className="hero4-container">
        <div className="hero4-content">
          {/* Líneas superiores */}
          <p className="hero4-line">
            NUESTRO OBJETIVO ES
          </p>
          <p className="hero4-line">
            AYUDAR A NUESTROS CLIENTES A
          </p>

          {/* Línea inferior fuerte */}
          <p className="hero4-strong">
            PRODUCIR MEJOR
          </p>
        </div>
      </div>
    </section>
  );
}
