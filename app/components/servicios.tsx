import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router";

const COLORS = {
  bgMain: "#F6F4EF",
  bgBand: "#C2C8C6",
  textMain: "#1F1F1F",
  textSoft: "#555555",
  textMuted: "#777777",
  gold: "#C18A4D",
  borderSoft: "rgba(0,0,0,0.08)",
};

const LAYOUT = {
  maxWidth: 1152,
  sectionPyMobile: 48,
  sectionPyDesktop: 80,
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

export default function ServiciosPage() {
  const mdUp = useMediaQuery("(min-width: 768px)");

  return (
    <main style={{ backgroundColor: COLORS.bgMain, border: "none", outline: "none" }}>
      {/* HERO / ENCABEZADO */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          minHeight: mdUp ? 900 : 700,
          border: "none",
          outline: "none",
          marginBottom: 0,
          paddingBottom: 0,
        }}
      >
        {/* Video de fondo */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
            border: "none !important",
            outline: "none !important",
            display: "block",
            margin: 0,
            padding: 0,
            boxShadow: "none",
            WebkitAppearance: "none",
            MozAppearance: "none",
          }}
        >
          <source src="/VIDEO_SERVICIOS.mp4" type="video/mp4" />
        </video>

        {/* Contenido */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "100%",
            margin: "0 auto",
            padding: `${mdUp ? 160 : 120}px ${mdUp ? 80 : 24}px 56px`,
            textAlign: "center",
          }}
        >
          <h1
            style={{
              margin: 0,
              marginBottom: 16,
              fontFamily: "'Playfair Display', serif",
              fontSize: mdUp ? 44 : 32,
              lineHeight: 1.12,
              color: COLORS.textMain,
              letterSpacing: "0.01em",
              fontWeight: 700,
            }}
          >
            Servicios de
            <br />
            reproducción equina
          </h1>

          <p
            style={{
              margin: 0,
              marginTop: 10,
              maxWidth: 640,
              marginInline: "auto",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: mdUp ? 18 : 16,
              lineHeight: 1.7,
              color: COLORS.textSoft,
            }}
          >
            Acompañamos cada etapa del ciclo reproductivo con
            protocolos actualizados y foco en bienestar animal.
          </p>
        </div>
      </section>

      {/* GRID DE SERVICIOS DETALLADOS */}
      <section
        style={{
          backgroundColor: "#E5DED6",
          border: "none",
          outline: "none",
          marginTop: 0,
          paddingTop: 0,
          marginBottom: 0,
          borderTop: "none",
          borderBottom: "none",
        }}
      >
        <div
          style={{
            maxWidth: LAYOUT.maxWidth,
            margin: "0 auto",
            padding: `${mdUp ? 80 : 56}px 24px`,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: mdUp ? "repeat(3, 1fr)" : "1fr",
              gap: mdUp ? 40 : 32,
            }}
          >
            {/* 1. SEGUIMIENTO FOLICULAR */}
            <div>
              <h3
                style={{
                  margin: 0,
                  marginBottom: 20,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: mdUp ? 16 : 15,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0",
                  color: COLORS.textMain,
                }}
              >
                SEGUIMIENTO FOLICULAR
              </h3>
              <ul
                style={{
                  margin: 0,
                  padding: 0,
                  listStyle: "none",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 15,
                  lineHeight: 1.5,
                  color: COLORS.textSoft,
                }}
              >
                <li style={{ marginBottom: 8, paddingLeft: 28, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, fontSize: "20px", lineHeight: "1.2" }}>○</span>
                  Optimización de la reproducción
                </li>
                <li style={{ marginBottom: 8, paddingLeft: 28, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, fontSize: "20px", lineHeight: "1.2" }}>○</span>
                  Aumento de la tazas de concepción
                </li>
                <li style={{ marginBottom: 8, paddingLeft: 28, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, fontSize: "20px", lineHeight: "1.2" }}>○</span>
                  Identificación de patologías reproductivas
                </li>
                <li style={{ marginBottom: 8, paddingLeft: 28, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, fontSize: "20px", lineHeight: "1.2" }}>○</span>
                  Optimizar el uso del padrillo
                </li>
              </ul>
            </div>

            {/* 2. CHEQUEO DE GESTACIÓN */}
            <div>
              <h3
                style={{
                  margin: 0,
                  marginBottom: 20,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: mdUp ? 16 : 15,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0",
                  color: COLORS.textMain,
                }}
              >
                CHEQUEO DE GESTACIÓN
              </h3>
              <ul
                style={{
                  margin: 0,
                  padding: 0,
                  listStyle: "none",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 15,
                  lineHeight: 1.5,
                  color: COLORS.textSoft,
                }}
              >
                <li style={{ marginBottom: 8, paddingLeft: 28, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, fontSize: "20px", lineHeight: "1.2" }}>○</span>
                  Conocer edad gestacional para saber
                </li>
                <li style={{ marginBottom: 8, paddingLeft: 28, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, fontSize: "20px", lineHeight: "1.2" }}>○</span>
                  fecha de parto
                </li>
                <li style={{ marginBottom: 8, paddingLeft: 28, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, fontSize: "20px", lineHeight: "1.2" }}>○</span>
                  Identificación de patologías
                </li>
                <li style={{ marginBottom: 8, paddingLeft: 28, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, fontSize: "20px", lineHeight: "1.2" }}>&gt;</span>
                  Evitar pérdidas
                </li>
              </ul>
            </div>

            {/* 3. COLECTA Y ENVÍO DE SEMEN */}
            <div>
              <h3
                style={{
                  margin: 0,
                  marginBottom: 20,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: mdUp ? 16 : 15,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0",
                  color: COLORS.textMain,
                }}
              >
                COLECTA Y ENVÍO DE SEMEN
              </h3>
              <ul
                style={{
                  margin: 0,
                  padding: 0,
                  listStyle: "none",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 15,
                  lineHeight: 1.5,
                  color: COLORS.textSoft,
                }}
              >
                <li style={{ marginBottom: 8, paddingLeft: 28, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, fontSize: "20px", lineHeight: "1.2" }}>○</span>
                  Evitar mover el padrillo
                </li>
                <li style={{ marginBottom: 8, paddingLeft: 28, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, fontSize: "20px", lineHeight: "1.2" }}>○</span>
                  Optimización del uso de padrillo
                </li>
                <li style={{ marginBottom: 8, paddingLeft: 28, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, fontSize: "20px", lineHeight: "1.2" }}>○</span>
                  Facilitar venta de servicios
                </li>
              </ul>
            </div>

            {/* 4. CONGELACIÓN Y BANCO DE SEMEN */}
            <div>
              <h3
                style={{
                  margin: 0,
                  marginBottom: 20,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: mdUp ? 16 : 15,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0",
                  color: COLORS.textMain,
                }}
              >
                CONGELACIÓN Y BANCO
                <br />
                DE SEMEN
              </h3>
              <ul
                style={{
                  margin: 0,
                  padding: 0,
                  listStyle: "none",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 15,
                  lineHeight: 1.5,
                  color: COLORS.textSoft,
                }}
              >
                <li style={{ marginBottom: 8, paddingLeft: 28, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, fontSize: "20px", lineHeight: "1.2" }}>○</span>
                  Respaldo genético
                </li>
                <li style={{ marginBottom: 8, paddingLeft: 28, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, fontSize: "20px", lineHeight: "1.2" }}>○</span>
                  Exportación de material genético
                </li>
                <li style={{ marginBottom: 8, paddingLeft: 28, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, fontSize: "20px", lineHeight: "1.2" }}>○</span>
                  Optimizar el envió de semen
                </li>
              </ul>
            </div>

            {/* 5. INSEMINACIÓN ARTIFICIAL */}
            <div>
              <h3
                style={{
                  margin: 0,
                  marginBottom: 20,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: mdUp ? 16 : 15,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0",
                  color: COLORS.textMain,
                }}
              >
                INSEMINACIÓN ARTIFICIAL
                <br />
                <span style={{ fontSize: mdUp ? "13px" : "12px", textTransform: "none", letterSpacing: "0" }}>
                  (CON REFRIGERADO O CONGELADO)
                </span>
              </h3>
              <ul
                style={{
                  margin: 0,
                  padding: 0,
                  listStyle: "none",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 15,
                  lineHeight: 1.5,
                  color: COLORS.textSoft,
                }}
              >
                <li style={{ marginBottom: 8, paddingLeft: 28, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, fontSize: "20px", lineHeight: "1.2" }}>○</span>
                  Evitar accidentes debido a la monta natural.
                </li>
                <li style={{ marginBottom: 8, paddingLeft: 28, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, fontSize: "20px", lineHeight: "1.2" }}>○</span>
                  Poder utilizar padrillos extranjeros.
                </li>
                <li style={{ marginBottom: 8, paddingLeft: 28, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, fontSize: "20px", lineHeight: "1.2" }}>○</span>
                  Seguir produciendo con padrillos que ya no existen.
                </li>
                <li style={{ marginBottom: 8, paddingLeft: 28, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, fontSize: "20px", lineHeight: "1.2" }}>○</span>
                  Poder utilizar diferentes padrillos sin tener que mover las yeguas a diferentes lugares.
                </li>
              </ul>
            </div>

            {/* 6. TRANSFERENCIA DE EMBRIONES */}
            <div>
              <h3
                style={{
                  margin: 0,
                  marginBottom: 20,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: mdUp ? 16 : 15,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0",
                  color: COLORS.textMain,
                }}
              >
                TRANSFERENCIA
                <br />
                DE EMBRIONES
              </h3>
              <ul
                style={{
                  margin: 0,
                  padding: 0,
                  listStyle: "none",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 15,
                  lineHeight: 1.5,
                  color: COLORS.textSoft,
                }}
              >
                <li style={{ marginBottom: 8, paddingLeft: 28, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, fontSize: "20px", lineHeight: "1.2" }}>○</span>
                  Evitar riesgos de gestación y parto
                </li>
                <li style={{ marginBottom: 8, paddingLeft: 28, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, fontSize: "20px", lineHeight: "1.2" }}>○</span>
                  Mayor número de crías por año
                </li>
                <li style={{ marginBottom: 8, paddingLeft: 28, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, fontSize: "20px", lineHeight: "1.2" }}>○</span>
                  Posibilidad de hijos con distintos padrillos
                </li>
                <li style={{ marginBottom: 8, paddingLeft: 28, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, fontSize: "20px", lineHeight: "1.2" }}>○</span>
                  Acortar el tiempo de prueba de cruzamientos
                </li>
                <li style={{ marginBottom: 8, paddingLeft: 28, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, fontSize: "20px", lineHeight: "1.2" }}>○</span>
                  Poder continuar con la vida deportiva de la yegua y reproducirla
                </li>
                <li style={{ marginBottom: 8, paddingLeft: 28, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, fontSize: "20px", lineHeight: "1.2" }}>○</span>
                  OPU (Aspiración de ovocitos)
                </li>
                <li style={{ marginBottom: 8, paddingLeft: 28, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, fontSize: "20px", lineHeight: "1.2" }}>○</span>
                  <strong>CAPACITANDONOS</strong> - Técnica que se utiliza para posterior utilización de ICSI
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN PADRILLOS */}
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
            padding: `${mdUp ? 72 : 48}px 24px`,
          }}
        >
          <h2
            style={{
              margin: 0,
              marginBottom: 20,
              fontFamily: "'Playfair Display', serif",
              fontSize: mdUp ? 32 : 26,
              color: COLORS.textMain,
              lineHeight: 1.25,
              textAlign: "center",
            }}
          >
            Padrillos
          </h2>
          <p
            style={{
              margin: 0,
              marginBottom: 40,
              maxWidth: 800,
              marginInline: "auto",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 16,
              lineHeight: 1.8,
              color: COLORS.textSoft,
              textAlign: "center",
            }}
          >
            Coordinamos el envío y recepción de semen fresco y/o congelado,
            dependiendo de la necesidad de cada programa reproductivo.
            Además, contamos con padrillos residentes y banco de semen
            congelado de algunos padrillos para venta de servicios.
          </p>

          {/* Contenedor del iframe */}
          <div
            style={{
              width: "100%",
              border: `1px solid ${COLORS.borderSoft}`,
              borderRadius: 12,
              overflow: "hidden",
              backgroundColor: "#FAF9F6",
            }}
          >
            <iframe
              src="https://laquerenciacentroequino.crioonline.com/App/Guest/GroupOfHorses/1327"
              title="Padrillos disponibles - La Querencia"
              style={{
                width: "100%",
                height: mdUp ? "800px" : "600px",
                border: "none",
                display: "block",
              }}
              allow="fullscreen"
            />
          </div>
        </div>
      </section>


     
    </main>
  );
}
