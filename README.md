# Hamburguesería

Este proyecto es una página web creada para una hamburguesería utilizando **React**, **TypeScript** y **Vite**. La aplicación tiene varias funcionalidades, incluyendo navegación, efectos de scroll suave y un diseño responsivo, todo desarrollado con herramientas modernas para ofrecer una excelente experiencia al usuario.

## Tecnologías

- **React**: Biblioteca de JavaScript para construir interfaces de usuario interactivas.
- **TypeScript**: Superset de JavaScript que permite trabajar con tipado estático.
- **Vite**: Herramienta de construcción rápida para proyectos de frontend.
- **CSS**: Para los estilos visuales de la página.
- **React Router**: Para gestionar la navegación entre las diferentes secciones de la página.
- **React Scroll**: Para implementar scroll suave entre secciones.
- **React Intersection Observer**: Para detectar cuando los elementos entran en la vista del usuario.
- **Vercel Analytics**: Para obtener información sobre el tráfico web (desinstalado si no es necesario).

## Comandos usados

### 1. **Crear el proyecto con Vite y React**

Para iniciar un nuevo proyecto con Vite, React y TypeScript: 

npm create vite@latest hamburgueseria
cd hamburgueseria

### 2. Instalar dependencias iniciales ###
Una vez dentro del directorio del proyecto, instala las dependencias necesarias para correr el proyecto:

npm install
npm run dev

### 3. Instalar librerías necesarias ###
A continuación, instala las librerías adicionales que se utilizan en el proyecto:

React Router Dom: Para navegar entre las páginas.

npm install react-router-dom
React Scroll: Para implementar el scroll suave.

npm install react-scroll
Tipo de React Scroll para TypeScript:

npm install --save-dev @types/react-scroll
React Intersection Observer: Para detectar los elementos que entran en la vista del usuario.

npm install react-intersection-observer
Vercel Analytics (Si se desea agregar análisis de tráfico web):

npm i @vercel/analytics
Desinstalar Vercel Analytics (En caso de que no sea necesario):

npm uninstall @vercel/analytics

# Funcionalidades #
  ## General ##
  ### Fuentes: Se usan fuentes personalizadas según el diseño de la hamburguesería. ###
  ### Colores: Los colores principales incluyen negros, blancos y el color #b51739 para los acentos. ###
  ### Logos: Se implementó el logo definitivo en la página. ###
  ### Contacto: Se implementó la sección de contacto definitivo. ###
  ### Análisis de Vercel: Se añadió la integración de análisis para monitorear el tráfico web. ###
  ### Despliegue de la página: La página fue desplegada exitosamente. ###

  ## Preloader ##
  ### Preloader: Se implementó una pantalla de carga que muestra el logo mientras se carga la página.
  ### El preloader carga todo el contenido antes de mostrar la interfaz. ###

  ## Header ##
  ### Logo: El logo redirige a la parte superior de la página al hacer clic.###
  ### Secciones: Al hacer clic en las secciones del header, la página redirige a las correspondientes.###
  ### Sticky Header: El header se mantiene visible al hacer scroll hacia abajo.###
  ### Efectos en el hover: Al hacer hover sobre los enlaces del header, estos se subrayan y se vuelven de color rojo (#b51739).###
  ### Menú móvil: En la versión móvil, el menú se convierte en un menú hamburguesa.###
  ### Al hacer clic en el menú hamburguesa, se abre el menú y se puede redirigir a las secciones.###

  ## Footer ##
  ### Logo: El logo en el footer redirige a la página principal. ###
  ### Contacto: Información de contacto en el footer, con redirecciones a Google Maps, teléfono y correo. ###
  ### Políticas: Se incluye un enlace a la página de políticas. ###
  ### Redes sociales: Redirecciones a las redes sociales desde el footer. ### 

  ## Textos Legales ##
  ### Aviso Legal: Se incluye una sección con el aviso legal de la página. ###
  ### Política de Privacidad: Incluye el enlace a la política de privacidad. ###
  ### Política de Cookies: Se incluye un enlace a la política de cookies. ###

  ## Banner de Cookies ##
  ### Mostrar Banner de Cookies: El banner de cookies aparece al ingresar al sitio. ###
  ### Almacenamiento de Aceptación: Una vez aceptado el banner, no vuelve a aparecer. ###
  ### Cookies de Ubicación: Se guardan las cookies relacionadas con la ubicación del usuario. ###

  ## Despliegue ##
  ### Para desplegar este proyecto en producción, puedes usar plataformas como Vercel o Netlify. Solo es necesario conectar el repositorio a estas plataformas y seguir las instrucciones. ###