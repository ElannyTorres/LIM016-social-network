/* eslint-disable comma-dangle */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
export const db = {};
export const collection = jest.fn((db, posts) => Promise.resolve());
export const addDoc = jest.fn((document, values) =>
  Promise.resolve({
    values,
  })
);
export const updateDoc = jest.fn(() => Promise.resolve({}));
export const doc = jest.fn((db, posts, id) => Promise.resolve({}));
export const getDoc = jest.fn(() => Promise.resolve());
export const query = jest.fn(() => Promise.resolve());
export const deleteDoc = jest.fn(() => Promise.resolve());
export const auth = {};
