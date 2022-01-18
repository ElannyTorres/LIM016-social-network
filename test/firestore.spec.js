/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable no-console */
// eslint-disable-next-line import/no-unresolved
import {
  newPost,
  deletePost,
  updateDocu,
  editingText,
  // querySnapshot,
  dataUser,
  searchID,
} from '../src/firebase/firestore';

import {
  doc,
  deleteDoc,
  addDoc,
  updateDoc,
  getDoc,
  // getDocs,
  setDoc,
} from '../src/firebase/app.js';

jest.mock('../src/firebase/app.js');

describe('newPost', () => {
  it('debería guardar un post', async () => {
    await newPost('Nuevo', '1305', 'Luz');
    expect(typeof addDoc.mock.calls[0][1]).toBe('object');
  });
});

describe('deletePost', () => {
  it('debería eliminar un post específico', async () => {
    await deletePost('1305');
    expect(doc.mock.calls[0][1]).toBe('posts');
    expect(doc.mock.calls[0][2]).toBe('1305');
    expect(typeof deleteDoc.mock.calls[0][0]).toBe('object');
  });
});

describe('updateDoc', () => {
  it('actualiza un post determinado', async () => {
    await updateDocu('1305', { description: 'PostActualizado' });
    expect(doc.mock.calls[0][1]).toBe('posts');
    expect(doc.mock.calls[0][2]).toBe('1305');
    expect(typeof updateDoc.mock.calls[0][0]).toBe('object');
  });
});

describe('editingText', () => {
  it('buscar un determinado post', async () => {
    await editingText('1305');
    expect(doc.mock.calls[0][1]).toBe('posts');
    expect(doc.mock.calls[0][2]).toBe('1305');
    expect(typeof getDoc.mock.calls[0][0]).toBe('object');
  });
});

/* describe('querySnapshot', () => {
  it('cargar una coleción del db', async () => {
    await querySnapshot();
    expect(typeof getDocs.mock.calls[0][0]).toBe('object');
  });
}); */

describe('dataUser', () => {
  it('crea una documento con la información del usuario', async () => {
    await dataUser('1305', 'Luz', 'torres.elanny@gmail.com', 'Torres');
    expect(setDoc.mock.calls[0][1].name).toBe('Luz');
    expect(setDoc.mock.calls[0][1].lastNames).toBe('Torres');
    expect(setDoc.mock.calls[0][1].correo).toBe('torres.elanny@gmail.com');
    expect(setDoc.mock.calls[0][1].idUser).toBe('1305');
    expect(typeof setDoc.mock.calls[0][0]).toBe('object');
  });
});

describe('searchID', () => {
  it('buscar un determinado id', async () => {
    await searchID('1305');
    expect(doc.mock.calls[0][2]).toBe('1305');
    console.log(getDoc.mock.calls[0]);
    expect(typeof getDoc.mock.calls[0][0]).toBe('object');
  });
});
