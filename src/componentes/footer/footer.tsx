import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import "./footer.css";

const Footer = () => {
  return (
    <Element name="contact">
    <footer className="footer">
      <div className="footer-container">
        {/* Sección Izquierda: Logo */}
        <div className="footer-logo">
          <img src="/assets/s+_icono-blanco-tiza.png" alt="Logo" className="logo-img" />
        </div>

        {/* Sección Centro: Contacto */}
        <div className="footer-contact">
          <div className="contact-item">
            <img src="/assets/telefono.png" alt="Telefono" className="contact-icon" />
            <a href="tel: 629367021">+629 36 70 21</a>
          </div>
          <div className="contact-item">
            <img src="/assets/email.png" alt="Correo" className="contact-icon" />
            <a href="mailto:dgnn@outlook.es">dgnn@outlook.es</a>
          </div>
          <div className="contact-item">
            <img src="/assets/direccion.png" alt="Direccion" className="contact-icon" />
            <a href="https://maps.app.goo.gl/F7vsqgR2v99D9UTR6" target="_blank" rel="noopener noreferrer">Plaza Santa María 6, Daimiel</a>
          </div>
        </div>

        <div className="instagram">
            <a href="https://www.instagram.com/thereal_smashburger/" target="_blank">
                <img src="/assets/instagram.png" alt="Instagram" className="instagram-icon" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61569154963161" target="_blank">
                <img src="/assets/facebook.png" alt="Facebook" className="facebook-icon" />
            </a>
            <a href="https://www.tiktok.com/@thereal_smashburger?_t=8rneuMMkI6r&_r=1" target="_blank">
                <img src="/assets/tik-tok.png" alt="Tik-tok" className="tik-tok-icon" />
            </a>
        </div>

        {/* Sección Derecha: Políticas */}
        <div className="footer-policy">
          <ul>
            <li><Link to="/legal-notice">Política de Privacidad</Link></li>
            <li><Link to="/terms">Términos y Condiciones</Link></li>
            <li><Link to="/cookies">Política de Cookies</Link></li>
          </ul>
        </div>
      </div>
    </footer>
    </Element>
  );    
};

export default Footer;

