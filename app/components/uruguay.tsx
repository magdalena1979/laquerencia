import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router";

const COLORS = {
  bgMain: "#F6F4EF",
  textMain: "#1F1F1F",
  textSoft: "#555555",
  textMuted: "#777777",
  borderSoft: "rgba(0,0,0,0.08)",
};

const LAYOUT = {
  maxWidth: 1152,
  sectionPyMobile: 48,
  sectionPyDesktop: 80,
};

// Hook simple para media query
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

function useViewportHeight() {
  const [vh, setVh] = useState<number>(typeof window !== "undefined" ? window.innerHeight : 0);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const update = () => setVh(window.innerHeight);
    update();
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);
  return vh;
}

function supportsDVH() {
  if (typeof CSS === "undefined" || !CSS.supports) return false;
  return CSS.supports("height", "100dvh");
}

export default function UruguayPage() {
  const mdUp = useMediaQuery("(min-width: 768px)");
  const dvhOK = supportsDVH();
  const vh = useViewportHeight();

  // Altura ajustada para la sección hero
  const heroHeight = mdUp
    ? dvhOK
      ? "100dvh"
      : `${vh}px`
    : dvhOK
    ? "80dvh"
    : `${vh * 0.8}px`;

  return (
    <main style={{ backgroundColor: COLORS.bgMain }}>
      {/* HERO CON IMAGEN DE FONDO */}
      <section
        style={{
          position: "relative",
          height: heroHeight,
          overflow: "hidden",
        }}
      >
        {/* Imagen de fondo */}
        <img
          src="/uru1.jpg"
          alt="Paisaje uruguayo con caballos"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            zIndex: 0,
          }}
        />

        {/* Overlay con gradiente para legibilidad del texto */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "40%",
            background: "linear-gradient(to bottom, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 50%, transparent 100%)",
            zIndex: 1,
          }}
        />

        {/* Contenido de texto */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: LAYOUT.maxWidth,
            margin: "0 auto",
            padding: `${mdUp ? 160 : 120}px 24px 40px`,
            textAlign: "center",
          }}
        >
          <h1
            style={{
              margin: 0,
              marginBottom: 24,
              fontFamily: "'Playfair Display', serif",
              fontSize: mdUp ? 44 : 32,
              lineHeight: 1.15,
              color: COLORS.textMain,
              letterSpacing: "0.01em",
              fontWeight: 700,
            }}
          >
            Uruguay
          </h1>

          <p
            style={{
              margin: 0,
              maxWidth: 800,
              marginInline: "auto",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: mdUp ? 18 : 16,
              lineHeight: 1.8,
              color: COLORS.textMain,
            }}
          >
            Los equinos fueron introducidos en Uruguay junto con la ganadería y desde entonces se han constituido en un elemento común del paisaje, herramientas para la producción agropecuaria y protagonistas para diferentes formas de esparcimiento y disciplinas deportivas (alta competencia).
          </p>
        </div>
      </section>

      {/* BLOQUE DE TEXTO CON FONDO BLANCO */}
      <section
        style={{
          backgroundColor: "#FFFFFF",
          padding: `${mdUp ? 80 : 56}px 24px`,
        }}
      >
        <div
          style={{
            maxWidth: LAYOUT.maxWidth,
            margin: "0 auto",
          }}
        >
        
          {/* Texto */}
          <p
            style={{
              margin: 0,
              textAlign: "center",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: mdUp ? 20 : 17,
              lineHeight: 1.8,
              color: COLORS.textSoft,
            }}
          >
            Uruguay cuenta con excelentes condiciones para el desarrollo de la actividad ecuestre. La capacidad de los recursos naturales y climáticos hacen que el país sea una localización fundamentalmente apta para el desarrollo de este sector.
          </p>
        </div>
      </section>

      {/* SECCIÓN DE ESTADÍSTICAS */}
      <section
        style={{
          backgroundColor: "#C1C8C6",
          padding: `${mdUp ? 80 : 56}px 24px`,
        }}
      >
        <div
          style={{
            maxWidth: LAYOUT.maxWidth,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: mdUp ? "1fr 1fr" : "1fr",
            gap: mdUp ? 64 : 40,
            alignItems: "center",
          }}
        >
          {/* Texto y estadísticas */}
          <div>
            {/* Párrafo sobre el ranking */}
            <p
              style={{
                margin: 0,
                marginBottom: 32,
                fontFamily: "'Montserrat', 'Helvetica Neue', Arial, sans-serif",
                fontSize: mdUp ? 17 : 15,
                lineHeight: 1.7,
                color: COLORS.textSoft,
              }}
            >
              Uruguay se encuentra en el puesto número veinticuatro en el ranking mundial de stock de cabezas equinas. Si se considera la relación del número de habitantes por caballo,{" "}
              <strong style={{ color: COLORS.textMain, fontWeight: 700 }}>
                Uruguay ocupa el cuarto puesto a nivel mundial
              </strong>
              , con aproximadamente{" "}
              <strong style={{ color: COLORS.textMain, fontWeight: 700 }}>
                un equino cada ocho personas
              </strong>
              .
            </p>

            {/* Estadísticas grandes */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: mdUp ? "repeat(2, 1fr)" : "1fr",
                gap: 24,
                marginTop: 40,
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "'Montserrat', 'Helvetica Neue', Arial, sans-serif",
                    fontSize: mdUp ? 48 : 36,
                    fontWeight: 700,
                    color: "#0E352D",
                    marginBottom: 8,
                  }}
                >
                  425.000
                </div>
                <div
                  style={{
                    fontFamily: "'Montserrat', 'Helvetica Neue', Arial, sans-serif",
                    fontSize: 13,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: COLORS.textSoft,
                  }}
                >
                  CABEZAS DE EQUINOS
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: "'Montserrat', 'Helvetica Neue', Arial, sans-serif",
                    fontSize: mdUp ? 48 : 36,
                    fontWeight: 700,
                    color: "#0E352D",
                    marginBottom: 8,
                  }}
                >
                  1 EQUINO
                </div>
                <div
                  style={{
                    fontFamily: "'Montserrat', 'Helvetica Neue', Arial, sans-serif",
                    fontSize: 13,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: COLORS.textSoft,
                  }}
                >
                  POR CADA OCHO HABITANTES
                </div>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="/uru2.png"
              alt="Mapa de Sudamérica con Uruguay resaltado"
              style={{
                width: "100%",
                maxWidth: 500,
                height: "auto",
                display: "block",
              }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

