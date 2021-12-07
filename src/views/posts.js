export default () => {
  const views = `
  <header>
  <div class="titleContainer">
    <h1>"codebook"</h1>
  </div>
</header>
<main>
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
      <div class="createPostContainer">
        <input type="text" class="textToCreate" placeholder="¿Qué deseas compartir?">
        <div class="btnToCreate">
          <button class="btnPicture"></button>
          <button class="btnShare">Compartir</button>
        </div>
      </div>
      <div class="posted">
        <div class="postedOne">
          <div class="postedOneTitle">Publicado por Jean Cedron</div>
          <div class="postedText">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
          <div class="postedBtns">
            <button class="likePosted"></button>
            <button class="sharePosted"></button>
          </div>
        </div>
      </div>
    </section>
  </section>
</main>
<footer></footer>
      `;

  const divElement = document.createElement('div');
  divElement.innerHTML = views;

  return divElement;
};
