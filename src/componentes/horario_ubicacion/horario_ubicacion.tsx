import './horario_ubicacion.css'
import { Element } from "react-scroll";

export default function horario_ubicacion() {
  return (
    <Element name="horario">
    <div className='fondo' id='horario'>

      <div className="principal">
        <h1 className="titulo">¡Visitanos y descrubre el sabor de nuestras Smash Burger!</h1>
        <div className="horario">
          <h2>Horario</h2>
          <p>Jueves a Domingo</p>
          <p>De 20:00 a 00:00</p>
        </div>

        <div className="mapa">
          <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d774.3988196538046!2d-3.6142540730409585!3d39.070136511141285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd69650059714293%3A0xb9a2558b3bf0a184!2sS%2B%20BURGER!5e0!3m2!1ses!2ses!4v1736927612246!5m2!1ses!2ses" 
              width="100%" 
              height="100%" 
              style={{border:0}}
              allowFullScreen
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      
    </div>
    </Element>
  )
}
