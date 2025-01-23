import "./LegalNotice.css";

export default function LegalNotice() {
  return (
    <div className="legal-notice-container">
      <div className="legal-notice-header">
        <img className="legal-notice-image" src="/assets/s+_icono-rojo-bermellon.png" alt="Legal Notice" />
        <h1 className="legal-notice-title">Política de Privacidad</h1>
      </div>
      <p className="legal-notice-text">
        En <strong>S+ BURGER</strong>, nos comprometemos a proteger y respetar tu
        privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos y
        protegemos la información personal que nos proporcionas.
      </p>

      <h2 className="legal-notice-subtitle">1. Información que Recopilamos</h2>
      <p className="legal-notice-text">Podemos recopilar y procesar la siguiente información sobre ti:</p>
      <ul className="legal-notice-list">
        <li>Información que proporcionas al realizar un pedido, como tu nombre, dirección, número de teléfono y correo electrónico.</li>
        <li>Detalles de las transacciones realizadas a través de nuestro sitio web.</li>
        <li>Información sobre tu dispositivo, como dirección IP, tipo de navegador y datos de navegación.</li>
      </ul>

      <h2 className="legal-notice-subtitle">2. Uso de tu Información</h2>
      <p className="legal-notice-text">Usamos la información recopilada para:</p>
      <ul className="legal-notice-list">
        <li>Procesar y entregar tus pedidos.</li>
        <li>Mejorar nuestra página web y experiencia de usuario.</li>
        <li>Comunicarnos contigo respecto a promociones, ofertas especiales o actualizaciones importantes.</li>
      </ul>

      <h2 className="legal-notice-subtitle">3. Cómo Compartimos tu Información</h2>
      <p className="legal-notice-text">
        No compartimos tu información personal con terceros, excepto en las siguientes circunstancias:
      </p>
      <ul className="legal-notice-list">
        <li>Para cumplir con las leyes aplicables o responder a solicitudes legales válidas.</li>
        <li>Con proveedores de servicios que nos ayudan a operar nuestra página web y gestionar pedidos, siempre bajo estrictos acuerdos de confidencialidad.</li>
      </ul>

      <h2 className="legal-notice-subtitle">4. Seguridad de los Datos</h2>
      <p className="legal-notice-text">
        Tomamos medidas técnicas y organizativas adecuadas para proteger tu información personal contra acceso no autorizado, pérdida o destrucción.
      </p>

      <h2 className="legal-notice-subtitle">5. Tus Derechos</h2>
      <p className="legal-notice-text">Tienes los siguientes derechos respecto a tu información personal:</p>
      <ul className="legal-notice-list">
        <li>Acceder a los datos que tenemos sobre ti.</li>
        <li>Solicitar la corrección de datos incorrectos o incompletos.</li>
        <li>Solicitar la eliminación de tus datos personales, salvo que estemos obligados a conservarlos por ley.</li>
      </ul>

      <h2 className="legal-notice-subtitle">6. Cookies</h2>
      <p className="legal-notice-text">
        Utilizamos cookies para mejorar la funcionalidad de nuestro sitio web y analizar el tráfico. Puedes gestionar tus preferencias de cookies desde la configuración de tu navegador.
      </p>

      <h2 className="legal-notice-subtitle">7. Cambios en esta Política</h2>
      <p className="legal-notice-text">
        Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Te recomendamos revisarla periódicamente.
      </p>

      <h2 className="legal-notice-subtitle">8. Contacto</h2>
      <p className="legal-notice-text">
        Si tienes alguna pregunta o inquietud sobre esta Política de Privacidad, puedes contactarnos en:
      </p>
      <p className="legal-notice-text">
        <strong>S+ BURGER</strong><br />
        Email: dgnn@outlook.es<br />
        Teléfono: +34 665 869 852<br />
      </p>
    </div>
  );
}
