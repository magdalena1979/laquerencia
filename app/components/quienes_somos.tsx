import { Link as RouterLink } from "react-router";
import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

const COLORS = {
  bg: "#15322e",
  border: "#c28c4e", // borde dorado translúcido
  borderDark: "rgba(168,116,63,0.5)",
  gold: "#A8743F",
  white: "#FFFFFF",
  btn: "rgba(168,116,63,0.5)",
  btnHover: "rgba(168,116,63,0.5)",
};

export default function AboutPreview() {
  const [hoverBtn, setHoverBtn] = useState(false);

  return (
    <section
      id="quienes-somos-preview"
      style={{
        backgroundColor: COLORS.bg,
        paddingTop: 48,
        paddingBottom: 80,
      }}
    >
      <div
        style={{
          maxWidth: 1280, // Chakra 7xl ≈ 80rem
          margin: "0 auto",
          padding: "0 16px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: window.innerWidth >= 768 ? "row" : "column",
            gap: window.innerWidth >= 768 ? 48 : 32,
            alignItems: window.innerWidth >= 768 ? "center" : "flex-start",
            borderWidth: 1,
            borderColor: COLORS.border,
            borderStyle: "solid",
            borderRadius: 16,
            padding: window.innerWidth >= 768 ? 32 : 20,
            backgroundColor: "transparent",
            boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
          }}
        >
          {/* Imagen */}
          <div
            style={{
              flexShrink: 0,
              width: window.innerWidth >= 768 ? "44%" : "100%",
            }}
          >
            <img
              src="/equipo.jpg"
              alt="Equipo de La Querencia en el centro de reproducción"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 12,
              }}
            />
          </div>

          {/* Texto */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <h2
              style={{
                fontSize: window.innerWidth >= 768 ? "2rem" : "1.5rem",
                color: COLORS.gold,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                margin: 0,
              }}
            >
              Quiénes somos
            </h2>

            <p
              style={{
                fontSize: window.innerWidth >= 768 ? "18px" : "16px",
                color: COLORS.white,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Somos un centro uruguayo especializado en reproducción equina con foco en
              inseminación, manejo de yeguas donantes y biotecnologías reproductivas.
              Acompañamos a criadores y studs con protocolos basados en evidencia,
              infraestructura adecuada y un equipo veterinario con trayectoria en Uruguay
              y la región.
            </p>

            <div>
              <RouterLink
                to="/quienes_somos"
                onMouseEnter={() => setHoverBtn(true)}
                onMouseLeave={() => setHoverBtn(false)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  backgroundColor: hoverBtn ? COLORS.border: COLORS.borderDark,
                  color: COLORS.white,
                  padding: "12px 24px",
                  borderRadius: 6,
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "background-color 0.2s ease",
                }}
              >
                Conocer al equipo
                <ChevronRight size={18} />
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
