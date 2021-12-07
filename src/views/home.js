
//import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js';

export default () => {

//export const Home = () => {
  const views = `
  <section class="login">
    <h1 id ="title">!Que viva las recetas!</h1>
    <div class="img-chef">
      <img src="img/logotipo-del-chef-feliz-símbolo-de-comida-restaurante-cocina-194682894.jpg" alt="" class="chef">
    </div>
    <div>
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
        <button class="button-login" id="button-login"><a href="#/profile" id="profile">login</a></button>
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

/*
export const registrar = () => {
  document.getElementById("button-login").addEventListener("click", function () {
    console.log("click")
    let email = document.getElementById('inputEmail').value;
    let password = document.getElementById('inputPassword').value;
    console.log(email)
    console.log(password)
    const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
  })
}

export const authGoogle = () => {
  document.getElementById("url-gmail").addEventListener("click", function () {
    console.log("clic gmail")
    const provider = new GoogleAuthProvider();

  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log('google sing in')
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.log('err')
    });
  })

}
*/