import { useEffect, useState } from "react";

const COLORS = {
  titleMain: "#2b2d2b",
  titleAccent: "#697f73",
  body: "#505050",
  bg: "#f5f4f0",
};

const LAYOUT = {
  maxWidth: 1152,
  gapDesktop: 56,
  gapMobile: 32,
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

export default function Hero5() {
  return (
    <section className="hero5-section">
      <div className="hero5-container">
        {/* IMAGEN — ahora 50% y altura igual a la del texto */}
        <div className="hero5-image-wrapper">
          <div className="hero5-image-container">
            <img
              src="/hero5.jpg"
              alt="Potrillo descansando en el campo"
              className="hero5-image"
            />
          </div>
        </div>

        {/* TEXTO — también 50% */}
        <div className="hero5-text">
          <h2 className="hero5-title">
            Nuestro{" "}
            <span className="hero5-accent">
              centro
            </span>
          </h2>

          <div className="hero5-body">
            <p>
              La idea de crear La Querencia Reproducción Equina nació de una
              búsqueda constante por trabajar de forma más eficiente y, al mismo
              tiempo, ofrecer simplicidad y comodidad a nuestros clientes.
            </p>
            <p>
              Con la apertura del centro logramos que los propietarios puedan
              dejar sus yeguas y padrillos en un lugar de confianza, sin
              preocuparse por los traslados o las complejidades del proceso
              reproductivo.
            </p>
            <p>
              Esto nos permite dedicar más tiempo y atención a cada animal,
              optimizando los resultados y cuidando cada detalle del manejo.
            </p>
            <p>
              En La Querencia, prestamos especial atención al bienestar animal y
              a construir relaciones de confianza con quienes nos eligen, porque
              entendemos que detrás de cada caballo hay una historia, una
              expectativa y una gran pasión compartida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
