function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="padrillos-title">
      {children}
    </h1>
  );
}

export default function Padrillos() {
  return (
    <div className="padrillos-wrapper">
      <section
        id="padrillos-section"
        className="padrillos-section"
      >
        <div className="padrillos-container">
          <PageTitle>Padrillos</PageTitle>

          <p className="padrillos-description">
            Contamos con un banco de semen equino con colectas evaluadas y procesadas
            para uso fresco o refrigerado, garantizando trazabilidad y calidad.
            Coordinamos envíos según calendario zafral y necesidades de cada programa
            reproductivo.
          </p>

          {/* Botón para ver padrillos */}
          <a
            className="padrillos-link"
            href="https://laquerenciacentroequino.crioonline.com/App/Guest/GroupOfHorses/1327"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver padrillos disponibles
          </a>
        </div>
      </section>
    </div>
  );
}
