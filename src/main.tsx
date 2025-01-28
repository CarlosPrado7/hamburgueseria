import './index.css';
import { StrictMode } from 'react';
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/header/header.tsx';
import Carta from './componentes/cartas/carta.tsx';
import Footer from './componentes/footer/footer.tsx';
import AvisoLegal from './componentes/textos_legales/LegalNotice.tsx';
import Cookies from './componentes/textos_legales/cookies.tsx';
import Horario_Ubicacion from './componentes/horario_ubicacion/horario_ubicacion.tsx';
import Menu from './componentes/menu/menu.tsx';
import CartaBurger from './componentes/cartaBurger/cartaBurger.tsx';
import SobreNosotros from './componentes/sobreNosotros/sobreNosotros.tsx';
import CookieBanner from './componentes/cookieBanner/cookieBanner.tsx';

const Preloader: React.FC = () => {
  return (
    <div className="preloader">
      <div className="logo-container">
        <img src="/assets/hamburguesa.gif" alt="Logo" className="logo_preloader" />
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Carta />
      <Menu />
      <Horario_Ubicacion />
      <SobreNosotros />
      <Footer />
      <CookieBanner />
    </>
  );
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time of at least 2 seconds
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Router>
      {isLoading ? (
        <Preloader />
      ) : (
        <Routes>
          {/* Pagina Principal */}
          <Route path="/" element={<Home />} />
          {/* Aviso Legal */}
          <Route path="/legal-notice" element={<AvisoLegal />} />
          {/* Cookies */}
          <Route path="/cookies" element={<Cookies />} />
          {/* Carta */}
          <Route path="/cartaBurger" element={<CartaBurger />} />
        </Routes>
      )}
    </Router>
  );
};

// Renderizar la aplicación
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
