export default () => {
  const errorView = `
    <section id="errorSection">
      <h2>404</h2>
      <h1>Página no encontrada</h1>
      <br>
      <p>El archivo especificado no se encontró en este sitio web. Por favor, compruebe la URL para errores y vuelva a intentarlo.</p>
    </section>
    `;

  const divElement = document.createElement('div');
  divElement.setAttribute('id', 'message');
  divElement.innerHTML = errorView;

  return divElement;
};
