import "../src/styles/normalize.css";
import "../src/styles/globales.css";
import "../src/styles/darkMode.css";
import "../src/styles/lightMode.css";
import { header } from "./components/Header/header";
import { Title } from "./components/Title/title";
import { textArea } from "./components/TextArea/TextArea";
import { inputsOption } from "./components/InputsOptions/inputs";

// Nucleo de la App

export default function App() {

  const app = document.querySelector('#app');

  // Inicializar el tema oscuro por defecto
  document.body.className = 'dark';

  app.innerHTML = '';

  const container = document.createElement('DIV');
  container.classList.add('main-container');

  container.append(header());
  container.append(Title())
  container.append(textArea())
  container.append(inputsOption())

  app.append(container)

}
