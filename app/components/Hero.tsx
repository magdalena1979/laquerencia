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
  const [vh, setVh] = useState<number>(
    typeof window !== "undefined" ? window.innerHeight : 0
  );
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
  //const mdUp = useMediaQuery("(min-width: 768px)");
  //const dvhOK = supportsDVH();
  //const vh = useViewportHeight();




  return (
    <section className="hero-section">
      {/* Fondo que scrollea */}
      <div className="hero-background">
        <img
          src="/FOTO%20PRINCIPAL%20INICIO%20V2.jpeg"
          alt="La Querencia"
        />
      </div>

      {/* Overlay STICKY con el copy */}
      <div
        className="hero-overlay"
       
      >
        <div className="hero-content">
          <h1 className="hero-title hero-title-playfair">
            Reproducción equina de
            <br />
            vanguardia en Uruguay.
          </h1>

          <p className="hero-subtitle hero-subtitle-jakarta">
            Nuestro objetivo es potenciar tu genética.
          </p>
        </div>
      </div>
    </section>
  );
}
