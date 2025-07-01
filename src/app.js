import "../src/styles/normalize.css";
import "../src/styles/globales.css";
import { header } from "./components/Header/header";
import { Title } from "./components/Title/title";

// Nucleo de la App

export default function App() {

  const app = document.querySelector('#app');

  app.innerHTML = '';

  const container = document.createElement('DIV');
  container.classList.add('main-container');

  container.append(header());
  container.append(Title())

  app.append(container)

}
