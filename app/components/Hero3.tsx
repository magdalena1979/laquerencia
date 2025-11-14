import { useEffect, useState, useRef } from "react";

const COLORS = {
  gold: "#C18A4D",
  textMain: "#1f1f1f",
  textBody: "#444444",
  bg: "#FFFFFF",
};

const LAYOUT = {
  maxWidth: 1152,
  sectionPyMobile: 40,
  sectionPyDesktop: 56,
  gapMobile: 32,
  gapDesktop: 48,
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

export default function Hero3() {
  const mdUp = useMediaQuery("(min-width: 768px)");
  const textRef = useRef<HTMLDivElement>(null);
  const [textHeight, setTextHeight] = useState<number>(0);

  useEffect(() => {
    if (textRef.current) {
      setTextHeight(textRef.current.offsetHeight);
    }
  }, [textRef.current, mdUp]);

  return (
    <section style={{ backgroundColor: COLORS.bg }}>
      <div
        style={{
          maxWidth: LAYOUT.maxWidth,
          margin: "0 auto",
          padding: `${mdUp ? LAYOUT.sectionPyDesktop : LAYOUT.sectionPyMobile}px 16px`,
        }}
      >
        {/* Layout principal */}
        <div
          style={{
            display: "flex",
            flexDirection: mdUp ? "row" : "column",
            gap: mdUp ? LAYOUT.gapDesktop : LAYOUT.gapMobile,
            alignItems: "stretch",
          }}
        >
          {/* TEXTO */}
          <div
            ref={textRef}
            style={{
              flex: "1 1 0",
              maxWidth: mdUp ? "50%" : "100%",
            }}
          >
            <h2
              className="hero3-title font-playfair"
              style={{
                margin: 0,
                marginBottom: mdUp ? 24 : 16,
                fontSize: mdUp ? 50 : 36,
                lineHeight: 1.05,
                fontWeight: 600,
                color: COLORS.textMain,
              }}
            >
              Nuestra <span style={{ color: COLORS.gold }}>historia</span>
            </h2>

            <div
              className="hero3-body font-jakarta"
              style={{
                fontSize: mdUp ? 17 : 15,
                lineHeight: 1.6,
                color: COLORS.textBody,
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <p style={{ margin: 0 }}>
                <span style={{ fontWeight: 600, fontStyle: "italic" }}>
                  Detrás de La Querencia hay personas apasionadas por su
                  profesión, por los caballos y por la forma de producir con
                  excelencia.
                </span>
              </p>

              <p style={{ margin: 0 }}>
                Nuestro nombre nace del amor por la tierra y del deseo de
                generar valor en ella, cuidando lo que nos identifica: el
                trabajo bien hecho y la conexión con nuestro entorno.
              </p>

              <p style={{ margin: 0 }}>
                Creemos en la fuerza de la genética uruguaya, un patrimonio que
                debemos conservar y potenciar, mejorando su eficiencia y
                proyección.
              </p>

              <p style={{ margin: 0 }}>
                Valoramos la tierra porque sabemos que{" "}
                <span style={{ fontWeight: 600 }}>
                  “un caballo bueno come lo mismo que el que no lo es”
                </span>{" "}
                —y por eso apostamos a criar y producir mejor, con
                responsabilidad y visión de futuro.
              </p>

              <p style={{ margin: 0 }}>
                Esa convicción nos llevó a especializarnos en tecnologías
                reproductivas equinas, aprovechando todo el potencial que
                ofrecen para mejorar la calidad genética y productiva.
              </p>

              <p style={{ margin: 0 }}>
                En La Querencia, buscamos ser{" "}
                <span style={{ fontWeight: 600 }}>
                  cuna de buena genética, y por lo tanto, de grandes caballos.
                </span>
              </p>
            </div>
          </div>

          {/* IMAGEN — misma altura que el texto, imagen completa */}
          <div
            style={{
              flex: "1 1 0",
              maxWidth: mdUp ? "50%" : "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: mdUp ? textHeight : "auto", // 👈 MATCH HEIGHT
            }}
          >
            <img
              src="/FOTO.jpg"
              alt="Yeguas y potrillos"
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                width: "auto",
                height: "auto",
                objectFit: "contain", // 👈 SE VE ENTERA
                display: "block",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
