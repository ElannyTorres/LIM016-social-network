export default () => {
  const views = `
      <div id="linksContainer">
      <h2>Recetas</h2>
      <br>
        <ul id="lista">
            <li><a href="https://www.comeperuano.pe/"><img src="../img/peruana.jpeg" alt=""></a></li>
            <li>Comida Peruana</li>
            <br>
            <li><a href="https://www.buzzfeed.com/gretaalvarez/recetas-de-comida-colombiana"><img src="../img/colombiana.jpeg" alt=""></a></li>
            <li>Comida Colombiana</li>
            <br>
            <li><a href="https://www.recetasgratis.net/recetas-venezolanas"><img src="../img/venezolana.jpeg" alt=""></a></li>
            <li>Comida Venezolana</li>
            <br>
            <li><a href="https://www.directoalpaladar.com/cultura-gastronomica/15-mejores-recetas-comida-china-directo-al-paladar-para-celebrar-ano-buey"><img src="../img/occidental.jpeg" alt=""></a></li>
            <li>Comida Occidental</li>
        </ul>
      </div>
    `;

  const divElement = document.createElement('div');
  divElement.setAttribute('id', 'linksGrid');
  divElement.innerHTML = views;

  return divElement;
};
