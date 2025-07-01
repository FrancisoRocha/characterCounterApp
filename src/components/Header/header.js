import './header.css';
import '../../styles/darkMode.css';

export const header = () => {

  const header = document.createElement('header');
  header.classList.add('header');

  header.innerHTML = `
      <img src='/public/assets/images/logo-dark-theme.svg' alt='Logo' class='logo'/>
      <button class='btn__mode dark'>
        <img src='../public/assets/images/icon-sun.svg' alt='Icono mode' class='icon'/>
      </button>
    `;
  return header;
}
