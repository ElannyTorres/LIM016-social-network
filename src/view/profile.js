export default () => {
  const viewProfile = `
  <section id="profileSection">
    <div class="containerProfile">
        <img class="coverPhoto" src="./images/coverphoto.png" alt="">
        <div class="infoProfile">
            <div class="profilePhoto">
                <img src="./images/foto.png" alt="Profile Photo">
            </div>
            <div class="profileInfo">
                <h4 class="name">Fulana Suarez</h4>
                <h6 class="status">Amante de la comida</h6>
            </div>
        </div>
    </div>
  </section>
    `;

  const divElem = document.createElement('div');
  divElem.setAttribute('id', 'viewProfileGrid');
  divElem.innerHTML = viewProfile;

  return divElem;
};
