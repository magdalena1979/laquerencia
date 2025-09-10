import { useEffect, useState } from "react";
import { useLocation, Link as RouterLink } from "react-router";
import { CheckCircle } from "lucide-react";

const HEADER_OFFSET_PX = 96; // compensa tu navbar fijo

const COLORS = {
  bg: "#15322e",
  white: "#FFFFFF",
  textDim: "rgba(255,255,255,0.75)",
  gold: "#C18A4D",
  goldAlt: "#aa8f94",
  card: "rgba(255,255,255,0.10)",
};

// -----------------------------
// Hook para scroll con offset
// -----------------------------
function useScrollToHashWithOffset() {
  const { hash } = useLocation();
  useEffect(() => {
    const id = (hash || "").replace("#", "");
    if (!id) return;
    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET_PX;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 0);
    return () => clearTimeout(t);
  }, [hash]);
}

// -----------------------------
// Componente PageTitle (H1)
// -----------------------------
function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1
      style={{
        margin: "0 0 16px",
        marginTop: "clamp(112px, 14vh, 140px)", // espacio bajo navbar
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

// -----------------------------
// Botón outline
// -----------------------------
function OutlineAnchor({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  const [hover, setHover] = useState(false);
  return (
    <RouterLink
      to={to}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-block",
        padding: "8px 14px",
        fontSize: 14,
        borderRadius: 6,
        border: `1px solid ${COLORS.gold}`,
        color: COLORS.white,
        backgroundColor: hover ? COLORS.gold : "transparent",
        textDecoration: "none",
        transition: "background-color 0.2s ease, color 0.2s ease",
      }}
    >
      {children}
    </RouterLink>
  );
}

// -----------------------------
// Divider
// -----------------------------
function DividerLine() {
  return (
    <div
      style={{
        height: 1,
        margin: "48px 0",
        backgroundColor: "rgba(193,138,77,0.3)",
      }}
    />
  );
}

// -----------------------------
// Section con texto + img
// -----------------------------
type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  bullets?: string[];
  img?: string;
  bg?: string;
};

function Section({ id, title, children, bullets = [], img, bg }: SectionProps) {
  return (
    <section
      id={id}
      style={{
        padding: "clamp(24px, 4vw, 32px)",
        backgroundColor: bg || COLORS.card,
        borderRadius: 16,
        marginBottom: 24,
        color: COLORS.white,
      }}
    >
      <div
        style={{
          display: "grid",
          gap: 24,
          alignItems: "center",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        }}
      >
        {/* Texto */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <h2 style={{ margin: 0, color: COLORS.white, fontSize: "clamp(22px, 3vw, 28px)" }}>
            {title}
          </h2>
          <p style={{ margin: 0, color: COLORS.textDim, lineHeight: 1.6 }}>{children}</p>

          {bullets.length > 0 && (
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "8px 0 0 0",
                display: "grid",
                gap: 8,
              }}
            >
              {bullets.map((b, i) => (
                <li
                  key={i}
                  style={{
                    color: COLORS.textDim,
                    display: "flex",
                    gap: 8,
                    alignItems: "flex-start",
                  }}
                >
                  <CheckCircle size={18} color={COLORS.gold} style={{ flex: "0 0 auto", marginTop: 2 }} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Imagen */}
        <div>
          <img
            src={img || "/servicios1.jpg"}
            alt={title}
            style={{
              width: "100%",
              height: "clamp(220px, 40vw, 320px)",
              objectFit: "cover",
              borderRadius: 16,
              boxShadow:
                "0 20px 25px -5px rgba(0,0,0,0.25), 0 10px 10px -5px rgba(0,0,0,0.15)",
              display: "block",
            }}
          />
        </div>
      </div>
    </section>
  );
}

// -----------------------------
// CTA final
// -----------------------------
function CTAContact() {
  const [hover, setHover] = useState(false);
  return (
    <RouterLink
      to="/contacto"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundColor: hover ? COLORS.goldAlt : COLORS.gold,
        color: COLORS.white,
        padding: "10px 18px",
        borderRadius: 6,
        textDecoration: "none",
        fontWeight: 600,
        transition: "background-color 0.2s ease",
      }}
    >
      Contactar
    </RouterLink>
  );
}

// -----------------------------
// Página principal
// -----------------------------
export default function Servicios() {
  useScrollToHashWithOffset();

  return (
    <div style={{ backgroundColor: COLORS.bg, minHeight: "100vh" }}>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 16px clamp(40px, 8vh, 64px)",
        }}
      >
        {/* Hero */}
        <div
          style={{
            textAlign: "center",
            marginBottom: 40,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <PageTitle>Servicios de Reproducción Equina</PageTitle>

          <p
            style={{
              margin: 0,
              color: COLORS.textDim,
              fontSize: "clamp(16px, 2.2vw, 18px)",
            }}
          >
            En <b>La Querencia</b> acompañamos cada etapa del ciclo reproductivo de tu yegua
            o padrillo. Trabajamos con protocolos actualizados y enfoque de bienestar animal,
            ajustados a la operativa y calendario zafral de Uruguay.
          </p>

          {/* TOC interno */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              justifyContent: "center",
              marginTop: 8,
            }}
          >
            <OutlineAnchor to="#seguimiento-folicular">Seguimiento folicular</OutlineAnchor>
            <OutlineAnchor to="#colecta-semen">Colecta de semen</OutlineAnchor>
            <OutlineAnchor to="#inseminacion-artificial">Inseminación artificial</OutlineAnchor>
            <OutlineAnchor to="#transferencia-embriones">Transferencia de embriones</OutlineAnchor>
            <OutlineAnchor to="#opu">OPU</OutlineAnchor>
          </div>
        </div>

        {/* Secciones */}
        <Section
          id="seguimiento-folicular"
          title="Seguimiento folicular"
          bg={COLORS.card}
          img="/imgs/foliculos.jpg"
          bullets={[
            "Ecografías seriadas para determinar el momento óptimo de servicio o IA.",
            "Control de cuerpo lúteo y dinámica folicular.",
            "Planificación de inducción de ovulación según objetivo productivo.",
          ]}
        >
          Monitoreamos el ciclo estral para decidir el mejor momento de cobertura,
          optimizando tasas de preñez y reduciendo servicios innecesarios.
        </Section>

        <DividerLine />

        <Section
          id="colecta-semen"
          title="Colecta de semen"
          img="/imgs/colecta.jpg"
          bullets={[
            "Colecta con maniquí y vaina artificial.",
            "Evaluación de calidad seminal in situ (motilidad, concentración, morfología).",
            "Procesamiento para uso fresco o refrigerado corto plazo.",
          ]}
        >
          Ofrecemos colecta y evaluación andrológica para uso inmediato o envío refrigerado
          según cronograma de yeguas receptoras.
        </Section>

        <DividerLine />

        <Section
          id="inseminacion-artificial"
          title="Inseminación artificial"
          bg={COLORS.card}
          img="/imgs/ia.jpg"
          bullets={[
            "IA con semen fresco o refrigerado.",
            "Programas sincronizados con seguimiento ecográfico.",
            "Registro de servicios y chequeo de preñez a los 14–16 días.",
          ]}
        >
          Implementamos protocolos de IA alineados al seguimiento folicular para maximizar la
          probabilidad de concepción en cada celo.
        </Section>

        <DividerLine />

        <Section
          id="transferencia-embriones"
          title="Transferencia de embriones"
          img="/imgs/te.jpg"
          bullets={[
            "Selección y sincronización de donante y receptoras.",
            "Lavado uterino y recuperación embrionaria.",
            "Transferencia y control post-procedimiento.",
          ]}
        >
          Diseñamos programas de TE para yeguas de alto valor genético, contemplando
          disponibilidad de receptoras y logística en campo.
        </Section>

        <DividerLine />

        <Section
          id="opu"
          title="OPU (Ovum Pick-Up)"
          bg={COLORS.card}
          img="/imgs/opu.jpg"
          bullets={[
            "Aspiración folicular guiada por ecografía.",
            "Coordinación con laboratorio de FIV asociado.",
            "Seguimiento de gestación de las receptoras.",
          ]}
        >
          La OPU permite recuperar ovocitos de donantes con limitaciones reproductivas o en
          plena campaña deportiva, coordinando la FIV en laboratorio acreditado.
        </Section>

        {/* CTA final */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
            marginTop: 64,
          }}
        >
          <h3 style={{ margin: 0, color: COLORS.white, fontSize: "clamp(20px, 3vw, 24px)" }}>
            ¿Coordinamos tu plan reproductivo?
          </h3>
          <p
            style={{
              margin: 0,
              color: COLORS.textDim,
              textAlign: "center",
              maxWidth: 640,
              lineHeight: 1.6,
            }}
          >
            Escribinos y armamos un esquema a medida según disponibilidad de padrillos,
            calendario de celo y objetivos de cría.
          </p>
          <CTAContact />
        </div>
      </div>
    </div>
  );
}
