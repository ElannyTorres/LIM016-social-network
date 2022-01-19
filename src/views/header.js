export default () => {
  const views = `
  <header>
    <div class="titleContainer">
        <ul>
            <li><a href="#/profile"><i class="fas fa-user"></i></a></li>
            <li><a href="#/posts"><i class="fas fa-home"></i></a></li>
            <li><a href="#/"><i class="fas fa-sign-out-alt"></i></a></li>
        </ul>
    </div>
  </header>
    `;

  const divElement = document.createElement('div');
  divElement.setAttribute('id', 'headerGrid');
  divElement.innerHTML = views;

  return divElement;
};
