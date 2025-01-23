import './carta.css';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react';

export default function Carta() { 

  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: cardContainerRef, inView: cardContainerInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (cardContainerInView) {
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
  }, [cardContainerInView]);

  return (
    <div>
      <div className="section-container">

        <div ref={titleRef} className={`section-title ${titleInView ? "visible" : "hidden"}`}>
          <h1 className="titulo">¡Hamburgesas estrella de nuestra carta!</h1>
        </div>
        
        <div ref={cardContainerRef} className={`card-container ${cardContainerInView ? "visible" : "hidden"}`}>
          {["burger pollo.jpg", "BurgerDoble.jpg", "BurgerDoble.jpg", "BurgerDoble.jpg"].map((src, index) => (
            <div
              key={index}
              className="card"
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
            >
              <div className={`card${index + 1}`}>
                <img src={`/assets/${src}`} className={`burger${index + 1}`} alt={`Burger ${index + 1}`} />
              </div>
              <p className="burger-text">
                {index === 0 && "S+ Pollo"}
                {index === 1 && "S+ Doble"}
                {index === 2 && "S+ Trufa"}
                {index === 3 && "S+ Bacon"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
