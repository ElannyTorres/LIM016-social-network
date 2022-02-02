/* eslint-disable object-curly-newline */
import { signInWithPopup, onAuthStateChanged, auth, signOut } from './app.js';

/** id de usuario */
export function userState(user) {
  return onAuthStateChanged(auth, user);
}
/** creacion de user con gmail */
export function singUpGmail(provider) {
  return signInWithPopup(auth, provider);
}

/* Cerrar sesión */
export function cierreDeSesion() {
  return signOut(auth);
}
