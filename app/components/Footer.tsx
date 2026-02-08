import { Link as RouterLink } from "react-router";
import { FiInstagram } from "react-icons/fi";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Columna 1 */}
        <div>
          <img
            src="/logofooter.png"
            alt="La Querencia"
            className="footer-logo"
          />

          <div className="footer-description">
            <p>
              Centro especializado en reproducción equina en Uruguay.
            </p>
            <p>
              Vanguardia, innovación y bienestar en cada servicio.
            </p>
          </div>

          <div className="footer-divider" />

          <p className="footer-copyright">
            © {year} La Querencia – Todos los derechos reservados
          </p>
        </div>

        {/* Columna 2 */}
        <div>
          <h3 className="footer-heading">Contacto</h3>

          <a
            href="mailto:info@laquerencia.com"
            className="footer-email-link"
          >
            <span>info@laquerencia.com</span>
            <span className="footer-email-arrow">
              →
            </span>
          </a>

          <p className="footer-contact-item">José Koci: +598 97 588 812</p>
          <p className="footer-contact-item">Verónica Cavestany: +598 99 231 848</p>

          <div className="footer-contact-divider" />

          <p style={{ margin: 0 }}>Paso de Atahona, Trinidad, Uruguay</p>
        </div>

        {/* Columna 3 */}
        <div>
          <h3 className="footer-heading">Navegación</h3>

          <div className="footer-navigation-wrapper">
            <ul className="footer-navigation-list">
              <li>
                <RouterLink to="/" className="footer-link">
                  Inicio
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/servicios" className="footer-link">
                  Servicios
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/quienes_somos" className="footer-link">
                  Quiénes somos
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/uruguay" className="footer-link">
                  Uruguay
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/contacto" className="footer-link">
                  Contacto
                </RouterLink>
              </li>
            </ul>

            <div className="footer-social-icons">
              <div className="footer-social-icon-circle">
                <FiInstagram className="footer-social-icon" />
              </div>
              <div className="footer-social-icon-circle">
                <FaFacebook className="footer-social-icon" />
              </div>
              <div className="footer-social-icon-circle">
                <FaWhatsapp className="footer-social-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recurso INFERIOR DERECHA */}
      <img
        src="/RecursoFooter.png"
        alt=""
        className="footer-decoration-image"
      />
    </footer>
  );
}
