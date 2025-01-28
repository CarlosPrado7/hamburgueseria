import { useEffect, useState } from 'react';
import './cookieBanner.css';

export default function 
() {

    const [isVisible, setVisible] = useState(true);
    
    const aceptarCookies = () => {
        setVisible(false);
        localStorage.setItem('cookiesAceptadas', 'true');
    }

    const rechazarCookies = () => {
        setVisible(false);
        localStorage.setItem('cookiesAceptadas', 'false');
    }

    useEffect(() => {
        const cookies = localStorage.getItem('cookiesAceptadas');
        if(cookies === 'true' || cookies === 'false'){
            setVisible(false);
        }
    }, []);

  return (
    isVisible && (
        <div className="cookie-banner">
            <p className="titulo">Este sitio web utiliza cookies.</p>
            <p className="texto">Usamos cookies para mejorar la experiencia de usuario. ¿Aceptas el uso de cookies?</p>
            <div className="cookie-button">
                <input type="button" className="cookie-button aceptar" value={'Aceptar'} onClick={aceptarCookies}/>
                <input type="button" className="cookie-button rechazar" value={'Rechazar'} onClick={rechazarCookies}/>
            </div>
        </div>
    )
        
  )
}
