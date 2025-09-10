import { Link as RouterLink } from "react-router";
import { useEffect, useState } from "react";

const COLORS = {
  bg: "#15322e",
  gold: "#C18A4D",
  goldDark: "#A8743F",
  white: "#FFFFFF",
  btn2: "#1E3832",
  btn2Hover: "#142824",
};

const S = {
  containerMax: 1280, // Chakra 7xl ≈ 80rem = 1280px
  sectionPyMobile: 20, // px
  sectionPyDesktop: 28, // px
  gapMobile: 32,
  gapDesktop: 40,
  btnPy: 12,
  btnPx: 24,
  radius: 16,
};

// media query hook sin CSS
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

// wrapper para mantener relación 1:1 (16/16)
function Square({ width, children }: { width: number; children: React.ReactNode }) {
  return (
    <div style={{ width, position: "relative" }}>
      <div style={{ paddingTop: "100%" }} />
      <div style={{ position: "absolute", inset: 0 }}>{children}</div>
    </div>
  );
}

export default function Hero2() {
  const mdUp = useMediaQuery("(min-width: 768px)");

  // hovers botones
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);

  // anchos de la tarjeta según breakpoint (como w={{ base:280, md:300, lg:380 }})
  const cardWidth = mdUp ? 300 : 280;
  const lgUp = useMediaQuery("(min-width: 1024px)");
  const cardWidthFinal = lgUp ? 380 : cardWidth;

  return (
    <section style={{ backgroundColor: COLORS.bg }}>
      {/* Container */}
      <div
        style={{
          maxWidth: S.containerMax,
          margin: "0 auto",
          padding: `${mdUp ? S.sectionPyDesktop : S.sectionPyMobile}px 16px`,
        }}
      >
        {/* Stack principal: column -> row */}
        <div
          style={{
            display: "flex",
            flexDirection: mdUp ? "row" : "column",
            alignItems: "center",
            gap: mdUp ? S.gapDesktop : S.gapMobile,
          }}
        >
          {/* Columna de texto (~58% en md+) */}
          <div
            style={{
              flex: mdUp ? "0 0 58%" : "1 1 100%",
              maxWidth: mdUp ? "58%" : "100%",
              display: "flex",
              flexDirection: "column",
              gap: mdUp ? 24 : 20,
            }}
          >
            {/* Heading con subrayado dorado al estilo Chakra */}
            <h2
              style={{
                lineHeight: 1.1,
                fontWeight: 600,
                margin: 0,
                fontSize: "clamp(28px, 5vw, 56px)",
                color: COLORS.white,
              }}
            >
              <span style={{ position: "relative", color: COLORS.white }}>
                Genética equina al más
                <span
                  aria-hidden
                  style={{
                    content: "''",
                    position: "absolute",
                    left: 0,
                    bottom: 2,
                    width: "100%",
                    height: "30%",
                    backgroundColor: COLORS.gold,
                    zIndex: -1,
                  }}
                />
              </span>
              <br />
              <span style={{ color: COLORS.gold }}>alto nivel</span>
            </h2>

            <p
              style={{
                fontSize: "18px",
                color: COLORS.white,
                margin: 0,
                lineHeight: 1.5,
              }}
            >
              En LA QUERENCIA trabajamos con pasión por la reproducción equina, combinando
              experiencia veterinaria y tecnología de última generación.
            </p>
            <p
              style={{
                fontSize: "18px",
                color: COLORS.white,
                margin: 0,
                lineHeight: 1.5,
              }}
            >
              Ofrecemos servicios especializados en transferencia embrionaria,
              inseminación artificial y manejo reproductivo integral.
            </p>
            <p
              style={{
                fontSize: "18px",
                color: COLORS.white,
                margin: 0,
                lineHeight: 1.5,
              }}
            >
              Nuestro objetivo es ayudar a criadores y propietarios a alcanzar el máximo
              potencial genético de sus caballos, garantizando siempre el bienestar de
              cada ejemplar.
            </p>

            {/* CTAs: column -> row */}
            <div
              style={{
                display: "flex",
                flexDirection: mdUp ? "row" : "column",
                gap: mdUp ? 16 : 12,
                marginTop: 4,
              }}
            >
              <RouterLink
                to="/servicios"
                onMouseEnter={() => setHover1(true)}
                onMouseLeave={() => setHover1(false)}
                style={{
                  backgroundColor: hover1 ? COLORS.goldDark : COLORS.gold,
                  color: COLORS.white,
                  padding: `${S.btnPy}px ${S.btnPx}px`,
                  borderRadius: 6,
                  border: "none",
                  textDecoration: "none",
                  fontWeight: 600,
                  textAlign: "center",
                  transition: "background-color 0.2s ease",
                  minWidth: 180,
                }}
              >
                Conocer servicios
              </RouterLink>

              <RouterLink
                to="/contacto"
                onMouseEnter={() => setHover2(true)}
                onMouseLeave={() => setHover2(false)}
                style={{
                  backgroundColor: hover2 ? COLORS.btn2Hover : COLORS.btn2,
                  color: COLORS.white,
                  padding: `${S.btnPy}px ${S.btnPx}px`,
                  borderRadius: 6,
                  border: "none",
                  textDecoration: "none",
                  fontWeight: 600,
                  textAlign: "center",
                  transition: "background-color 0.2s ease",
                  minWidth: 180,
                }}
              >
                Solicitar consulta
              </RouterLink>
            </div>
          </div>

          {/* Columna imagen (auto width en md+) */}
          <div
            style={{
              flex: mdUp ? "0 0 auto" : "1 1 100%",
              maxWidth: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "inline-block",
                borderRadius: S.radius,
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.35)",
                overflow: "hidden",
              }}
            >
              <Square width={cardWidthFinal}>
                <img
                  src="/card1.jpg"
                  alt="Caballo en reproducción"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: S.radius,
                    display: "block",
                  }}
                />
              </Square>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
