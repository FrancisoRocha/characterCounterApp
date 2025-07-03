import './header.css';
import '../../styles/darkMode.css';
import '../../styles/lightMode.css';

export const header = () => {

  const header = document.createElement('header');
  header.classList.add('header');

  header.innerHTML = `
      <img src='/public/assets/images/logo-dark-theme.svg' alt='Logo' class='logo'/>
      <button class='btn__mode dark' id='themeToggle'>
        <img src='../public/assets/images/icon-sun.svg' alt='Icono mode' class='icon'/>
      </button>
    `;

  // Agregar funcionalidad de toggle
  const themeToggle = header.querySelector('#themeToggle');
  const logo = header.querySelector('.logo');
  const icon = header.querySelector('.icon');
  
  // Estado inicial
  let isDarkMode = true;
  
  themeToggle.addEventListener('click', () => {
    const body = document.body;
    const allElements = document.querySelectorAll('.dark, .light');
    
    if (isDarkMode) {
      // Cambiar a modo claro
      body.className = 'light';
      logo.src = '/public/assets/images/logo-light-theme.svg';
      icon.src = '../public/assets/images/icon-moon.svg';
      
      // Cambiar todas las clases de elementos
      allElements.forEach(element => {
        element.classList.remove('dark');
        element.classList.add('light');
      });
      
      isDarkMode = false;
    } else {
      // Cambiar a modo oscuro
      body.className = 'dark';
      logo.src = '/public/assets/images/logo-dark-theme.svg';
      icon.src = '../public/assets/images/icon-sun.svg';
      
      // Cambiar todas las clases de elementos
      allElements.forEach(element => {
        element.classList.remove('light');
        element.classList.add('dark');
      });
      
      isDarkMode = true;
    }
  });

  return header;
}
