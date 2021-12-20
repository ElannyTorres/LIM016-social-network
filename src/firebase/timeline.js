/* eslint-disable no-console */
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
} from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js';
import { app } from './app.js';

const db = getFirestore(app);

export const deleteBtn = async () => {
  const btnsDelete = document.querySelectorAll('.deletePosted');
  const postContainer = document.querySelector('.posted');

  btnsDelete.forEach((btn) => {
    btn.addEventListener('click', async () => {
      console.log('deleting', btn.id);
      const deleted = await deleteDoc(doc(db, 'posts', btn.id));

      postContainer.innerHTML = '';

      loadPosts();
      deleteBtn();
    });
  });
};

export const loadPosts = async () => {
  const postContainer = document.querySelector('.posted');
  const querySnapshot = await getDocs(collection(db, 'posts'));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    postContainer.innerHTML += `
      <div class="postedOne">
        <div class="postedOneTitle">Publicado por ${doc.id}</div>
        <div class="postedText">${doc.data().description}</div>
        <div class="postedBtns">
          <button class="likePosted"><i class="fas fa-heart"></i></button>
          <button class="editPosted"><i class="fas fa-pencil-alt"></i></button>
          <button class="deletePosted" id="${doc.id}">
          <i class="far fa-trash-alt"></i>
          </button>
        </div>
      </div>
    `;
  });
  deleteBtn();
};

export const savePost = async () => {
  const postCreater = document.querySelector('#postForm');
  const postContainer = document.querySelector('.posted');

  postCreater.addEventListener('submit', async (e) => {
    e.preventDefault();

    const postText = postCreater.textDescription;
    if (postText.value === '') {
      /* console.log('input vacío'); */
      alert('Mensaje vacío.\n Escriba algo para poder compartir.');
    } else {
      const newPost = await addDoc(collection(db, 'posts'), {
        description: `${postText.value}`,
      });
      console.log('Document written with ID: ', newPost.id);
      console.log(postText.value);

      postCreater.reset();
      postText.focus();

      postContainer.innerHTML = '';

      loadPosts();
      deleteBtn();
    }
  });
};
