/* eslint-disable comma-dangle */
/* eslint-disable spaced-comment */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import { singUpGmail } from '../firebase/auth_functions.js';

import {
  auth,
  provider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  register,
} from '../firebase/app.js';

import { dataUser } from '../firebase/firestore.js';

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
          <div class="requisito">
          <h3 class="">Usa 6 o más caracteres combina letras, números y símbolos</h3>
          </div>
          <div class="requisito-invalidEmail">
          <h3 class="">Ingresa un correo válido</h3>
          </div>
          <div class="requisito-emailInUse">
          <h3 class="">El correo ingresado ya esta siendo usado</h3>
          </div>
          <div class="requisito-passwordVulnerable">
          <h3 class="">Contraseña vulnerable ingresa otra(> 6caracteres,letra,número y símbolo)</h3>
          </div>
          <div class="loginDesdeRegistrar">
          <button class="buttonRegistrar" id="buttonRegistrar"><a id="profile">Registrar</a></button>
          </div>
      </div>
      <h3 class="profileInfo">O bien ingresa con..</h3>
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
    sessionStorage.clear();
    const names = document.getElementById('inputName').value;
    const lastName = document.getElementById('inputLastName').value;
    const email = document.getElementById('inputEmail').value;
    const password = document.getElementById('inputPassword').value;
    // auth();
    // register(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dataUser(user.uid, names, email, lastName);
        if (typeof user === 'object') {
          const registro = document.querySelector('.buttonRegistrar');
          registro.style.display = 'none';

          const errorInvalidEmail = document.querySelector(
            '.requisito-invalidEmail'
          );
          errorInvalidEmail.style.display = 'none';

          const errorEmailInUse = document.querySelector(
            '.requisito-emailInUse'
          );
          errorEmailInUse.style.display = 'none';

          const errorPasswordVulnerable = document.querySelector(
            '.requisito-passwordVulnerable'
          );
          errorPasswordVulnerable.style.display = 'none';

          const loginDesdeRegistrar = document.querySelector(
            '.loginDesdeRegistrar'
          );
          const login = document.createElement('button');
          login.innerHTML = `<button class="button-login" id="button-login">
        <a href="#/" id="profile">login</a></button>`;
          loginDesdeRegistrar.appendChild(login);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);

        if (error.message === 'Firebase: Error (auth/invalid-email).') {
          const requisito = document.querySelector('.requisito');
          requisito.style.display = 'none';

          const errorInvalidEmail = document.querySelector(
            '.requisito-invalidEmail'
          );
          errorInvalidEmail.style.display = 'block';
        } else if (
          error.message === 'Firebase: Error (auth/email-already-in-use).'
        ) {
          const requisito = document.querySelector('.requisito');
          requisito.style.display = 'none';

          const errorEmailInUse = document.querySelector(
            '.requisito-emailInUse'
          );
          errorEmailInUse.style.display = 'block';
        } else if (
          // eslint-disable-next-line operator-linebreak
          error.message ===
          'Firebase: Password should be at least 6 characters (auth/weak-password).'
        ) {
          const requisito = document.querySelector('.requisito');
          requisito.style.display = 'none';

          const errorPasswordVulnerable = document.querySelector(
            '.requisito-passwordVulnerable'
          );
          errorPasswordVulnerable.style.display = 'block';
        }
      });
  });
};

export const authGoogle = () => {
  document.getElementById('url-gmail').addEventListener('click', () => {
    sessionStorage.clear();
    singUpGmail(provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        dataUser(
          result.user.uid,
          result.user.displayName,
          result.user.email,
          result.user.displayName
        );

        sessionStorage.setItem(
          'userData',
          JSON.stringify(result.user.reloadUserInfo)
        );
        if (typeof result === 'object') {
          window.location.hash = '#/posts';
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log('err');
      });
  });
};

export const user = auth.currentUser;
