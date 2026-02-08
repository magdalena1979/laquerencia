import { Link as RouterLink } from "react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

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
  className,
}: {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  const location = useSafeLocation();
  const isActive = location.pathname === to;
  const [hovered, setHovered] = useState(false);

  return (
    <RouterLink
      to={to}
      className={`nav-link ${isActive ? 'nav-link-active' : hovered ? 'nav-link-hover' : 'nav-link-inactive'} ${className || ''}`}
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
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileBtnHover, setMobileBtnHover] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 12);
      
      // Sticky solo en scroll up
      if (currentScrollY < 10) {
        // En la parte superior, siempre visible
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - ocultar
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - mostrar
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={`navbar ${scrolled ? 'navbar-scrolled' : ''} ${!isVisible ? 'navbar-hidden' : ''}`}
    >
      <div className="navbar-container">
        <div className="navbar-row">
          {/* LOGO: alineado a la izquierda del contenedor */}
          <RouterLink
            to="/"
            aria-label="Ir al inicio"
            className="navbar-logo-link"
          >
            <img
              src="/laquerencia1.png"
              alt="La Querencia"
              className="navbar-logo"
            />
          </RouterLink>

          {/* MENÚ CENTRAL: absolutamente centrado */}
          <nav className="navbar-desktop-nav">
            {mainNavItems.map((i) => (
              <NavLink key={i.href} to={i.href}>
                {i.label}
              </NavLink>
            ))}
          </nav>

          {/* ZONA DERECHA: CONTACTO (desktop) o botón menú (mobile) */}
          <div className="navbar-right-zone">
            {isDesktop ? (
              <NavLink
                to={contactItem.href}
                className="navbar-contact-link"
              >
                {contactItem.label}
              </NavLink>
            ) : (
              <button
                aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                onClick={() => setIsOpen((s) => !s)}
                onMouseEnter={() => setMobileBtnHover(true)}
                onMouseLeave={() => setMobileBtnHover(false)}
                className={`navbar-mobile-btn ${mobileBtnHover ? 'navbar-mobile-btn-hover' : ''}`}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MENÚ MOBILE DESPLEGABLE */}
      <div className={`navbar-mobile-menu ${isOpen && !isDesktop ? 'navbar-mobile-menu-open' : ''}`}>
        <div className="navbar-mobile-container">
          <nav className="navbar-mobile-stack">
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
