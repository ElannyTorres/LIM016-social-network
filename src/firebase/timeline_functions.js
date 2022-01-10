/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable prefer-template */
/* eslint-disable no-unused-vars */
/* /* /* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
import { userState } from '../views/singUp.js';

import {
  newPost,
  querySnapshot,
  editingText,
  updateDocu,
} from './firestore.js';

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
  const docRef = await querySnapshot();
  docRef.forEach((docs) => {
    // postContainer.innerHTML = '';
    postContainer.innerHTML += `
    <div class="postedOne">
    <div class="postedOneTitle">Publicado por ${docs.data().autor}</div>
    <div class="postedText">${docs.data().description}</div>
    <div class="postedBtns">
    <button class="likePosted"><i class="fas fa-heart"></i></button>
    <button class="editPosted" id="${docs.id}">
    <i class="fas fa-pencil-alt"></i>
    </button>
    <button class="deletePosted" id="${docs.id}">
    <i class="far fa-trash-alt"></i>
    </button>
    </div>
    </div> 
    `;
  });
  editBtn();
  deleteBtn();
};

export const savePost = async () => {
  const postCreater = document.querySelector('#postForm');
  const image = document.querySelector('#image').value;
  console.log(postCreater, image)

  postCreater.addEventListener('submit', async (e) => {
    e.preventDefault();

    const postText = postCreater.textDescription;
    if (postText.value === '') {
      alert('Mensaje vacío.\n Escriba algo para poder compartir.');
    } else {
      newPost(postText.value, uid, userName, image);
      console.log('Document written with ID: ', newPost.id);
      postCreater.reset();
      postText.focus();
      postContainer.innerHTML = '';
      loadPosts();
    }
  });
};

export const editBtn = async () => {
  const postContainer = document.querySelector('.posted');
  const btnsEdit = document.querySelectorAll('.editPosted');

  btnsEdit.forEach((btn) => {
    btn.addEventListener('click', async () => {
      const postToEdit = document.querySelector('post' + btn.id);
      // const postToEdit = document.querySelector(btn.id);
      console.log(postToEdit);
      const modalEdit = `
      <div class="postedOne postEdit hidden">
        <div class="postedText textToEdit">
          <textarea type="text" id="${btn.id}" class="newText"></textarea>
        </div>
        <div class="postedBtns">
          <button class="updateChange" id="${btn.id}">
            <i class="fas fa-paper-plane"></i>
          </button>
          <button class="cancelChange">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>
      `;
      postContainer.innerHTML += modalEdit;
      const textToEdit = document.querySelector('.newText');
      // console.log(textToEdit);
      // console.log('editing', btn.id);
      const idBtn = btn.id;
      const edText = await editingText(idBtn);
      const textForEdit = edText.data().description;
      console.log(textForEdit);
      textToEdit.value = textForEdit;
      updatePost();
      cancelUpdate();
    });
  });
};

export const updatePost = async () => {
  const postContainer = document.querySelector('.posted');
  const updateBtn = document.querySelector('.updateChange');
  const updateId = updateBtn.id;
  updateBtn.addEventListener('click', async () => {
    console.log('updating', updateId);
    const textUpdating = document.querySelector('.newText').value;
    // FireStore
    // eslint-disable-next-line no-unused-vars
    const updateDocus = await updateDocu(updateId, {
      description: textUpdating,
    });
    postContainer.innerHTML = '';
    loadPosts();
  });
};

const cancelUpdate = () => {
  const postContainer = document.querySelector('.posted');
  const cancelBtn = document.querySelector('.cancelChange');
  const postEdit = document.querySelector('.postEdit');
  cancelBtn.addEventListener('click', () => {
    postEdit.style.display = 'none';
    postContainer.innerHTML = '';
    loadPosts();
  });
};
