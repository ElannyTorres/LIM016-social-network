// eslint-disable-next-line import/no-unresolved
import { newPost, deletePost } from '../src/firebase/firestore';

import { doc, deleteDoc, addDoc } from '../src/firebase/app.js';

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
