import { useEffect, useState } from 'react';
import './cookieBanner.css';

export default function CookieBanner() {
    const [isVisible, setVisible] = useState(true);
    
    const aceptarCookies = () => {
        setVisible(false);
        localStorage.setItem('cookiesAceptadas', 'true');

        // Obtener la ubicación del usuario
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    const locationCookie = `userLocation=${latitude},${longitude}; path=/; max-age=604800;`; // Expira en 7 días
                    document.cookie = locationCookie;
                    console.log("Ubicación almacenada como cookie:", locationCookie);
                },
                (error) => {
                    console.error("Error obteniendo la ubicación:", error.message);
                }
            );
        }
    };

    const rechazarCookies = () => {
        setVisible(false);
        localStorage.setItem('cookiesAceptadas', 'false');
    };

    useEffect(() => {
        const cookiesAceptadas = localStorage.getItem('cookiesAceptadas');
        if (cookiesAceptadas) {
            setVisible(false);
        }
    }, []);

    if (!isVisible) return null;

    return (
        <div className="cookie-banner">
            <p className="titulo">
                <span className="icono">🍔</span> 
                Este sitio utiliza cookies 
                <span className="icono">🍔</span>
            </p>
            <p className="texto">
                Usamos cookies para mejorar la experiencia de usuario. ¿Aceptas el uso de cookies?
            </p>
            <div className="cookie-button">
                <button className="aceptar" onClick={aceptarCookies}>Aceptar</button>
                <button className="rechazar" onClick={rechazarCookies}>Rechazar</button>
            </div>
        </div>
    );
}
