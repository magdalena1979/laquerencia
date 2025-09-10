import { useEffect, useState } from "react";
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

const LAT = -33.4193754;
const LNG = -56.9228577;

const COLORS = {
  bg: "#15322e",
  white: "#FFFFFF",
  whiteDim: "rgba(255,255,255,0.75)",
  gold: "#C18A4D",
  goldBorder: "rgba(193,138,77,0.3)",
  cardBg: "rgba(255,255,255,0.10)",
  divider: "rgba(193,138,77,0.3)",
  blackAlpha200: "rgba(0,0,0,0.2)",
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

function HoverLink({
  href,
  children,
  target = "_blank",
  rel = "noopener noreferrer",
}: {
  href: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        color: hover ? COLORS.gold : COLORS.white,
        textDecoration: "none",
        transition: "color 0.2s ease",
        fontSize: 16,
      }}
    >
      {children}
    </a>
  );
}

function Divider() {
  return (
    <div
      style={{
        width: "100%",
        height: 1,
        backgroundColor: COLORS.divider,
        margin: "8px 0",
      }}
    />
  );
}

// Wrapper ratio 16:9
function Aspect({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <div style={{ paddingTop: "56.25%" }} />
      <div style={{ position: "absolute", inset: 0 }}>{children}</div>
    </div>
  );
}

export default function Contacto() {
  const mdUp = useMediaQuery("(min-width: 768px)");

  return (
    <div style={{ backgroundColor: COLORS.bg, minHeight: "100vh" }}>
      <div
        style={{
          maxWidth: 1280, // ~7xl
          margin: "0 auto",
          paddingTop: mdUp ? 112 : 96,
          paddingBottom: mdUp ? 64 : 40,
          paddingLeft: 16,
          paddingRight: 16,
          color: COLORS.white,
        }}
      >
        {/* Card: Información de contacto */}
        <div
          style={{
            backgroundColor: COLORS.bg,
            color: COLORS.white,
            marginBottom: 32,
            borderRadius: 16,
            boxShadow:
              "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
            // ❌ antes tenías: border: `1px solid ${COLORS.goldBorder}`,
            // ✅ ahora sin borde
          }}
        >
          <div style={{ padding: 32 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 24,
              }}
            >
              <h2
                style={{
                  margin: 0,
                  fontSize: 24,
                  fontWeight: 700,
                  textAlign: "center",
                  color: COLORS.white,
                }}
              >
                Información de Contacto
              </h2>

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                {/* Dirección */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                  <FaMapMarkerAlt color={COLORS.gold} size={24} />
                  <p
                    style={{
                      margin: 0,
                      fontSize: 14,
                      color: COLORS.whiteDim,
                      textAlign: "center",
                      lineHeight: 1.7,
                    }}
                  >
                    Paso de Atahona, 85000 Trinidad
                    <br />
                    Departamento de Flores, Uruguay
                  </p>
                </div>

                <Divider />

                {/* WhatsApp */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                  <FaWhatsapp color={COLORS.gold} size={24} />
                  <div style={{ display: "flex", flexDirection: "column", gap: 6, width: "100%", alignItems: "center" }}>
                    <HoverLink href="https://wa.me/59897588812">
                      José Koci: +598 97 588 812
                    </HoverLink>
                    <HoverLink href="https://wa.me/59899231848">
                      Verónica Cavestany: +598 99 231 848
                    </HoverLink>
                  </div>
                </div>

                <Divider />

                {/* Instagram */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                  <FaInstagram color={COLORS.gold} size={24} />
                  <HoverLink href="https://www.instagram.com/laquerenciacentroequino/">
                    @laquerenciacentroequino
                  </HoverLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card: Mapa */}
        <div
          style={{
            backgroundColor: COLORS.cardBg,
            color: COLORS.white,
            borderRadius: 16,
            boxShadow:
              "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
          }}
        >
          <div style={{ padding: 24 }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
              <HoverLink href={`https://www.google.com/maps/place/La+Querencia+Centro+Equino/@${LAT},${LNG},17z`}>
                Abrir en Google Maps
              </HoverLink>
            </div>

            <div
              style={{
                width: "100%",
                borderRadius: 12,
                overflow: "hidden",
                boxShadow: "0 10px 15px rgba(0,0,0,0.2)",
                border: `1px solid ${COLORS.blackAlpha200}`,
              }}
            >
              <Aspect>
                <iframe
                  title="Mapa satélite - La Querencia Centro Equino"
                  src={`https://www.google.com/maps?q=${LAT},${LNG}&t=k&z=18&hl=es&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0, width: "100%", height: "100%" }}
                />
              </Aspect>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
