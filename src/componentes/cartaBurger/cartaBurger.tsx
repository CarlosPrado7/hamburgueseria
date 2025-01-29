import { Link } from 'react-router-dom';
import './cartaBurger.css';

export default function CartaBurger() {

  const alergenos = [
    { name: "Lácteos", icon: "🥛" },
    { name: "Gluten", icon: "🌾" },
    { name: "Huevo", icon: "🥚" },
    { name: "Cacahuete", icon: "🥜" },
    { name: "Mostaza", icon: "🌭" },
    { name: "Frutos de cáscara", icon: "🌰" },
    { name: "Mostaza", icon: "🌿" },
    { name: "Soja", icon: "🌱" },
    { name: "Sésamo", icon: "🌻" },
    { name: "Apio", icon: "🥬" },
    { name: "Pescado", icon: "🐟" },
    { name: "Sulfitos", icon: "⚗️" },
  ];

  const Alergenos = () => (
    <div className="alergenos-container">
      {alergenos.map((alergeno, index) => (
        <div key={index} className="alergeno">
          <span className="icon">{alergeno.icon}</span>
          <span className="name">{alergeno.name}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="menu-cartaBurger">
      <h1 className="hamburguesas-title">Nuestras Hamburguesas</h1>
      <div className="hamburguesas">
        <div className="hamburguesa">
          <h2 className="nombre">S+ Basic</h2>
          <p className="descripcion">Pan de patata bañado en mantequilla y tostado, cebolla cruda, pepinillo, una smash burger</p>
          <p className="precio">Precio: 6,99€ Menú: 9,49€</p>
        </div>
        <div className="hamburguesa">
          <img src="/assets/BurgerDoble.jpg" alt="S+ Basic" />
          <h2 className="nombre">S+ Doble</h2>
          <p className="descripcion">Pan de patata bañado en mantequilla y tostado, cebolla cruda, pepinillo, doble smash burger, dos lonchas de queso americano, salsa S+ casera</p>
          <p className="precio">Precio: 8,99€ Menú: 11,49€</p>
        </div>
        <div className="hamburguesa">
          <h2 className="nombre">S+ Bacon</h2>
          <p className="descripcion">Pan de patata bañado en mantequilla y tostado, cebolla agridulce, mermelada de bacon, bacon crujiente, doble smash burger, dos lonchas de queso americano, salsa de bacon ahumado</p>
          <p className="precio">Precio: 9,99€ Menú: 12,49€</p>
        </div>
        <div className="hamburguesa">
          <h2 className="nombre">S+ Trufada</h2>
          <p className="descripcion">Pan de patata bañado en mantequilla y tostado, cebolla confitada, bacon crujiente, doble smash burger, dos lonchas de queso americano, salsa trufada casera</p>
          <p className="precio">Precio: 10,99€ Menú: 13,49€</p>
        </div>
        <div className="hamburguesa">
          <img src="/assets/burger pollo.jpg" alt="S+ Chicken" />
          <h2 className="nombre">S+ Chicken</h2>
          <p className="descripcion">Pan de patata bañado en mantequilla y tostado, contramuslo de pollo crujiente, pepinillo, cebolla agridulce, salsa S+ casera</p>
          <p className="precio">Precio: 9,99€ Menú: 12,49€</p>
        </div>
        <div className="hamburguesa">
          <h2 className="nombre">S+ Junior</h2>
          <p className="descripcion">Pan slider bañado en mantequilla y tostado, una smash burger, ketchup</p>
          <p className="precio">Precio: 4,99€ Menú: 6,99€</p>
        </div>
        <div className="hamburguesa">
          <h2 className="nombre">S+ Vegetariana</h2>
          <p className="descripcion">Pan de patata tostado, carne vegetariana, bacon vegetariano, ketchup</p>
          <p className="precio">Precio: 9,99€ Menú: 12,49€</p>
        </div>
      </div>

      {/* Información adicional */}
      <div className="tituloInformativo">
        <h1>*Todas las burgers pueden servirse con pan sin gluten (+1,50€)</h1>
        <h1>*Todos los menús incluyen S+Fries y refresco/cerveza</h1>
      </div>

      {/* Mostrar los alérgenos */}
      <Alergenos />

      {/* Enrantes */ }
      <h1 className="entrantes-title">Nuestros Entrantes</h1>
      <div className="entrantes">
        <div className="entrante">
          <h2 className="nombre">S+ Fries</h2>
          <p className="descripcion">Patatas caseras sazonadas</p>
          <p className="precio">Precio: 3,50€</p>
        </div>
        <div className="entrante">
          <h2 className="nombre">S+ Bacon Fries</h2>
          <p className="descripcion">Patatas caseras, bacon, queso americano fundido</p>
          <p className="precio">Precio: 5,99€</p>
        </div>
        <div className="entrante">
          <h2 className="nombre">Flor de cebolla</h2>
          <p className="descripcion">Flor de cebolla frita y salsa S+ casera</p>
          <p className="precio">Precio: 5,99€</p>
        </div>
        <div className="entrante">
          <h2 className="nombre">S+ Finger de Pollo</h2>
          <p className="descripcion">Tiras de pollo crujiente y salsa S+ casera</p>
          <p className="precio">Precio: 6,99€ Menú: 9,49€</p>
        </div>
        <div className="entrante">
          <h2 className="nombre">S+ Alitas Teriyaki</h2>
          <p className="descripcion">Alitas de pollo crujiente y salsa teriyaki casera</p>
          <p className="precio">Precio: 5,99€ Menú: 10,49€</p>
        </div>

        {/* Refrescos */ }
        <div className="refrescos-container">
        <h1 className="refrescos-title">Refrescos y Bebidas</h1>
        <div className="refrescos-grid">
          <div className="refresco">
            <h2 className="nombre">Agua</h2>
            <p className="precio">1,50€</p>
          </div>
          <div className="refresco">
            <h2 className="nombre">Refresco</h2>
            <p className="precio">2,50€</p>
          </div>
          <div className="refresco">
            <h2 className="nombre">Copa de barril</h2>
            <p className="precio">2,50€</p>
          </div>
          <div className="refresco">
            <h2 className="nombre">Café</h2>
            <p className="precio">1,40€</p>
          </div>
          <div className="refresco">
            <h2 className="nombre">Tercio Botellín</h2>
            <p className="precio">2,40€</p>
          </div>
          <div className="refresco">
            <h2 className="nombre">Jarra de medio</h2>
            <p className="precio">3,50€</p>
          </div>
        </div>
      </div>
    </div>

      {/* Información adicional */}
      <div className="tituloInformativo">
        <h1>*Dipper de salsa (+1,50€)</h1>
        <h1>*Todos los menús incluyen S+Fries y refresco/cerveza</h1>
      </div>

      {/* Postres */ }
      <h1 className="postes-title">Nuestros Postres</h1>
      <div className="postres">
        <div className="postre">
          <h2 className="nombre">S+ Cookie</h2>
          <p className="descripcion">Cookies caseras de chocolate con toppings de sabores</p>
          <p className="precio">Precio: 3,50€</p>
        </div>
        <div className="postre">
          <h2 className="nombre">S+ CheeseCake</h2>
          <p className="descripcion">Tarta suave de queso manchego</p>
          <p className="precio">Precio: 3,99€</p>
        </div>
        <div className="postre">
          <h2 className="nombre">S+ Sandwich</h2>
          <p className="descripcion">Pan slicer bañado en mantequilla y tostado con nutella y crujiente de galleta</p>
          <p className="precio">Precio: 3,50€</p>
        </div>
      </div>

      <div className='contenedorVolver'>
        <Link to="/" className='volver'>Volver al inicio</Link>
      </div>

    </div>
  );
}