/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
import {
  db,
  doc,
  setDoc,
  collection,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
} from './app.js';

export const querySnapshot = async () => {
  const getDocus = await collection(db, 'posts');
  return getDocs(getDocus);
};

/** Creaccion de usuario con correo y contraseña */
export const dataUser = async (id, Username, Correo, Name) => {
  const users = await doc(db, 'usuarios', id);
  return setDoc(users, {
    name: Username,
    lastNames: Name,
    correo: Correo,
    idUser: id,
  });
};

/** creacion de usuario */
/* export const userGoogle = async (id, result) => {
  const refId = await doc(db, 'usuarios', id);
  return setDoc(refId, {
    name: result.displayName,
    correo: result.email,
    uidUser: result.uid,
  });
}; */

export const newPost = async (textPost, uid, userName) => {
  // eslint-disable-next-line no-unused-vars
  const createPosts = await collection(db, 'posts');
  return addDoc(createPosts, {
    description: textPost,
    user: uid,
    autor: userName,
    like: [],
  });
};

export const deletePost = async (id) => {
  const deleted = await doc(db, 'posts', id);
  return deleteDoc(deleted);
};

export const editingText = async (id) => {
  const refEdit = await doc(db, 'posts', id);
  return getDoc(refEdit);
};

export const searchID = async (id) => {
  const refID = await doc(db, 'usuarios', id);
  return getDoc(refID);
};

export const updateDocu = async (id, docu) => {
  const docToUpdate = await doc(db, 'posts', id);
  return updateDoc(docToUpdate, docu);
};

// const updateText = await updateDoc(doc, {
//   description: textUpdating.value,
// });
