import "../src/styles/normalize.css";
import "../src/styles/globales.css";

// Nucleo de la App

export default function App() {

  const app = document.querySelector('#app');

  app.innerHTML = '';

  const mensaje = "Hola Mundo desde el App.js";

  app.innerHTML = mensaje;

}
