export default () => {
  const views = `
  <section class="login">
    <h1 class="title">Bienvenido/a</h1>
    <div class="img-chef">
      <img src="img/logoimg2.png" alt="" class="chef">
    </div>
    <div>
    <h3 class="title">!Que vivan las recetas!</h3>
      <div class="form-email">
        <div class="regístrate">
          <input type="email" class="form-control" id="inputEmail" placeholder="name@example.com">
        </div>
        <div class="email">
          <input type="password" class="inputPassword" id="inputPassword" placeholder="Password">
        </div>
        <button class="button-login" id="button-login"><a href="#/posts" id="profile">login</a></button>
      </div>
      <h3>O escoge una de las siguientes opciones</h3>
      <div class="social-media">
        <div class="face">
          <a href="https://www.facebook.com/" ><img src="https://cdn.icon-icons.com/icons2/91/PNG/512/facebook_16423.png" alt=""class="url-face"></a>
        </div>
        <div class="gmail">
          <img src="https://sitelabs.es/wp-content/uploads/2017/12/google-logo-1-800x800.png" alt="" class="url-gmail" id="url-gmail"></a>
        </div>
      </div>
      <h3>¿No tienes cuenta?<div class="newCount"><a href="#/singUp"> Regístrate</a></div></h3>
    </div>
    </section>
    `;

  const divElement = document.createElement('div');
  divElement.innerHTML = views;

  return divElement;
};
