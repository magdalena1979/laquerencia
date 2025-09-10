import { useEffect, useMemo, useState } from "react";

const COLORS = {
  bg: "#15322e",
  white: "#FFFFFF",
  textDim: "rgba(255,255,255,0.80)",
  gold: "#C18A4D",
  goldLine: "rgba(193,138,77,0.30)",
  card: "rgba(255,255,255,0.10)",
  shadow: "0 20px 25px -5px rgba(0,0,0,0.25), 0 10px 10px -5px rgba(0,0,0,0.15)",
};

// PageTitle unificado
function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1
      style={{
        margin: "0 0 16px",
        marginTop: "clamp(112px, 14vh, 140px)",
        color: COLORS.white,
        fontSize: "clamp(28px, 5vw, 40px)",
        fontWeight: 700,
        textAlign: "center",
        letterSpacing: "0.02em",
        lineHeight: 1.3,
      }}
    >
      {children}
    </h1>
  );
}

// Mini iconos SVG inline (sin libs)
function IconPin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 22s7-7.58 7-12a7 7 0 1 0-14 0c0 4.42 7 12 7 12z" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="10" r="2.6" fill="currentColor" />
    </svg>
  );
}
function IconWhats(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 256 256" fill="currentColor" {...props}>
      <path d="M128 24a104 104 0 0 0-89.2 156.9L24 232l51.8-14.9A104 104 0 1 0 128 24Zm0 192a88 88 0 0 1-44.4-11.9l-3-1.8-30.8 8.9 8.9-30.8-1.8-3A88 88 0 1 1 128 216Zm47.2-58.8c-2.5-1.3-14.8-7.3-17.1-8.1s-4-1.3-5.7 1.3-6.5 8.1-8 9.8-3 1.9-5.6.6a72 72 0 0 1-21.1-13A80 80 0 0 1 106 131c-1.4-2.5-.1-3.9 1.2-5.2 1.3-1.2 2.5-3 3.8-4.5s1.9-2.5 2.8-4.3a4.85 4.85 0 0 0-.2-4.5c-.6-1.3-5.7-13.7-7.8-18.7s-4.1-4.2-5.7-4.3-3.2-.1-4.9-.1a9.4 9.4 0 0 0-6.9 3.2c-2.4 2.5-9.2 9-9.2 22s9.4 25.5 10.7 27.3A91.5 91.5 0 0 0 118 165c11.1 7.6 19 10.1 24.2 11.2a27.6 27.6 0 0 0 12.3.8c3.7-.6 11.4-4.6 13-9s1.6-8.3 1.1-9.1-2.1-1.9-4.4-3.1Z" />
    </svg>
  );
}
function IconIg(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 448 512" fill="currentColor" {...props}>
      <path d="M224 141c-45.9 0-83 37.1-83 83s37.1 83 83 83 83-37.1 83-83-37.1-83-83-83zm0 137a54 54 0 1 1 54-54 54 54 0 0 1-54 54zm124.7-148a19.3 19.3 0 1 1-19.3-19.3 19.3 19.3 0 0 1 19.3 19.3zM448 146v220a146 146 0 0 1-146 146H146A146 146 0 0 1 0 366V146A146 146 0 0 1 146 0h156a146 146 0 0 1 146 146zm-48 0a98 98 0 0 0-98-98H146a98 98 0 0 0-98 98v220a98 98 0 0 0 98 98h156a98 98 0 0 0 98-98z" />
    </svg>
  );
}

const LAT = -33.4193754;
const LNG = -56.9228577;

export default function ContactoPage() {
  useEffect(() => {
    const prevBg = document.body.style.backgroundColor;
    const prevMargin = document.body.style.margin;
    document.body.style.backgroundColor = "#15322e";
    document.body.style.margin = "0";
    return () => {
      document.body.style.backgroundColor = prevBg;
      document.body.style.margin = prevMargin;
    };
  }, []);
  const containerStyle = useMemo<React.CSSProperties>(
    () => ({
      maxWidth: 1280,
      margin: "0 auto",
      padding: "0 16px clamp(40px, 8vh, 64px)",
    }),
    []
  );

  const [hoverLink, setHoverLink] = useState<string | null>(null);

  return (
    <div style={{ backgroundColor: COLORS.bg, minHeight: "100vh" }}>
      <div style={containerStyle}>
        {/* Título */}
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <PageTitle>Información de contacto</PageTitle>
        </div>

        {/* Card de información */}
        <div
          style={{
            backgroundColor: COLORS.card,
            color: COLORS.white,
            borderRadius: 16,
            boxShadow: COLORS.shadow,
            padding: 32,
            maxWidth: 980,
            margin: "0 auto 24px",
          }}
        >
          {/* Dirección */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <IconPin style={{ color: COLORS.gold }} />
            <p style={{ margin: 0, color: COLORS.textDim, textAlign: "center" }}>
              Paso de Atahona, 85000 Trinidad <br />
              Departamento de Flores, Uruguay
            </p>
          </div>

          <div style={{ height: 1, background: COLORS.goldLine, margin: "24px 0" }} />

          {/* WhatsApp */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <IconWhats style={{ color: COLORS.gold }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <a
                href="https://wa.me/59897588812"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoverLink("koci")}
                onMouseLeave={() => setHoverLink(null)}
                style={{
                  color: hoverLink === "koci" ? COLORS.gold : COLORS.white,
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                José Koci: +598 97 588 812
              </a>
              <a
                href="https://wa.me/59899231848"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoverLink("vero")}
                onMouseLeave={() => setHoverLink(null)}
                style={{
                  color: hoverLink === "vero" ? COLORS.gold : COLORS.white,
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                Verónica Cavestany: +598 99 231 848
              </a>
            </div>
          </div>

          <div style={{ height: 1, background: COLORS.goldLine, margin: "24px 0" }} />

          {/* Instagram */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <IconIg style={{ color: COLORS.gold }} />
            <a
              href="https://www.instagram.com/laquerenciacentroequino/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoverLink("ig")}
              onMouseLeave={() => setHoverLink(null)}
              style={{
                color: hoverLink === "ig" ? COLORS.gold : COLORS.white,
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              @laquerenciacentroequino
            </a>
          </div>
        </div>

        {/* Card de mapa */}
        <div
          style={{
            backgroundColor: COLORS.card,
            color: COLORS.white,
            borderRadius: 16,
            boxShadow: COLORS.shadow,
            padding: 24,
            maxWidth: 980,
            margin: "0 auto",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: 12 }}>
            <a
              href={`https://www.google.com/maps/place/La+Querencia+Centro+Equino/@${LAT},${LNG},17z`}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoverLink("maps")}
              onMouseLeave={() => setHoverLink(null)}
              style={{
                color: hoverLink === "maps" ? COLORS.gold : "rgba(255,255,255,0.85)",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Abrir en Google Maps
            </a>
          </div>

          <div
            style={{
              width: "100%",
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: "0 10px 15px rgba(0,0,0,0.2)",
              border: "1px solid rgba(0,0,0,0.2)",
            }}
          >
            <iframe
              title="Mapa satélite - La Querencia Centro Equino"
              src={`https://www.google.com/maps?q=${LAT},${LNG}&t=k&z=18&hl=es&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ width: "100%", height: "56.25vw", maxHeight: 480, minHeight: 260, border: 0, display: "block" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
