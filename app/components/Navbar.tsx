import { Link as RouterLink } from "react-router";
import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { colors, spacing, textStyles, layoutStyles, combineStyles } from "../styles";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/quienes_somos", label: "Quiénes somos" },
  { href: "/uruguay", label: "Uruguay" },
  { href: "/contacto", label: "Contacto" },
];

const mainNavItems = navItems.slice(0, navItems.length - 1);
const contactItem = navItems[navItems.length - 1];

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

// Hook para location “segura”
function useSafeLocation() {
  const [pathname, setPathname] = useState(
    typeof window !== "undefined" ? window.location.pathname : "/"
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updatePath = () => setPathname(window.location.pathname);

    window.addEventListener("popstate", updatePath);

    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function (...args) {
      // @ts-ignore
      originalPushState.apply(history, args);
      setTimeout(updatePath, 0);
    };

    history.replaceState = function (...args) {
      // @ts-ignore
      originalReplaceState.apply(history, args);
      setTimeout(updatePath, 0);
    };

    return () => {
      window.removeEventListener("popstate", updatePath);
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
    };
  }, []);

  return { pathname };
}

function NavLink({
  to,
  children,
  onClick,
  style: styleOverride,
}: {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}) {
  const location = useSafeLocation();
  const isActive = location.pathname === to;
  const [hovered, setHovered] = useState(false);

  const base: React.CSSProperties = {
    fontSize: `calc(${textStyles.caption.fontSize} * 1.2)`,
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.18em",
    paddingBottom: spacing.xs,
    textDecoration: "none",
    borderBottom: "2px solid",
    transition: "all 0.2s ease",
    cursor: "pointer",
  };

  const style: React.CSSProperties = {
    ...base,
    color: isActive ? colors.gold : hovered ? colors.darkGreen : colors.gray700,
    borderBottomColor: isActive ? colors.gold : "transparent",
    ...styleOverride,
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
  const location = useSafeLocation();
  const isDesktop = useMediaQuery("(min-width: 768px)");

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
    backgroundColor: colors.white,
    borderBottom: "1px solid rgba(0,0,0,0.05)",
    boxShadow: scrolled ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
  };

  // Contenedor a ancho completo para pegar logo/contacto a los bordes
  const containerStyle: React.CSSProperties = {
    width: "100%",
    margin: 0,
    padding: `${spacing.md} ${spacing.md}`,
  };

  const logoHeight = isDesktop ? 58 : 45;

  // Fila principal: flex + posición relativa para poder centrar el menú absoluto
  const rowStyle: React.CSSProperties = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    width: "100%",
    minHeight: 80,
  };

  // Menú central ABSOLUTAMENTE centrado en el contenedor
  const desktopCenterNavStyle: React.CSSProperties = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    display: isDesktop ? "flex" : "none",
    gap: 48,
  };

  // Zona derecha (CONTACTO o botón mobile)
  const rightZoneStyle: React.CSSProperties = {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
    paddingRight: spacing.lg,
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
          {/* LOGO: alineado a la izquierda del contenedor */}
          <RouterLink
            to="/"
            aria-label="Ir al inicio"
            style={{ display: "block", lineHeight: 0 }}
          >
            <img
              src="/laquerencia1.png"
              alt="La Querencia"
              style={{
                height: logoHeight,
                objectFit: "contain",
                display: "block",
              }}
            />
          </RouterLink>

          {/* MENÚ CENTRAL: absolutamente centrado */}
          <nav style={desktopCenterNavStyle}>
            {mainNavItems.map((i) => (
              <NavLink key={i.href} to={i.href}>
                {i.label}
              </NavLink>
            ))}
          </nav>

          {/* ZONA DERECHA: CONTACTO (desktop) o botón menú (mobile) */}
          <div style={rightZoneStyle}>
            {isDesktop ? (
            <NavLink
              to={contactItem.href}
              style={{ paddingRight: `calc(${spacing.xs} * 2)` }}
            >
              {contactItem.label}
            </NavLink>
            ) : (
              <button
                aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                onClick={() => setIsOpen((s) => !s)}
                onMouseEnter={() => setMobileBtnHover(true)}
                onMouseLeave={() => setMobileBtnHover(false)}
                style={{
                  ...mobileBtnStyle,
                  color: mobileBtnHover ? colors.darkGreen : colors.gold,
                }}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MENÚ MOBILE DESPLEGABLE */}
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
