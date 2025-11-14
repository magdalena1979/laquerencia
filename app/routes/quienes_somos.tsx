import { useEffect } from "react";

interface Person {
  name: string;
  role: string;
  qualifications: string;
  photo: string | null;
}

const people: Person[] = [
  {
    name: "Verónica Cavestany",
    role: "MÉDICA VETERINARIA",
    qualifications:
      "Universidad de la República (Uruguay). Especializada en reproducción equina y gestión de programas de cría. Universidad Austral (Buenos Aires). Programa de Dirección de Agronegocios.",
    photo: "/vero.jpeg",
  },
  {
    name: "José Koci",
    role: "MÉDICO VETERINARIO",
    qualifications:
      "Universidad de la República (Uruguay). Especializado en Reproducción, Neonatología y Clínica Equina. Dirección técnica en Haras.",
    photo: null, // Placeholder gris
  },
  {
    name: "Walter",
    role: "ASISTENTE",
    qualifications:
      "Asistencia en manejo de campo, logística y apoyo a procedimientos reproductivos. Perfil en construcción.",
    photo: "/walter.jpg",
  },
];

const COLORS = {
  bgLight: "#F5F5F5", // Fondo gris claro
  textDark: "#333333", // Texto oscuro
  textLight: "#666666", // Texto gris
  placeholderGray: "#E0E0E0", // Placeholder gris
};

export default function QuienesSomosPage() {
  // Fondo claro para el body
  useEffect(() => {
    const prevBg = document.body.style.backgroundColor;
    document.body.style.backgroundColor = COLORS.bgLight;
    return () => {
      document.body.style.backgroundColor = prevBg;
    };
  }, []);

  return (
    <div style={{ backgroundColor: COLORS.bgLight, minHeight: "100vh", paddingBottom: 80 }}>
      {/* Sección "Quiénes somos" */}
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "140px 24px 0",
        }}
      >
        {/* Título y descripción */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h1
            style={{
              margin: "0 0 12px",
              color: COLORS.textDark,
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 400,
              fontFamily: "serif",
              letterSpacing: "0.01em",
              lineHeight: 1.2,
            }}
          >
            Quiénes somos
          </h1>
          <p
            style={{
              margin: 0,
              color: COLORS.textLight,
              fontSize: "clamp(16px, 2vw, 18px)",
              lineHeight: 1.6,
              maxWidth: 700,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Acompañamos cada etapa del ciclo reproductivo con protocolos actualizados, priorizando siempre el bienestar animal.
          </p>
        </div>

        {/* Imagen horizontal de caballos */}
        <div style={{ marginBottom: 64, width: "100%" }}>
          <img
            src="/equipo.jpg"
            alt="Caballos en La Querencia"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        {/* Perfiles del equipo */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "48px 32px",
            marginBottom: 80,
          }}
        >
          {people.map((person) => (
            <div key={person.name} style={{ display: "flex", flexDirection: "column" }}>
              {/* Imagen o placeholder */}
              <div
                style={{
                  width: "100%",
                  aspectRatio: "3/4",
                  backgroundColor: person.photo ? "transparent" : COLORS.placeholderGray,
                  overflow: "hidden",
                  marginBottom: 16,
                }}
              >
                {person.photo ? (
                  <img
                    src={person.photo}
                    alt={person.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: COLORS.placeholderGray,
                    }}
                  />
                )}
              </div>

              {/* Información */}
              <div>
                <h3
                  style={{
                    margin: "0 0 4px",
                    color: COLORS.textDark,
                    fontSize: "18px",
                    fontWeight: 600,
                    fontFamily: "sans-serif",
                  }}
                >
                  {person.name}
                </h3>
                <p
                  style={{
                    margin: "0 0 8px",
                    color: COLORS.textDark,
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    fontFamily: "sans-serif",
                  }}
                >
                  {person.role}
                </p>
                <p
                  style={{
                    margin: 0,
                    color: COLORS.textLight,
                    fontSize: "14px",
                    lineHeight: 1.6,
                    fontFamily: "sans-serif",
                  }}
                >
                  {person.qualifications}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Sección "Cómo trabajamos" */}
        <section style={{ textAlign: "center", paddingTop: 48 }}>
          <h2
            style={{
              margin: "0 0 16px",
              color: COLORS.textDark,
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 400,
              fontFamily: "serif",
              letterSpacing: "0.01em",
              lineHeight: 1.2,
            }}
          >
            Cómo trabajamos
          </h2>
          <p
            style={{
              margin: 0,
              color: COLORS.textLight,
              fontSize: "clamp(16px, 2vw, 18px)",
              lineHeight: 1.6,
              maxWidth: 700,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Impulsados por nuestra vocación veterinaria, fundamos el centro de reproducción equina para aportar eficiencia y soluciones simples al manejo reproductivo de cada cliente.
          </p>
        </section>
      </section>
    </div>
  );
}
