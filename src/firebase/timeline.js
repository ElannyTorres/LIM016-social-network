/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  deleteDoc,
  updateDoc,
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
        <div class="col-md-3 d-flex justify-content-center">
                <img src="${docs.data().url}" class="img" alt="...">
              </div>
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
      <div class="postedOne postEdit">
        <div class="postedOneTitle postEditTitle">Publicado por ${btn.id} </div>
        <div class="postedText textToEdit">
          <textarea type="text" id="${btn.id}" class="newText"></textarea>
        </div>
        <div class="postedBtns">
          <button class="updateChange">
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
      const editingText = await getDoc(doc(db, 'posts', btn.id));
      const textForEdit = editingText.data().description;
      // console.log(textForEdit);
      textToEdit.value = textForEdit;
      updatePost();
      cancelUpdate();
    });
  });
};

export const updatePost = async () => {
  const updateBtn = document.querySelector('.updateChange');
  // console.log(updateBtn);
  updateBtn.addEventListener('click', async (btn) => {
    console.log('updating', btn.id);
    /* const textUpdating = document.querySelector('.newText');
    const textToUpdate = doc(db, 'posts', btn.id);
    const updateText = await updateDoc(doc, {
      description: textUpdating.value,
    }); */
  });
};

export const cancelUpdate = async () => {
  const cancelBtn = document.getElementsByClassName('cancelChange');
  cancelBtn.addEventListener('click', async (btn) => {
    console.log('canceling', btn);
  });
};
