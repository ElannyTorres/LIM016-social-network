/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  deleteDoc,
} from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js';

import {
  app,
} from './app.js';

import {
  userState,
} from '../views/singUp.js';

import {
  newPost,
} from './firestore.js';

const db = getFirestore(app);

let uid = '';
let userName = '';

userState((user) => {
  if (user) {
    uid = user.uid;
    userName = user.displayName;
    console.log(uid);
    console.log(user);
  }
});

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
  querySnapshot.forEach((docs) => {
    
    console.log(docs.data());
    
    postContainer.innerHTML += `
      <div class="postedOne">
        <div class="postedOneTitle">Publicado por ${docs.data().autor}</div>
        <div class="postedText">${docs.data().description}</div>
        <div class="postedBtns">
          <button class="likePosted"><i class="fas fa-heart"></i></button>
          <button class="editPosted"><i class="fas fa-pencil-alt"></i></button>
          <button class="deletePosted" id="${docs.id}">
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
      alert('Mensaje vacío.\n Escriba algo para poder compartir.');
    } else {
      newPost(postText.value, uid, userName);
      console.log('Document written with ID: ', newPost.id);
      console.log(postText.value);
      console.log(newPost);

      postCreater.reset();
      postText.focus();

      postContainer.innerHTML = '';

      loadPosts();
      deleteBtn();
    }
  });
};
