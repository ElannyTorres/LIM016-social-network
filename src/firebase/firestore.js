/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
import {
  // app,
  db,
  // getFirestore,
  // addDoc,
  doc,
  setDoc,
  collection,
  addDoc,
  // query,
  // where,
  getDocs,
  // getDatabase,
  // ref,
  // child,
  // get,
  // onValue,
  getDoc,
  updateDoc,
} from './app.js';

export const querySnapshot = async () => {
  const getDocus = await collection(db, 'posts');
  return getDocs(getDocus);
};

export const dataUser = async (id, Username, Correo, Name) => {
  const users = await doc(db, 'usuarios', id);
  return setDoc(users, {
    name: Username,
    lastNames: Name,
    correo: Correo,
    idUser: id,
  });
};

export const newPost = async (textPost, uid, userName) => {
  // eslint-disable-next-line no-unused-vars
  const createPosts = await collection(db, 'posts');
  return addDoc(createPosts, {
    description: textPost,
    user: uid,
    autor: userName,
  });
};

export const editingText = async (id) => {
  const refEdit = await doc(db, 'posts', id);
  return getDoc(refEdit);
};

export const updateDocu = async (id, docu) => {
  const docToUpdate = await doc(db, 'posts', id);
  return updateDoc(docToUpdate, docu);
};

// const updateText = await updateDoc(doc, {
//   description: textUpdating.value,
// });
