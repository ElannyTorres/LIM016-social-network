import {
  getFirestore,
  collection,
  getDocs,
  /* doc,
  setDoc, */
  // eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js';
import { app } from './app.js';

// inicializa el firestore
const db = getFirestore(app);
// referenciando la coleeción segun su nombre
const docRef = collection(db, 'usuarios');
console.log(docRef);
// Obtener datos de la colección como array de objetos
getDocs(docRef).then((snapshot) => {
  const usuarios = [];
  snapshot.docs.forEach((docs) => {
    usuarios.push({ ...docs.data(), id: docs.id });
  });
  // eslint-disable-next-line no-console
  console.log(usuarios);
});

const dbOne = firebase.firestore();
export { dbOne };
