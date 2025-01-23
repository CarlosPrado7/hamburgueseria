import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Element } from "react-scroll";
import './header.css';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const cerrarMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
    <Element name="home">
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        {/* Logo */}
        <div className="logo">
          <ScrollLink to="home" smooth={true} duration={1000}>
            <img src="/assets/s+_icono-blanco-tiza.png" alt="Logo Hamburgueseria" className="logo-image" />
          </ScrollLink>
        </div>

        {/* Navigation */}
        <nav className="nav">
          <ScrollLink to="about" smooth={true} duration={1000} className="nav-link" onClick={cerrarMenu}>Menú</ScrollLink>
          <ScrollLink to="horario" smooth={true} duration={1000} className="nav-link" onClick={cerrarMenu}>Horarios</ScrollLink>
          <ScrollLink to="sobreNosotros" smooth={true} duration={1000} className="nav-link" onClick={cerrarMenu}>Sobre Nosotros</ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={1000} className="nav-link">Contacto</ScrollLink>
        </nav>

        {/* Botón menú móvil */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`line ${menuOpen ? 'open' : ''}`}></div>
          <div className={`line ${menuOpen ? 'open' : ''}`}></div>
          <div className={`line ${menuOpen ? 'open' : ''}`}></div>
        </div>

        {/* Menú móvil */}
        <nav className={`nav-mobile ${menuOpen ? 'open' : ''}`}>
          <ScrollLink to="about" smooth={true} duration={1000} className="nav-link" onClick={cerrarMenu}>Menú</ScrollLink>
          <ScrollLink to="horario" smooth={true} duration={1000} className="nav-link" onClick={cerrarMenu}>Horarios</ScrollLink>
          <ScrollLink to="sobreNosotros" smooth={true} duration={1000} className="nav-link" onClick={cerrarMenu}>Sobre Nosotros</ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={1000} className="nav-link" onClick={cerrarMenu}>Contacto</ScrollLink>
        </nav>
      </header>

      {/* Hero */}
      <div className="hero">
        <h1 className="hero-text">EL SABOR QUE APLASTA TUS EXPECTATIVAS</h1>
      </div>
      </Element>
    </>
  );
};

export default Header;
