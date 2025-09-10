import { Link as RouterLink } from "react-router";
import { useEffect, useState } from "react";

// Si ya tenés un archivo de tokens, podés reemplazar estos valores por tus tokens.
const COLORS = {
  gold: "#C18A4D",
  goldDark: "#A8743F",
  white: "#FFFFFF",
};
const SPACING = {
  xs: 6,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
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

export default function HeroSticky() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const sectionHeight = isDesktop ? "180vh" : "140vh";

  // hovers de botones (sin CSS)
  const [ctaHover, setCtaHover] = useState(false);
  const [secHover, setSecHover] = useState(false);

  return (
    <section
      style={{
        position: "relative",
        height: sectionHeight,
        overflow: "hidden",
      }}
    >
      {/* Fondo (imagen full) */}
      <div style={{ position: "absolute", inset: 0 }}>
        <img
          src="/hero1.jpg"
          alt="Centro de reproducción equina La Querencia"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
        {/* Capa para contraste del texto (degradé) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.30))",
          }}
        />
      </div>

      {/* Overlay STICKY con copy + CTAs */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "grid",
          placeItems: "center",
          zIndex: 1,
          padding: `0 ${SPACING.lg}px`,
        }}
      >
        <div
          style={{
            maxWidth: 960, // ~"3xl"
            display: "flex",
            flexDirection: "column",
            gap: SPACING.lg,
            textAlign: "left",
          }}
        >
          <h1
            style={{
              color: COLORS.white,
              fontWeight: 800,
              lineHeight: 1.1,
              margin: 0,
              // clamp para responsivo sin CSS
              fontSize: "clamp(28px, 6vw, 56px)",
            }}
          >
            Reproducción equina de excelencia en Uruguay.
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.92)",
              margin: 0,
              fontSize: "clamp(16px, 2.5vw, 20px)",
              lineHeight: 1.5,
              maxWidth: 720,
            }}
          >
            Cuidamos tu yegua, potenciamos tu genética.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: SPACING.md,
              flexWrap: "wrap",
            }}
          >
            {/* CTA principal */}
            <RouterLink
              to="/contacto"
              onMouseEnter={() => setCtaHover(true)}
              onMouseLeave={() => setCtaHover(false)}
              style={{
                backgroundColor: ctaHover ? COLORS.goldDark : COLORS.gold,
                color: COLORS.white,
                border: "none",
                padding: `${SPACING.sm}px ${SPACING.xl}px`,
                borderRadius: 6,
                fontWeight: 600,
                textDecoration: "none",
                transition: "background-color 0.2s ease",
              }}
            >
              Contáctanos
            </RouterLink>

            {/* CTA secundaria (outline) */}
            <RouterLink
              to="/servicios"
              onMouseEnter={() => setSecHover(true)}
              onMouseLeave={() => setSecHover(false)}
              style={{
                backgroundColor: secHover ? "rgba(255,255,255,0.15)" : "transparent",
                color: COLORS.white,
                border: "1px solid rgba(255,255,255,0.7)",
                padding: `${SPACING.sm}px ${SPACING.xl}px`,
                borderRadius: 6,
                fontWeight: 600,
                textDecoration: "none",
                transition: "background-color 0.2s ease, border-color 0.2s ease",
              }}
            >
              Ver servicios
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  );
}
