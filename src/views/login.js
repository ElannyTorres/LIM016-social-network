/* eslint-disable import/no-unresolved */
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js';

import { app } from '../firebase/app.js';

export const login = () => {
  document.querySelector('.button-login').addEventListener('click', () => {
    console.log('click')
  })
}
const auth = getAuth(app);
/*
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });*/