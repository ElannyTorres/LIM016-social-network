export default () => {
  const views = `
  <section class="login">
    <div class="img-chef">
      <img src="img/logotipo-del-chef-feliz-símbolo-de-comida-restaurante-cocina-194682894.jpg" alt="" class="chef">
    </div>
    <div>
      <h1>!Que viva las recetas!</h1>
      <h2>Bienvenido/a</h2>
      <div class="form-email">
        <div class="regístrate">
          <label for="exampleFormControlInput1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="inputEmail" placeholder="name@example.com">
        </div>
        <div class="email">
          <label for="inputPassword" class="label-email">Password</label>
          <input type="password" class="inputPassword" id="inputPassword">
        </div>
        <button class="button-login" id="button-login"><a href="#/profile">login</a></button>
      </div>
      <h3>O bien ingresa con..</h3>
      <div class="social-media">
        <div class="face">
          <a href="https://www.facebook.com/" ><img src="https://cdn.icon-icons.com/icons2/91/PNG/512/facebook_16423.png" alt=""class="url-face"></a>
        </div>
        <div class="gmail">
          <img src="https://sitelabs.es/wp-content/uploads/2017/12/google-logo-1-800x800.png" alt="" class="url-gmail" id="url-gmail"></a>
        </div>
      </div>
      <h3>¿No tienes cuenta?<span class="newCount">Regístrate</span></h3>
    </div>
    </section>
    `;

  const divElement = document.createElement('div');
  divElement.innerHTML = views;

  return divElement;
};
