/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js';

import { app } from '../firebase/app.js';

import {
  dataUser,
} from '../firebase/firestore.js';

export const Home = () => {
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
        <div class="modal">
        <button class="button-login" id="button-login"><a id="profile">login</a></button>
        <div class="modalErrorLogin">
        </div>
        </div>
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

export const login = () => {
  document.querySelector('.button-login').addEventListener('click', () => {
    const email = document.getElementById('inputEmail').value;
    const password = document.getElementById('inputPassword').value;
    console.log(email);
    console.log(password);

    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.uid);
        sessionStorage.setItem('userID', user.uid);

        if (typeof user === 'object') {
          window.location.hash = '#/posts';
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);

        if (error.message === 'Firebase: Error (auth/user-not-found).') {
          const userNotFound = document.querySelector('.modalErrorLogin');
          userNotFound.style.display = 'block';
          userNotFound.innerHTML = `
          <span class="close" id="close">&times;</span>
          <p>Datos inválidos regístrate y disfruta.</p>
          `;
          document.querySelector('.close').addEventListener('click', () => {
            userNotFound.style.display = 'none';
          });
        } else if (error.message === 'Firebase: Error (auth/invalid-email).') {
          const modalError = document.querySelector('.modalErrorLogin');
          modalError.style.display = 'block';
          modalError.innerHTML = `
            <span class="close" id="close">&times;</span>
            <p>Ingresaste un correo inválido.</p>
            `;
          document.querySelector('.close').addEventListener('click', () => {
            modalError.style.display = 'none';
          });
        } else if (error.message === 'Firebase: Error (auth/wrong-password).') {
          const wrongPassword = document.querySelector('.modalErrorLogin');
          wrongPassword.style.display = 'block';
          wrongPassword.innerHTML = `
            <span class="close" id="close">&times;</span>
            <p>Contraseña errada</p>
            `;
          document.querySelector('.close').addEventListener('click', () => {
            wrongPassword.style.display = 'none';
          });
        }
      });
  });
};

// con Gmail
export const loginAuthGoogle = () => {
  document.getElementById('url-gmail').addEventListener('click', () => {
    sessionStorage.clear();
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        dataUser(result.user.uid, result.user.displayName, result.user.email, result.user.displayName);
        sessionStorage.setItem('userData', JSON.stringify(result.user.reloadUserInfo));
        // The signed-in user info.
        const user = result.user;
        if (typeof user === 'object') {
          window.location.hash = '#/posts';
        }
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

const credential = ['brisset@gmail.com', 'BrissetLC'];
console.log(credential);
