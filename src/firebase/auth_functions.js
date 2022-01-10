import {
    auth,
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
  } from './app.js';

/** creacion de user con gmail */

export const singUpGmail = (provider) => {
  signInWithPopup(auth, provider);
};
