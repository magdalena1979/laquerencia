export default function ServiciosPage() {
  return (
    <main className="servicios-main">
      {/* HERO / ENCABEZADO */}
      <section className="servicios-hero">
        {/* Video de fondo */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="servicios-hero-video"
        >
          <source src="/VIDEO_SERVICIOS.mp4" type="video/mp4" />
        </video>

        {/* Contenido */}
        <div className="servicios-hero-content">
          <h1 className="servicios-hero-title">
            Servicios de
            <br />
            reproducción equina
          </h1>

          <p className="servicios-hero-description">
            Acompañamos cada etapa del ciclo reproductivo con
            protocolos actualizados y foco en bienestar animal.
          </p>
        </div>
      </section>

      {/* GRID DE SERVICIOS DETALLADOS */}
      <section className="servicios-grid-section">
        <div className="servicios-grid-container">
          <div className="servicios-grid">
            {/* 1. SEGUIMIENTO FOLICULAR */}
            <div className="servicios-card">
              <h3 className="servicios-card-title">
                SEGUIMIENTO FOLICULAR
              </h3>
              <ul className="servicios-card-list">
                <li className="servicios-card-item">
                  <span className="servicios-card-bullet">○</span>
                  Optimización de la reproducción
                </li>
                <li className="servicios-card-item">
                  <span className="servicios-card-bullet">○</span>
                  Aumento de la tazas de concepción
                </li>
                <li className="servicios-card-item">
                  <span className="servicios-card-bullet">○</span>
                  Identificación de patologías reproductivas
                </li>
                <li className="servicios-card-item">
                  <span className="servicios-card-bullet">○</span>
                  Optimizar el uso del padrillo
                </li>
              </ul>
            </div>

            {/* 2. CHEQUEO DE GESTACIÓN */}
            <div className="servicios-card">
              <h3 className="servicios-card-title">
                CHEQUEO DE GESTACIÓN
              </h3>
              <ul className="servicios-card-list">
                <li className="servicios-card-item">
                  <span className="servicios-card-bullet">○</span>
                  Conocer edad gestacional para saber
                </li>
                <li className="servicios-card-item">
                  <span className="servicios-card-bullet">○</span>
                  fecha de parto
                </li>
                <li className="servicios-card-item">
                  <span className="servicios-card-bullet">○</span>
                  Identificación de patologías
                </li>
                <li className="servicios-card-item">
                  <span className="servicios-card-bullet">&gt;</span>
                  Evitar pérdidas
                </li>
              </ul>
            </div>

            {/* 3. COLECTA Y ENVÍO DE SEMEN */}
            <div className="servicios-card">
              <h3 className="servicios-card-title">
                COLECTA Y ENVÍO DE SEMEN
              </h3>
              <ul className="servicios-card-list">
                <li className="servicios-card-item">
                  <span className="servicios-card-bullet">○</span>
                  Evitar mover el padrillo
                </li>
                <li className="servicios-card-item">
                  <span className="servicios-card-bullet">○</span>
                  Optimización del uso de padrillo
                </li>
                <li className="servicios-card-item">
                  <span className="servicios-card-bullet">○</span>
                  Facilitar venta de servicios
                </li>
              </ul>
            </div>

            {/* 4. CONGELACIÓN Y BANCO DE SEMEN */}
            <div className="servicios-card">
              <h3 className="servicios-card-title">
                CONGELACIÓN Y BANCO
                <br />
                DE SEMEN
              </h3>
              <ul className="servicios-card-list">
                <li className="servicios-card-item">
                  <span className="servicios-card-bullet">○</span>
                  Respaldo genético
                </li>
                <li className="servicios-card-item">
                  <span className="servicios-card-bullet">○</span>
                  Exportación de material genético
                </li>
                <li className="servicios-card-item">
                  <span className="servicios-card-bullet">○</span>
                  Optimizar el envió de semen
                </li>
              </ul>
            </div>

            {/* 5. INSEMINACIÓN ARTIFICIAL */}
            <div className="servicios-card">
              <h3 className="servicios-card-title">
                INSEMINACIÓN ARTIFICIAL
                <br />
                <span className="servicios-card-subtitle">
                  (CON REFRIGERADO O CONGELADO)
                </span>
              </h3>
              <ul className="servicios-card-list">
                <li className="servicios-card-item">
                  <span className="servicios-card-bullet">○</span>
                  Evitar accidentes debido a la monta natural.
                </li>
                <li className="servicios-card-item">
                  <span className="servicios-card-bullet">○</span>
                  Poder utilizar padrillos extranjeros.
                </li>
                <li className="servicios-card-item">
                  <span className="servicios-card-bullet">○</span>
                  Seguir produciendo con padrillos que ya no existen.
                </li>
                <li className="servicios-card-item">
                  <span className="servicios-card-bullet">○</span>
                  Poder utilizar diferentes padrillos sin tener que mover las yeguas a diferentes lugares.
                </li>
              </ul>
            </div>

            {/* 6. TRANSFERENCIA DE EMBRIONES */}
            <div className="servicios-card">
              <h3 className="servicios-card-title">
                TRANSFERENCIA
                <br />
                DE EMBRIONES
              </h3>
              <ul className="servicios-card-list">
                <li className="servicios-card-item">
                  <span className="servicios-card-bullet">○</span>
                  Evitar riesgos de gestación y parto
                </li>
                <li className="servicios-card-item">
                  <span className="servicios-card-bullet">○</span>
                  Mayor número de crías por año
                </li>
                <li className="servicios-card-item">
                  <span className="servicios-card-bullet">○</span>
                  Posibilidad de hijos con distintos padrillos
                </li>
                <li className="servicios-card-item">
                  <span className="servicios-card-bullet">○</span>
                  Acortar el tiempo de prueba de cruzamientos
                </li>
                <li className="servicios-card-item">
                  <span className="servicios-card-bullet">○</span>
                  Poder continuar con la vida deportiva de la yegua y reproducirla
                </li>
                <li className="servicios-card-item">
                  <span className="servicios-card-bullet">○</span>
                  OPU (Aspiración de ovocitos)
                </li>
                <li className="servicios-card-item">
                  <span className="servicios-card-bullet">○</span>
                  <strong>CAPACITANDONOS</strong> - Técnica que se utiliza para posterior utilización de ICSI
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN PADRILLOS */}
      <section className="servicios-padrillos-section">
        <div className="servicios-padrillos-container">
          <h2 className="servicios-padrillos-title">
            Padrillos
          </h2>
          <p className="servicios-padrillos-description">
            Coordinamos el envío y recepción de semen fresco y/o congelado,
            dependiendo de la necesidad de cada programa reproductivo.
            Además, contamos con padrillos residentes y banco de semen
            congelado de algunos padrillos para venta de servicios.
          </p>

          {/* Contenedor del iframe */}
          <div className="servicios-iframe-wrapper">
            <iframe
              src="https://laquerenciacentroequino.crioonline.com/App/Guest/GroupOfHorses/1327"
              title="Padrillos disponibles - La Querencia"
              className="servicios-iframe"
              allow="fullscreen"
            />
          </div>
        </div>
      </section>


     
    </main>
  );
}
