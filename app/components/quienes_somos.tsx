import React, { useEffect, useState } from "react";

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

export default function QuienesSomosPage() {
  const mdUp = useMediaQuery("(min-width: 768px)");

  return (
    <main style={{ backgroundColor: COLORS.bgMain }}>
      {/* HERO */}
      <section
        style={{
          backgroundColor: "#F3F3F3",
          borderBottom: `1px solid ${COLORS.borderSoft}`,
        }}
      >
        <div
          style={{
            maxWidth: LAYOUT.maxWidth,
            margin: "0 auto",
            padding: `${mdUp ? 160 : 120}px 24px 40px`,
            textAlign: "center",
          }}
        >
          <h1
            style={{
              margin: 0,
              marginBottom: 12,
              fontFamily: "'Playfair Display', serif",
              fontSize: mdUp ? 44 : 32,
              lineHeight: 1.15,
              color: COLORS.textMain,
              letterSpacing: "0.01em",
            }}
          >
            Quiénes somos
          </h1>

          <p
            style={{
              margin: 0,
              maxWidth: 640,
              marginInline: "auto",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: mdUp ? 18 : 16,
              lineHeight: 1.7,
              color: COLORS.textSoft,
            }}
          >
            Acompañamos cada etapa del ciclo reproductivo con protocolos
            actualizados, priorizando siempre el bienestar animal.
          </p>
        </div>
      </section>

      {/* FOTO PANORÁMICA (caballos) */}
      <section
        style={{
          backgroundColor: "#FFFFFF",
          borderBottom: `1px solid ${COLORS.borderSoft}`,
        }}
      >
        <div
          style={{
            maxWidth: "100%",
            margin: "0 auto",
            overflow: "hidden",
          }}
        >
          <img
            src="/quienesosmos3.jpg"
            alt="Caballos en el centro de reproducción"
            style={{
              width: "100%",
              height: mdUp ? 360 : 220,
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      </section>

      {/* EQUIPO */}
      <section
        style={{
          backgroundColor: "#FFFFFF",
        }}
      >
        <div
          style={{
            maxWidth: LAYOUT.maxWidth,
            margin: "0 auto",
            padding: `${mdUp ? 72 : 48}px 24px ${mdUp ? 64 : 40}px`,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: mdUp
                ? "repeat(3, minmax(0, 1fr))"
                : "1fr",
              gap: mdUp ? 32 : 40,
            }}
          >
            {/* Verónica */}
            <article>
              <div
                style={{
                  width: "100%",
                  marginBottom: 16,
                  backgroundColor: "#E4E2DD",
                  overflow: "hidden",
                }}
              >
                <img
                  src="/quienesomos1.JPG"
                  alt="Verónica Cavestany"
                  style={{
                    width: "100%",
                    height: 360,
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </div>
              <h3
                style={{
                  margin: 0,
                  marginBottom: 4,
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 20,
                  color: COLORS.textMain,
                }}
              >
                Verónica Cavestany
              </h3>
              <p
                style={{
                  margin: 0,
                  marginBottom: 10,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 12,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: COLORS.textMuted,
                }}
              >
                Médica veterinaria
              </p>
              <p
                style={{
                  margin: 0,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: COLORS.textSoft,
                }}
              >
                Universidad de la República (Uruguay). Especializada en
                reproducción equina y gestión de programas de cría.
                Universidad Austral (Buenos Aires). Programa de Dirección de
                Agronegocios.
              </p>
            </article>

            {/* José */}
            <article>
              <div
                style={{
                  width: "100%",
                  marginBottom: 16,
                  backgroundColor: "#E4E2DD",
                  overflow: "hidden",
                  height: 360,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Sin imagen */}
              </div>
              <h3
                style={{
                  margin: 0,
                  marginBottom: 4,
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 20,
                  color: COLORS.textMain,
                }}
              >
                José Koci
              </h3>
              <p
                style={{
                  margin: 0,
                  marginBottom: 10,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 12,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: COLORS.textMuted,
                }}
              >
                Médico veterinario
              </p>
              <p
                style={{
                  margin: 0,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: COLORS.textSoft,
                }}
              >
                Universidad de la República (Uruguay). Especializado en
                reproducción, neonatología y clínica equina. Dirección técnica
                en haras.
              </p>
            </article>

            {/* Walter */}
            <article>
              <div
                style={{
                  width: "100%",
                  marginBottom: 16,
                  backgroundColor: "#E4E2DD",
                  overflow: "hidden",
                }}
              >
                <img
                  src="/walter.jpg"
                  alt="Walter"
                  style={{
                    width: "100%",
                    height: 360,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
              <h3
                style={{
                  margin: 0,
                  marginBottom: 4,
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 20,
                  color: COLORS.textMain,
                }}
              >
                Walter
              </h3>
              <p
                style={{
                  margin: 0,
                  marginBottom: 10,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 12,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: COLORS.textMuted,
                }}
              >
                Asistente
              </p>
              <p
                style={{
                  margin: 0,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: COLORS.textSoft,
                }}
              >
                Asistencia en manejo de campo, logística y apoyo a
                procedimientos reproductivos. Perfil en construcción.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CÓMO TRABAJAMOS */}
      <section style={{ backgroundColor: "#F6F4EF" }}>
        <div
          style={{
            maxWidth: LAYOUT.maxWidth,
            margin: "0 auto",
            padding: `${mdUp ? 72 : 56}px 24px ${mdUp ? 80 : 64}px`,
            textAlign: "center",
          }}
        >
          <h2
            style={{
              margin: 0,
              marginBottom: 16,
              fontFamily: "'Playfair Display', serif",
              fontSize: mdUp ? 34 : 26,
              color: COLORS.textMain,
              letterSpacing: "0.01em",
            }}
          >
            Cómo trabajamos
          </h2>

          <p
            style={{
              margin: 0,
              maxWidth: 720,
              marginInline: "auto",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 16,
              lineHeight: 1.8,
              color: COLORS.textSoft,
            }}
          >
            Impulsados por nuestra vocación veterinaria, fundamos el centro de
            reproducción equina para aportar eficiencia y soluciones simples al
            manejo reproductivo de cada cliente.
          </p>
        </div>
      </section>
    </main>
  );
}
