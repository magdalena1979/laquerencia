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
    <section className="hero3-section">
      <div className="hero3-container" style={{ padding: `${mdUp ? LAYOUT.sectionPyDesktop : LAYOUT.sectionPyMobile}px 16px` }}>
        {/* Layout principal */}
        <div className="hero3-layout" style={{ gap: mdUp ? LAYOUT.gapDesktop : LAYOUT.gapMobile }}>
          {/* TEXTO */}
          <div
            ref={textRef}
            className="hero3-text"
          >
            <h2 className="hero3-title font-playfair">
              Nuestra <span className="hero3-gold-text">historia</span>
            </h2>

            <div className="hero3-body font-jakarta">
              <p>
                Detrás de La Querencia hay personas <span className="hero3-bold-italic">apasionadas por su
                profesión, por los caballos y por la forma de producir con
                excelencia.
                </span>
              </p>

              <p>
                Nuestro nombre nace del amor por la tierra y del deseo de
                generar valor en ella, cuidando lo que nos identifica: el
                trabajo bien hecho y la conexión con nuestro entorno.
              </p>

              <p>
                Creemos en la fuerza de la genética uruguaya, un patrimonio que
                debemos conservar y potenciar, mejorando su eficiencia y
                proyección.
              </p>

              <p>
                Valoramos la tierra porque sabemos que{" "}
                <span className="hero3-bold-italic">
                  "un caballo bueno come lo mismo que el que no lo es"
                </span>{" "}
                —y por eso apostamos a criar y producir mejor, con
                responsabilidad y visión de futuro.
              </p>

              <p>
                Esa convicción nos llevó a especializarnos en tecnologías
                reproductivas equinas, aprovechando todo el potencial que
                ofrecen para mejorar la calidad genética y productiva.
              </p>

              <p>
                En La Querencia, buscamos ser{" "}
                <span className="hero3-bold">
                  cuna de buena genética, y por lo tanto, de grandes caballos.
                </span>
              </p>
            </div>
          </div>

          {/* IMAGEN — misma altura que el texto, imagen completa */}
          <div
            className="hero3-image-wrapper"
            style={{
              height: mdUp ? textHeight : "auto",
            }}
          >
            <img
              src="/FOTO.jpg"
              alt="Yeguas y potrillos"
              className="hero3-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
