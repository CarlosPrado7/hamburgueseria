# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})

# hamburgueseria

# Comandos usados  
npm create vite@latest hamburgueseria  
cd hamburgueseria  
npm install  
npm run dev

# Librerias necesarias
npm install react-router-dom
npm install react-scroll
npm install --save-dev @types/react-scroll
npm install react-intersection-observer
npm i @vercel/analytics
npm uninstall @vercel/analytics

# Funcionalidades 
- [] General
    - [] Fuentes 
    - [] Colores negros, blancos y #b51739
    - [X] Logos definitivos
    - [] Contacto definitivo
    - [] Añadir analiticas de vercel
    - [X] Desplegar pagina
- [X] Preloader
    - [X] Preloader carga todo
    - [X] Logo definitivo
- [] Header
    - [X] Logo redirige hacia arriba
    - [] Secciones redirigen a sus secciones
    - [X] Al hacer scrolldown se mantenga el header
    - [X] Al hacer hover en el enlace se pone el rojo y subrallado
    - [X] En version movil se ve el menu hamburguesa
    - [X] Movil se redirige y cierra el menu
- [] Footer
    - [] Logo
    - [] Contacto
    - [] Politicas
    - [] Redirigir a google maps, numero y correo
    - [] Redireccion a otra pagina para politicas
    - [] Redireccion de redes sociales
- [] Textos legales
    - [] Aviso legal
    - [] Privacidad
    - [] cookies
-[] Banner de cookies y cookies
    - [] Aparece el banner nada más entrar a la pagina
    - [] El banner tiene formato dado
    - [] Se debe almacenar informacion para que, al darle a aceptar, no vuelva a salir el banner
    - [] Añadir cookies de ubicacion
```
