import { Link as RouterLink } from "react-router";
import { useEffect, useState } from "react";

const COLORS = {
  gold: "#C18A4D",
  goldDark: "#A8743F",
  white: "#FFFFFF",
};

function supportsDVH() {
  if (typeof CSS === "undefined" || !CSS.supports) return false;
  return CSS.supports("height", "100dvh");
}

function useViewportHeight() {
  const [vh, setVh] = useState<number>(typeof window !== "undefined" ? window.innerHeight : 0);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const update = () => setVh(window.innerHeight);
    update();
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    document.addEventListener("visibilitychange", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);
  return vh;
}

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
  const mdUp = useMediaQuery("(min-width: 768px)");
  const dvhOK = supportsDVH();
  const vh = useViewportHeight();

  // mismas alturas que usabas: 140vh en mobile, 180vh en desktop
  const sectionH = mdUp
    ? dvhOK ? "180dvh" : `${vh * 1.8}px`
    : dvhOK ? "140dvh" : `${vh * 1.4}px`;

  const overlayH = dvhOK ? "100dvh" : `${vh}px`;

  // hovers botones
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);

  return (
    <section style={{ position: "relative", height: sectionH }}>
      {/* Fondo que scrollea */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <img
          src="/hero1.jpg"
          alt="La Querencia"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        {/* degradé para contraste */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.3))",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Overlay STICKY con el copy (queda fijo 100vh) */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: overlayH,
          display: "grid",
          placeItems: "center",
          zIndex: 1,
          padding: `${mdUp ? 112 : 96}px 24px 0 24px`, // padding top para compensar navbar
          // pequeños hints para iOS
          willChange: "transform",
          backfaceVisibility: "hidden",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        <div style={{ maxWidth: 960, display: "flex", flexDirection: "column", gap: 24, textAlign: "left" }}>
          <h1
            style={{
              color: COLORS.white,
              fontWeight: 800,
              lineHeight: 1.1,
              margin: 0,
              fontSize: "clamp(28px, 6vw, 56px)",
              textShadow: "0 2px 8px rgba(0,0,0,0.25)",
            }}
          >
            Reproducción equina con pasión y profesionalismo en Uruguay.
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.92)",
              margin: 0,
              fontSize: "clamp(16px, 2.5vw, 20px)",
              lineHeight: 1.5,
              maxWidth: 720,
              textShadow: "0 1px 4px rgba(0,0,0,0.2)",
            }}
          >
            Nuestro objetivo es potenciar tu genética.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <RouterLink
              to="/contacto"
              onMouseEnter={() => setHover1(true)}
              onMouseLeave={() => setHover1(false)}
              style={{
                backgroundColor: hover1 ? COLORS.goldDark : COLORS.gold,
                color: COLORS.white,
                padding: "12px 32px",
                borderRadius: 6,
                fontWeight: 600,
                textDecoration: "none",
                transition: "background-color 0.2s ease",
              }}
            >
              Contáctanos
            </RouterLink>

            <RouterLink
              to="/servicios"
              onMouseEnter={() => setHover2(true)}
              onMouseLeave={() => setHover2(false)}
              style={{
                backgroundColor: hover2 ? "rgba(255,255,255,0.15)" : "transparent",
                color: COLORS.white,
                border: "1px solid rgba(255,255,255,0.7)",
                padding: "12px 32px",
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
