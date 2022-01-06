export default () => {
  const profileOneView = `
    <section class="profile" id="profileOne">
        <div class="profilePhoto">
            <img src="./images/foto.png" alt="Profile Photo">
        </div>
        <div class="profileInfo">
            <h4 class="name">Fulana Suarez</h4>
            <h6 class="status">Amante de la comida</h6>
        </div>
    </section>
    `;

  const divElem = document.createElement('div');
  divElem.setAttribute('id', 'profileOneGrid');
  divElem.innerHTML = profileOneView;

  return divElem;
};
