// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js';
/* Inicializanco FireStore */
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
  // eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js';

/* import de aunth de firetore */
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  // eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAnNJ2wh2QwS1SlbaDA1dpeWs_c_xE8_4o',
  authDomain: 'socialnetwork-94420.firebaseapp.com',
  projectId: 'socialnetwork-94420',
  storageBucket: 'socialnetwork-94420.appspot.com',
  messagingSenderId: '384092263819',
  appId: '1:384092263819:web:84d1c4bb47179537d58b8e',
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export {
  getFirestore,
  doc,
  setDoc,
  collection,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
};

export const auth = getAuth(app);
// Inicializa la authentication
export const provider = new GoogleAuthProvider();

/** creacion de user con correo y password */
export const register = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password);
};

export {
  signInWithPopup,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
};
