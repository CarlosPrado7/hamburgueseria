import './menu.css';
import { Element } from "react-scroll";
import { Link } from "react-router-dom";

export default function menu() {
  return (
    <Element name="about">
    <div className="menu-container">
      <div className="menu-banner">
        <h1>¡Prueba nuestro menú!</h1>
        <p>Descubre nuestras deliciosas hamburguesas y más. ¡Todo hecho con ingredientes frescos y casero!</p>
        <button className="menu-button">
          <Link to="/cartaBurger">
            VER CARTA
          </Link>
        </button>
      </div>
    </div>
    </Element>
  )
}
