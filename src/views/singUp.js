/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  // eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js';
import { app } from '../firebase/app.js';

export const singUp = () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = `
<section class="singUp">
    <h1 class="title">Bienvenido/a</h1>
    <div class="img-chef">
        <img src="img/logoimg2.png" alt="" class="chef">
    </div>
    <div>
    <h3 class="title">!Que vivan las recetas!</h3>
    <div class="form-email">
        <div class="regístrate">
        <input type="text" class="form-control" id="inputName" placeholder="Nombres" required>
        </div>
        <div class="regístrate">
        <input type="text" class="form-control" id="inputLastName" placeholder="Apellidos">
        </div>
        <div class="regístrate">
        <input type="email" class="form-control" id="inputEmail" placeholder="name@example.com" required>
        </div>
        <div class="email">
        <input type="password" class="inputPassword" id="inputPassword" placeholder="Password" required>
        </div>
        <button class="buttonRegistrar" id="buttonRegistrar"><a href="#/profile" id="profile">Registrar</a></button>
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
    </div>
    <div class="return"><a href="#/"><i class="fas fa-chevron-left"></i></a></div>
</section>
    `;

  return divElement;
};

export const registrar = () => {
  document.getElementById('buttonRegistrar').addEventListener('click', () => {
    console.log('click');
    const email = document.getElementById('inputEmail').value;
    const password = document.getElementById('inputPassword').value;
    console.log(email);
    console.log(password);
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  });
};

export const authGoogle = () => {
  document.getElementById('url-gmail').addEventListener('click', () => {
    console.log('clic gmail');
    const provider = new GoogleAuthProvider();

    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log('google sing in');
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log('err');
      });
  });
};
