export default () => {
  const views = `
    <section id="profileSection">
    <div class="containerProfile">
        <img class="coverPhoto" src="./img/coverphoto.png" alt="">
        <div class="infoProfile">
            <div class="profilePhoto">
                <img src="./img/foto.png" alt="Profile Photo">
            </div>
            <div class="profileInfo">
                <h4 class="name">Fulana Suarez</h4>
                <h6 class="status">Amante de la comida</h6>
            </div>
        </div>
    </div>
    </section>





    <footer>
        <div class="titleContainer">
            <ul>
                <li><a href="#/profile"><i class="fas fa-user"></i></a></li>
                <li><a href="#/posts"><i class="fas fa-home"></i></a></li>
                <li><a href="#/"><i class="fas fa-sign-in-alt"></i></a></li>
            </ul>
        </div>
    </footer>
    `;

  const divElement = document.createElement('div');
  divElement.innerHTML = views;

  return divElement;
};
