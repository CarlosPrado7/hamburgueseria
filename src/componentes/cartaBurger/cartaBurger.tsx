import './cartaBurger.css';

export default function CartaBurger() {

  const alergenos = [
    { name: "Lácteos", icon: "🥛" },
    { name: "Gluten", icon: "🌾" },
    { name: "Huevo", icon: "🥚" },
    { name: "Cacahuete", icon: "🥜" },
    { name: "Frutos de cáscara", icon: "🌰" },
    { name: "Mostaza", icon: "🌿" },
    { name: "Soja", icon: "🫘" },
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
        <h1 className="menu-title">Nuestras Hamburguesas</h1>
        <div className="hamburguesas">
          <div className="hamburguesa">
            <h2 className="nombre">S+ Basic</h2>
            <p className="descripcion">Pan de patata bañado en mantequilla y tostado, cebolla cruda, pepinillo, una smash burger</p>
            <p className="precio">Precio: 5€</p>
          </div>
          <div className="hamburguesa">
            <h2 className="nombre">Burger 2</h2>
            <p className="descripcion">Descripción de la burger 2</p>
            <p className="precio">Precio: 6€</p>
          </div>
          <div className="hamburguesa">
            <h2 className="nombre">Burger 3</h2>
            <p className="descripcion">Descripción de la burger 3</p>
            <p className="precio">Precio: 7€</p>
          </div>
        </div>
        
    
        {/* Información adicional */}
        <div className="tituloInformativo">
          <h1>*Todas las burgers pueden servirse con pan sin gluten (+1,50€)</h1>
          <h1>*Todos los menús incluyen S+Fries y refresco/cerveza</h1>
        </div>
    
        {/* Mostrar los alérgenos */}
        <Alergenos />
        
      </div>
  )  
}
