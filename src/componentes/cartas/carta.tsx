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
          backText: "Ingredientes: Pan de patata bañado en mantequilla y tostado, contramuslo de pollo crujiente, pepinillo, cebolla agridulce, salsa S+ casera.",
          allergens: ["🥛 Lácteos", "🌾 Gluten", "🥚 Huevo", "🌭 Mostaza", "🌱 Soja", "🌻 Frutos de cáscara"]
        },
        { 
          src: "BurgerDoble.jpg", 
          title: "S+ Doble", 
          backText: "Ingredientes: Pan de patata bañado en mantequilla y tostado, cebolla cruda, pepinillo, doble smash burger, dos lonchas de queso americano, salsa S+ casera",
          allergens: ["🥛 Lácteos", "🌾 Gluten", "🥚 Huevo", "🌭 Mostaza", "🌱 Soja", "🌻 Frutos de cáscara"] 
        },
        { 
          src: "burgerTrufa.jpg", 
          title: "S+ Trufa", 
          backText: "Ingredientes: Pan de patata bañado en mantequilla y tostado, cebolla confitada, bacon crujiente, doble smash burger, dos lonchas de queso americano, salsa trufada casera", 
          allergens: ["🥛 Lácteos", "🌾 Gluten", "🥚 Huevo", "🌭 Mostaza", "🌱 Soja", "🌻 Frutos de cáscara"] 
        },
        { 
          src: "burgerBacon.jpg", 
          title: "S+ Bacon", 
          backText: "Ingredientes: Pan de patata bañado en mantequilla y tostado, cebolla agridulce, mermelada de bacon, bacon crujiente, doble smash burger, dos lonchas de queso americano, salsa de bacon ahumado casera", 
          allergens: ["🥛 Lácteos", "🌾 Gluten", "🥚 Huevo", "🌭 Mostaza", "🌱 Soja", "🌻 Frutos de cáscara"] 
        },
        { 
          src: "S+ burger.jpeg", 
          title: "S+ Smash", 
          backText: "Ingredientes: Pan de patata bañado en mantequilla y tostado, cebolla cruda, pepinillo, una smash burger, una loncha de queso americano, salsa S+ caera", 
          allergens: ["🥛 Lácteos", "🌾 Gluten", "🥚 Huevo", "🌭 Mostaza", "🌱 Soja", "🌻 Frutos de cáscara"] 
        },
        { 
          src: "vegana.png", 
          title: "S+ Vegana", 
          backText: "Ingredientes: Pan de patata tostado, carne vegetariana, bacon vegetariano, ketchup", 
          allergens: ["🥛 Lácteos","🥚 Huevo", "🌭 Mostaza", "🌱 Soja", "🌻 Frutos de cáscara"] 
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
              <p>{card.backText}</p>
              {card.allergens && card.allergens.length > 0 && (
                <div className="allergens">
                  <strong>Alérgenos:</strong>
                  <ul>
                    {card.allergens.map((allergen, i) => (
                      <li key={i}>{allergen}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
  </div>

        
      </div>
    </div>
  );
}
