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
  return (
    <section className="hero6-section">
      <div className="hero6-container">
        {/* Título */}
        <h2 className="hero6-title">
          Misión:
        </h2>

        {/* Texto */}
        <div className="hero6-body">
          <p>
            Nuestra misión es{" "}
            <span className="hero6-italic-bold">
              ser líderes en tecnologías reproductivas equinas
            </span>
            , potenciando la genética y promoviendo una producción más eficiente.
          </p>

          <p>
            Buscamos ser una{" "}
            <span className="hero6-bold">
              empresa de vanguardia en Uruguay
            </span>
            , que colabore activamente con los criadores para{" "}
            <span className="hero6-bold">
              mejorar la calidad y el rendimiento de sus producciones.
            </span>
          </p>
        </div>

        {/* Línea separadora como en el PDF */}
        <div className="hero6-divider" />
      </div>
    </section>
  );
}
