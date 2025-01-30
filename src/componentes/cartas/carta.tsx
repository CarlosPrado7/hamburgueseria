import './carta.css';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Carta() { 

  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: cardContainerRef, inView: cardContainerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
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
          {[
        {
          src: "burger pollo.jpg",
          title: "S+ Chicken",
        },
        { 
          src: "BurgerDoble.jpg", 
          title: "S+ Doble", 
        },
        { 
          src: "burgerTrufa.jpg", 
          title: "S+ Trufa", 
        },
        { 
          src: "burgerBacon.jpg", 
          title: "S+ Bacon", 
        },
        { 
          src: "burgerSmash.jpeg", 
          title: "S+ Smash", 
        },
        { 
          src: "vegana.png", 
          title: "S+ Vegana", 
        }
      ].map((card, index) => (
        <div
          key={index}
          className="card"
          ref={(el) => {
            if (el) cardsRef.current[index] = el;
          }}
        >
          <div className="card-inner">
            {/* Carta por delante */}
            <div className="card-front">
              <img src={`/assets/${card.src}`} alt={card.title} />
              <p className="burger-text">{card.title}</p>
            </div>
            {/* Carta por detrás */}
            <div className="card-back">
            <div className="icon">🍔</div>
            <Link to="/cartaBurger" className="view-menu-button">
              VER CARTA
            </Link>
            </div>
          </div>
        </div>
      ))}
  </div>

        
      </div>
    </div>
  );
}
