import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react';
import './sobreNosotros.css';
import { Element } from "react-scroll";

export default function SobreNosotros() {

  const { ref: imagesRef, inView: imagesInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: teamRef, inView: teamInview } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (imagesInView) {
      cardsRef.current.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add("visible");
        }, index * 200);
      });
    } else {
      cardsRef.current.forEach((card) => {
        card.classList.remove("visible");
      });
    }
  }, [imagesInView]);

  return (
    <Element name="sobreNosotros">
      <div className="sobre-nosotros">
        <div className="intro">
          <h1>Sobre Nosotros</h1>
          <p>
            En <span className="brand-name">S+ Burger</span>, nos apasiona crear experiencias únicas a través de nuestras hamburguesas.
            Con ingredientes frescos, recetas originales y un ambiente acogedor, buscamos llevarte a un paraíso de sabor.
          </p>
        </div>
        <div ref={imagesRef} className={`images ${imagesInView ? "visible" : "hidden"}`}>
          {["Local1.jpg", "Local2.jpg", "Local3.jpg"].map((src, index) => (
            <div
              key={index}
              className="image-card"
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
            >
              <img src={`/assets/${src}`} alt={`Imagen ${index + 1}`} />
              <p>
                {index === 0 && "Compromiso en cada detalle"}
                {index === 1 && "Calidad y sabor sin igual"}
                {index === 2 && "Creando momentos inolvidables"}
              </p>
            </div>
          ))}
        </div>
        <div ref={teamRef} className={`team ${teamInview ? "visible" : "hidden"}`}>
          <h2>Nuestro Equipo</h2>
          <img src="/assets/Gente Local.jpg" alt="Equipo de trabajo" />
        </div>
      </div>
    </Element>
  );
}
