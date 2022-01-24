import { cierreDeSesion } from '../firebase/auth_functions.js';

export default () => {
  const views = `
  <header>
    <div class="titleContainer">
        <ul>
            <li><a href="#/profile"><i class="fas fa-user"></i></a></li>
            <li><a href="#/posts"><i class="fas fa-home"></i></a></li>
            <li><a href="#/"><i class="fas fa-sign-out-alt" id="signOut"></i></a></li>
        </ul>
    </div>
  </header>
    `;

  const divElement = document.createElement('div');
  divElement.setAttribute('id', 'headerGrid');
  divElement.innerHTML = views;

  return divElement;
};

export const cerrarSesion = () => {
  const btnCerrarSesion = document.querySelector('#signOut');
  btnCerrarSesion.addEventListener('click', () => {
    cierreDeSesion()
      .then(() => {
        sessionStorage.clear();
        window.location.hash = '#/';
      })
      .catch((error) => {
        console.log(error);
      });
  });
};
