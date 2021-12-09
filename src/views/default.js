export default () => {
  const views = `
    <h2>404</h2>
    <h1>Página no encontrada</h1>
    <p>El archivo especificado no se encontró en este sitio web. Por favor, compruebe la URL para errores y vuelva a intentarlo.</p>

    <footer>
        <div class="titleContainer">
            <ul>
                <li><a href="#/profile"><i class="fas fa-user"></i></a></li>
                <li><a href="#/posts"><i class="fas fa-home"></i></a></li>
                <li><a href="#/"><i class="fas fa-sign-out-alt"></i></a></li>
            </ul>
        </div>
    </footer>
  `;

  const divElement = document.createElement('div');
  divElement.setAttribute('id', 'message');
  divElement.innerHTML = views;

  return divElement;
};
