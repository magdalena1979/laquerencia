import { Link as RouterLink } from "react-router";
import { FiInstagram } from "react-icons/fi";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  const linkStyle = {
    color: "inherit",
    textDecoration: "none",
  };

  const headingStyle: React.CSSProperties = {
    marginBottom: 12,
    color: "#FFFFFF",
    opacity: 0.9,
    fontSize: 14,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.12em",
  };

  const iconStyle = {
    width: 22,
    height: 22,
    color: "rgba(255,255,255,0.8)",
  };

  const circleStyle: React.CSSProperties = {
    width: 42,
    height: 42,
    borderRadius: "50%",
    border: "1px solid rgba(255,255,255,0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <footer
      style={{
        position: "relative",
        backgroundColor: "#697D78",
        color: "rgba(255,255,255,0.75)",
        padding: "48px 16px 32px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gap: 40,
          gridTemplateColumns: "minmax(0, 2fr) minmax(0, 2fr) minmax(0, 2fr)",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Columna 1 */}
        <div>
          <img
            src="/logofooter.png"
            alt="La Querencia"
            style={{
              height: 80,
              width: "auto",
              display: "block",
              
            }}
          />

<div
  style={{
    fontFamily: "'Playfair Display', serif",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 1.65,
    letterSpacing: "0.01em",
    color: "rgba(255,255,255,0.78)",
    maxWidth: 340,           // ANCHO IDEAL COMO EL AI
    marginBottom: 20,
  }}
>
  <p style={{ margin: 0, marginBottom: 10 }}>
    Centro especializado en reproducción equina en Uruguay.
  </p>
  <p style={{ margin: 0 }}>
    Vanguardia, innovación y bienestar en cada servicio.
  </p>
</div>


          <div
            style={{
              width: "100%",
              height: 1,
              backgroundColor: "rgba(255,255,255,0.3)",
              marginBottom: 16,
            }}
          />

          <p
            style={{
              margin: 0,
              fontSize: 12,
              color: "rgba(255,255,255,0.6)",
              fontFamily: "'Montserrat', 'Helvetica Neue', Arial, sans-serif",
            }}
          >
            © {year} La Querencia – Todos los derechos reservados
          </p>
        </div>

        {/* Columna 2 */}
        <div>
          <h3 style={headingStyle}>Contacto</h3>

          <a
            href="mailto:info@laquerencia.com"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid rgba(255,255,255,0.6)",
              borderRadius: 4,
              padding: "10px 14px",
              marginBottom: 16,
              color: "inherit",
              textDecoration: "none",
              fontSize: 14,
            }}
          >
            <span>info@laquerencia.com</span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 28,
                height: 28,
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.7)",
                fontSize: 16,
              }}
            >
              →
            </span>
          </a>

          <p style={{ margin: "0 0 4px" }}>José Koci: +598 97 588 812</p>
          <p style={{ margin: "0 0 4px" }}>Verónica Cavestany: +598 99 231 848</p>

          <div
            style={{
              width: 48,
              height: 1,
              backgroundColor: "rgba(255,255,255,0.6)",
              margin: "12px 0",
            }}
          />

          <p style={{ margin: 0 }}>Paso de Atahona, Trinidad, Uruguay</p>
        </div>

        {/* Columna 3 */}
        <div>
          <h3 style={headingStyle}>Navegación</h3>

          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 32,
              flexWrap: "wrap",
            }}
          >
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                lineHeight: 2,
                fontSize: 14,
              }}
            >
              <li>
                <RouterLink to="/" style={linkStyle}>
                  Inicio
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/servicios" style={linkStyle}>
                  Servicios
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/quienes_somos" style={linkStyle}>
                  Quiénes somos
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/uruguay" style={linkStyle}>
                  Uruguay
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/contacto" style={linkStyle}>
                  Contacto
                </RouterLink>
              </li>
            </ul>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
                marginLeft: "auto",
              }}
            >
              <div style={circleStyle}>
                <FiInstagram style={iconStyle} />
              </div>
              <div style={circleStyle}>
                <FaFacebook style={iconStyle} />
              </div>
              <div style={circleStyle}>
                <FaWhatsapp style={iconStyle} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recurso INFERIOR DERECHA */}
      <img
        src="/RecursoFooter.png"
        alt=""
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          height: 260,
          opacity: 0.8,
          zIndex: 1,
        }}
      />

    </footer>
  );
}
