import { Link as RouterLink, useLocation } from "react-router";
import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { colors, spacing, textStyles, layoutStyles, combineStyles } from "../styles";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/quienes_somos", label: "Quiénes somos" },
  { href: "/contacto", label: "Contacto" },
];

// hook para detectar ancho
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

function NavLink({
  to,
  children,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const location = useLocation();
  const isActive = location.pathname === to;
  const isHomePage = location.pathname === "/";
  const [hovered, setHovered] = useState(false);

  const base: React.CSSProperties = {
    fontSize: textStyles.caption.fontSize,
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    paddingBottom: spacing.xs,
    textDecoration: "none",
    borderBottom: "2px solid",
    transition: "all 0.2s ease",
    cursor: "pointer",
  };

  const hoverColor = isHomePage ? colors.darkGreen : colors.white;

  const style: React.CSSProperties = {
    ...base,
    color: isActive ? colors.gold : hovered ? hoverColor : colors.gold,
    borderBottomColor: isActive ? colors.gold : "transparent",
  };

  return (
    <RouterLink
      to={to}
      style={style}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </RouterLink>
  );
}

export default function Navbar() {
  const location = useLocation();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const isHomePage = location.pathname === "/";

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const headerBase = useMemo(() => combineStyles(layoutStyles.header, {}), []);

  const headerStyle: React.CSSProperties = {
    ...headerBase,
    position: "fixed",
    top: 0,
    insetInline: 0,
    zIndex: 50,
    borderBottom: "1px solid transparent",
    backgroundColor: scrolled ? "rgba(0,0,0,0.3)" : "transparent",
    backdropFilter: scrolled ? "saturate(120%) blur(12px)" : "none",
    boxShadow: scrolled ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: 1152,
    margin: "0 auto",
    padding: `${spacing.md} ${spacing.lg}`,
  };

  // ⬇️ Tamaño del logo responsivo
  const logoHeight = isDesktop ? 96 : 72;

  const rowStyle: React.CSSProperties = {
    // antes: height: 80,
    minHeight: logoHeight, // deja crecer la fila con el logo
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    gap: spacing.lg,
  };

  const desktopNavStyle: React.CSSProperties = {
    display: isDesktop ? "flex" : "none",
    alignItems: "center",
    gap: spacing.lg,
  };

  const mobileBtnStyle: React.CSSProperties = {
    display: isDesktop ? "none" : "inline-flex",
    alignItems: "center",
    background: "none",
    border: "none",
    cursor: "pointer",
    color: colors.gold,
    transition: "color 0.2s ease",
    padding: 6,
  };

  const [mobileBtnHover, setMobileBtnHover] = useState(false);
  const mobileBtnHoverColor = isHomePage ? colors.darkGreen : colors.white;

  const mobileMenuWrapperStyle: React.CSSProperties = {
    paddingBottom: spacing.md,
    borderTop: "1px solid transparent",
    backgroundColor: "rgba(0,0,0,0.3)",
    backdropFilter: "saturate(120%) blur(12px)",
    display: isOpen && !isDesktop ? "block" : "none",
  };

  const mobileStackStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    paddingTop: 12,
    paddingBottom: 12,
  };

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <div style={rowStyle}>
          {/* Logo */}
          <RouterLink to="/" aria-label="Ir al inicio" style={{ display: "block", lineHeight: 0 }}>
            <img
              src="/logo1.png"
              alt="La Querencia"
              style={{
                height: logoHeight,  // ✅ crece según breakpoint
                // ❌ quitamos maxHeight que lo limitaba
                objectFit: "contain",
                display: "block",
              }}
            />
          </RouterLink>

          {/* Menú desktop */}
          <nav style={desktopNavStyle}>
            {navItems.map((i) => (
              <NavLink key={i.href} to={i.href}>
                {i.label}
              </NavLink>
            ))}
          </nav>

          {/* Botón mobile */}
          <button
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setIsOpen((s) => !s)}
            onMouseEnter={() => setMobileBtnHover(true)}
            onMouseLeave={() => setMobileBtnHover(false)}
            style={{
              ...mobileBtnStyle,
              color: mobileBtnHover ? mobileBtnHoverColor : colors.gold,
            }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menú mobile */}
      <div style={mobileMenuWrapperStyle}>
        <div style={{ maxWidth: 1152, margin: "0 auto", padding: `0 ${spacing.lg}` }}>
          <nav style={mobileStackStyle}>
            {navItems.map((i) => (
              <NavLink key={i.href} to={i.href} onClick={() => setIsOpen(false)}>
                {i.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
