export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#102824", // un verde más oscuro para contraste
        color: "rgba(255,255,255,0.75)",
        padding: "40px 16px",
        marginTop: "auto",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gap: 32,
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        }}
      >
        {/* Columna 1: Logo + descripción */}
        <div>
          <img
            src="/laquerencia1.png"
            alt="La Querencia"
            style={{ height: 60, marginBottom: 12 }}
          />
          <p style={{ margin: 0, lineHeight: 1.6 }}>
            Centro especializado en reproducción equina en Uruguay.
            Innovación, trazabilidad y bienestar animal en cada servicio.
          </p>
        </div>

        {/* Columna 2: Links rápidos */}
        <div>
          <h3
            style={{
              marginBottom: 12,
              color: "#C18A4D",
              fontSize: 16,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Navegación
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 2 }}>
            <li><a href="/" style={{ color: "inherit", textDecoration: "none" }}>Inicio</a></li>
            <li><a href="/servicios" style={{ color: "inherit", textDecoration: "none" }}>Servicios</a></li>
            <li><a href="/quienes_somos" style={{ color: "inherit", textDecoration: "none" }}>Quiénes somos</a></li>
            {/* <li><a href="/padrillos" style={{ color: "inherit", textDecoration: "none" }}>Padrillos</a></li> */}
            <li><a href="/contacto" style={{ color: "inherit", textDecoration: "none" }}>Contacto</a></li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div>
          <h3
            style={{
              marginBottom: 12,
              color: "#C18A4D",
              fontSize: 16,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Contacto
          </h3>
          <p style={{ margin: "0 0 8px" }}>Paso de Atahona, Trinidad, Uruguay</p>
          <p style={{ margin: "0 0 8px" }}> José Koci: +598 97 588 812</p>
          <p style={{ margin: "0 0 8px" }}> Verónica Cavestany: +598 99 231 848</p>
          <p style={{ margin: 0 }}>📧 <a href="mailto:info@laquerencia.com" style={{ color: "inherit", textDecoration: "none" }}>info@laquerencia.com</a></p>
        </div>
      </div>

      {/* Línea inferior */}
      <div
        style={{
          marginTop: 32,
          borderTop: "1px solid rgba(255,255,255,0.2)",
          paddingTop: 16,
          textAlign: "center",
          fontSize: 14,
          color: "rgba(255,255,255,0.6)",
        }}
      >
        © {new Date().getFullYear()} La Querencia — Todos los derechos reservados
      </div>
    </footer>
  );
}
