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
          display: "flex",
          flexDirection: mdUp ? "row" : "column",
          gap: mdUp ? LAYOUT.gapDesktop : LAYOUT.gapMobile,
          alignItems: mdUp ? "stretch" : "flex-start", // ⭐ Importante para igualar alturas
        }}
      >
        {/* IMAGEN — ahora 50% y altura igual a la del texto */}
        <div
          style={{
            flex: mdUp ? "1 1 0" : "1 1 100%", // ⭐ 50%
            maxWidth: mdUp ? "50%" : "100%",
            display: "flex",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%", // ⭐ Igualar altura exacta del texto
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 20px 45px rgba(0,0,0,0.08)",
            }}
          >
            <img
              src="/hero5.jpg"
              alt="Potrillo descansando en el campo"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%", // ⭐ Se estira para igualar la altura
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </div>

        {/* TEXTO — también 50% */}
        <div
          style={{
            flex: mdUp ? "1 1 0" : "1 1 100%", // ⭐ 50%
            maxWidth: mdUp ? "50%" : "100%",
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2
            style={{
              margin: 0,
              marginBottom: 20,
              fontFamily: "'Playfair Display', serif",
              fontSize: mdUp ? 50 : 36,
              lineHeight: 1.1,
              fontWeight: 600,
              color: COLORS.titleMain,
            }}
          >
            Nuestro{" "}
            <span style={{ color: COLORS.titleAccent }}>
              centro
            </span>
          </h2>

          <div
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: mdUp ? 17 : 15,
              lineHeight: 1.6,
              color: COLORS.body,
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <p style={{ margin: 0 }}>
              La idea de crear La Querencia Reproducción Equina nació de una
              búsqueda constante por trabajar de forma más eficiente y, al mismo
              tiempo, ofrecer simplicidad y comodidad a nuestros clientes.
            </p>
            <p style={{ margin: 0 }}>
              Con la apertura del centro logramos que los propietarios puedan
              dejar sus yeguas y padrillos en un lugar de confianza, sin
              preocuparse por los traslados o las complejidades del proceso
              reproductivo.
            </p>
            <p style={{ margin: 0 }}>
              Esto nos permite dedicar más tiempo y atención a cada animal,
              optimizando los resultados y cuidando cada detalle del manejo.
            </p>
            <p style={{ margin: 0 }}>
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
