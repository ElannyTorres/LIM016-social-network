export default () => {
  const views = `
  <section id="moreInfoContainer">
    <section class="profile">
      <div class="profilePhoto">
        <img src="./img/foto.png" alt="Profile Photo">
      </div>
      <div class="profileInfo">
        <h4 class="name">Fulana Suarez</h4>
        <h6 class="status">Amante de la comida</h6>
      </div>
    </section>
    <section class="postContainer">
      <form id="postForm" name="postForm" class="createPostContainer">
        <textarea rows="3" id="textDescription" class="textToCreate" placeholder="¿Qué deseas compartir?" autofocus></textarea><br>
        <button type="submit" id="btnShare" class="btnShare">Compartir</button>
      </form>
      <div class="posted">
      </div>
    </section>
  </section>
<footer>
    <div class="titleContainer">
    <ul>
      <li><a href="#/profile"><i class="fas fa-user"></i></a></li>
      <li>
        <a href="#/posts"><i class="fas fa-home"></i></a>
      </li>
      <li><a href="#/"><i class="fas fa-sign-out-alt"></i></a></li>
    </ul>
    </div>
</footer>
      `;

  const divElement = document.createElement('div');
  divElement.innerHTML = views;

  return divElement;
};

/* <button class="btnPicture">
  <i class="fas fa-image"></i>
</button>;
*/
