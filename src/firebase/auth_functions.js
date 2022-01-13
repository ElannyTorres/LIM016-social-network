import {
  auth,
  signInWithPopup,
  onAuthStateChanged,
} from './app.js';

/** id de usuario */
export function userState(user) {
  return onAuthStateChanged(auth, user);
}
/** creacion de user con gmail */
export function singUpGmail(provider) {
  return signInWithPopup(auth, provider);
}
