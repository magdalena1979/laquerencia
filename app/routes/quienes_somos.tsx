import { useMemo } from "react";

interface Person {
  name: string;
  role: string;
  bio: string;
  photo: string; // ruta pública
}

const people: Person[] = [
  {
    name: "Verónica Cavestany",
    role: "Médica Veterinaria",
    bio:
      "Médico Veterinario – Universidad de la República (Uruguay). " +
      "Programa de Dirección de Agronegocios – Universidad Austral (Buenos Aires). " +
      "Especializada en reproducción equina y gestión de programas de cría.",
    photo: "/vero.jpeg",
  },
  {
    name: "José Koci",
    role: "Médico Veterinario",
    bio:
      "Próximamente ampliaremos su perfil profesional. Integra el equipo clínico y reproductivo de La Querencia.",
    photo: "/pepe.jpg",
  },
  {
    name: "Walter",
    role: "Asistente",
    bio:
      "Asistencia en manejo de campo, logística y apoyo a procedimientos reproductivos. Perfil en construcción.",
    photo: "/walter.jpg",
  },
];

const COLORS = {
  bg: "#15322e",
  gold: "#C18A4D",
  white: "#FFFFFF",
  whiteDim: "rgba(255,255,255,0.85)",
  textDim: "rgba(255,255,255,0.75)",
  cardBg: "rgba(255,255,255,0.10)",
  shadow: "0 20px 25px -5px rgba(0,0,0,0.25), 0 10px 10px -5px rgba(0,0,0,0.15)",
};

function initialsFromName(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

function PersonCard({ p }: { p: Person }) {
  return (
    <div
      style={{
        borderRadius: 16,
        overflow: "hidden",
        backgroundColor: COLORS.cardBg,
        boxShadow: COLORS.shadow,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Foto */}
      <div style={{ position: "relative", height: 320, background: "#1f2d2b" }}>
        {p.photo ? (
          <img
            src={p.photo}
            alt={p.name}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        ) : (
          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#2a3b38",
            }}
          >
            <div
              style={{
                width: 96,
                height: 96,
                borderRadius: "50%",
                background: COLORS.gold,
                color: COLORS.bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: 28,
              }}
              aria-label={p.name}
              title={p.name}
            >
              {initialsFromName(p.name)}
            </div>
          </div>
        )}
      </div>

      {/* Texto */}
      <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 8 }}>
        <h3 style={{ margin: 0, color: COLORS.gold, fontSize: 20, fontWeight: 700 }}>{p.name}</h3>
        <p style={{ margin: 0, color: COLORS.white, fontWeight: 600 }}>{p.role}</p>
        <p style={{ margin: 0, color: COLORS.textDim, lineHeight: 1.8 }}>{p.bio}</p>
      </div>
    </div>
  );
}

export default function QuienesSomosPage() {
  // padding top/bottom responsive (sin hooks): uso clamp
  const containerStyle = useMemo<React.CSSProperties>(
    () => ({
      maxWidth: 1280, // ~7xl
      margin: "0 auto",
      padding: "clamp(96px, 10vh, 112px) 16px clamp(40px, 8vh, 64px)",
    }),
    []
  );

  return (
    <div style={{ backgroundColor: COLORS.bg, minHeight: "100vh" }}>
      <div style={containerStyle}>
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {/* Encabezado */}
          <div style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: 8 }}>
            <h1
              style={{
                margin: 0,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: COLORS.white,
                fontSize: "clamp(22px, 3.2vw, 28px)",
              }}
            >
              Quiénes somos
            </h1>
            <p
              style={{
                margin: 0,
                color: COLORS.textDim,
                fontSize: "clamp(16px, 2.4vw, 18px)",
              }}
            >
              Conocé al equipo detrás de La Querencia. Profesionales con foco en reproducción equina en Uruguay.
            </p>
          </div>

          {/* Grilla de tarjetas */}
          <div
            style={{
              display: "grid",
              gap: 24,
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            }}
          >
            {people.map((p) => (
              <PersonCard key={p.name} p={p} />
            ))}
          </div>

          {/* Cómo trabajamos */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, paddingTop: 16 }}>
            <h2 style={{ margin: 0, color: COLORS.white, fontSize: 20, fontWeight: 700 }}>
              Cómo trabajamos
            </h2>
            <p style={{ margin: 0, color: COLORS.textDim, lineHeight: 1.7 }}>
              Protocolos claros, seguimiento por ultrasonografía, coordinación con studs/haras y
              comunicación directa con propietarios. Sumaremos un carrusel de fotos y videos de
              procedimientos y manejo en campo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
