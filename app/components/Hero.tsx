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
          src="/FOTO%20PRINCIPAL%20INICIO%20V2.jpeg"
          alt="La Querencia"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        {/* degradé para contraste */}
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
          padding: `${mdUp ? 48 : 36}px 24px 0 24px`, // bloque aún más arriba
          // pequeños hints para iOS
          willChange: "transform",
          backfaceVisibility: "hidden",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        <div
          style={{
            maxWidth: 960,
            display: "flex",
            flexDirection: "column",
            gap: 24,
            textAlign: "center",
            alignItems: "center",
            color: "#111111",
          }}
        >
          <h1
            className="hero-title-playfair"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              color: "#1f1f1f",
              lineHeight: 1.05,
              margin: 0,
              fontSize: mdUp ? "64px" : "36px",
              letterSpacing: "-0.2px",
              fontStyle: "normal",
            }}
          >
            Reproducción equina de <br />
            vanguardia en Uruguay.
          </h1>

          <p
            className="hero-subtitle-jakarta"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "#4c4c4c",
              margin: 0,
              fontSize: mdUp ? "26px" : "18px",
              lineHeight: 1.55,
              fontWeight: 500,
              letterSpacing: "0.02em",
              maxWidth: 760,
            }}
          >
            Nuestro objetivo es potenciar tu genética.
          </p>

        </div>
      </div>
    </section>
  );
}
