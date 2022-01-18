/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable prefer-template */
/* eslint-disable no-unused-vars */
/* /* /* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
import { userState } from './auth_functions.js';
import { showModal } from '../views/showModal.js';

import {
  newPost,
  querySnapshot,
  editingText,
  updateDocu,
  deletePost,
  searchID,
} from './firestore.js';

let uid = '';
let userName = '';

userState((user) => {
  if (user) {
    console.log(user);
    uid = user.uid;
    userName = user.displayName;
  }
});

export const deleteBtn = async () => {
  // const postContainer = document.querySelector('.posted');
  const btnsDelete = document.querySelectorAll('.deletePosted');
  btnsDelete.forEach((btn) => {
    btn.addEventListener('click', async () => {
      showModal('Estás a punto de eliminar el post. <br> ¿Estás seguro?');
      const agreeBtn = document.querySelector('.agreeBtn');
      console.log(agreeBtn);
      const postN = '#postN' + btn.id;
      console.log(postN);
      agreeBtn.addEventListener('click', async () => {
        const postToDelete = document.querySelector(postN);
        console.log(postToDelete);
        postToDelete.innerHTML = '';
        deletePost(btn.id);
      });
    });
  });
};

export const loadPosts = async () => {
  // Función con parámetro
  const profileDataG = JSON.parse(sessionStorage.userData);
  const newId = profileDataG.localId;
  const ID = await searchID(newId); // Firebase
  const user = ID.data().idUser;
  const iD = sessionStorage.userID;
  console.log(iD);
  console.log(user);
  const postContainer = document.querySelector('.posted');
  const docRef = await querySnapshot();
  docRef.forEach((docs) => {
    if (user !== undefined || iD !== undefined) {
      if ((user || iD) === docs.data().user) {
        postContainer.innerHTML += `
    <div class="postedOne" id="postN${docs.id}">
    <section id="postSec${docs.id}">
      <div class="postedOneTitle">
        <p>Publicado por ${docs.data().autor}</p>
      </div>
      <div class="postedText">
        <p>${docs.data().description}</p>
      </div>
      <div class="postedBtns">
        <button class="likePosted" id="${docs.id}">
          <i class="fas fa-heart"></i>
          <p class="likeCount">
            ${docs.data().like.length}
          </p>
        </button>
        <button class="editPosted" id="${docs.id}">
          <i class="fas fa-pencil-alt"></i>
        </button>
        <button class="deletePosted" id="${docs.id}">
          <i class="far fa-trash-alt"></i>
        </button>
      </div>
      </section>
    </div>
    `;
      } else {
        postContainer.innerHTML += `
      <div class="postedOne" id="postN${docs.id}">
      <section id="postSec${docs.id}">
        <div class="postedOneTitle">
          <p>Publicado por ${docs.data().autor}</p>
        </div>
        <div class="postedText">
          <p>${docs.data().description}</p>
        </div>
        <div class="postedBtns">
          <button class="likePosted" id="${docs.id}">
            <i class="fas fa-heart"></i>
            <p class="likeCount">
              ${docs.data().like.length}
            </p>
          </button>
        </div>
        </section>
      </div>
      `;
      }
    }
  });
  editBtn();
  deleteBtn();
  likeFunction();
};

export const savePost = async () => {
  const postContainer = document.querySelector('.posted');
  const postCreater = document.querySelector('#postForm');
  postCreater.addEventListener('submit', async (e) => {
    e.preventDefault();
    const postText = postCreater.textDescription;
    if (postText.value === '') {
      showModal('Mensaje vacío. <br> Escriba algo para poder compartir.');
    } else {
      // uid del autor
      newPost(postText.value, uid, userName).then(async (elemento) => {
        const postID = elemento.id;
        const updatePosted = await editingText(postID).then((data) =>
          data.data()
        );
        console.log(updatePosted);
        const newContainer = document.createElement('div');
        newContainer.classList.add('postedOne');
        newContainer.setAttribute('id', 'postN' + postID);
        newContainer.innerHTML = `
        <section id="postSec${postID}">
          <div class="postedOneTitle">
            <p>Publicado por ${updatePosted.autor}</p>
          </div>
          <div class="postedText">
            <p>${updatePosted.description}</p>
          </div>
          <div class="postedBtns">
            <button class="likePosted">
              <i class="fas fa-heart"></i>
              <span>
                <p class="likeCount">
                  ${updatePosted.like.length}
                </p>
              </span>
            </button>
            <button class="editPosted" id="${postID}">
              <i class="fas fa-pencil-alt"></i>
            </button>
            <button class="deletePosted" id="${postID}">
              <i class="far fa-trash-alt"></i>
            </button>
          </div>
          </section>
        `;
        postContainer.prepend(newContainer);
        console.log(postContainer);
      });
      postCreater.reset();
      postText.focus();
    }
  });
};

export const editBtn = async () => {
  // const postContainer = document.querySelector('.posted');
  const btnsEdit = document.querySelectorAll('.editPosted');
  btnsEdit.forEach((btn) => {
    btn.addEventListener('click', async () => {
      const postName = '#postN' + btn.id;
      const secName = '#postSec' + btn.id;
      const postToEdit = document.querySelector(postName);
      const secNameEdit = document.querySelector(secName);
      console.log(secNameEdit);
      secNameEdit.style.display = 'hidden';
      const modalEdit = `
      <div class="postedOne postEdit">
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
      postToEdit.innerHTML += modalEdit;
      const textToEdit = document.querySelector('.newText');
      const idBtn = btn.id;
      const edText = await editingText(idBtn);
      const textForEdit = edText.data().description;
      textToEdit.value = textForEdit;
      updatePost();
      cancelUpdate();
    });
  });
};

const updatePost = async () => {
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
  const cancelBtn = document.querySelector('.cancelChange');
  const postEdit = document.querySelector('.postEdit');
  cancelBtn.addEventListener('click', () => {
    postEdit.style.display = 'none';
  });
};

const likeFunction = () => {
  const likeBtn = document.querySelectorAll('.likePosted'); // Dom virtual
  likeBtn.forEach((e) => {
    e.addEventListener('click', async () => {
      const profileDataG = JSON.parse(sessionStorage.userData);
      const newId = profileDataG.localId;
      const ID = await searchID(newId); // Firebase
      const user = ID.data().idUser;
      const postID = e.id;
      const postInfo = await editingText(postID);
      const liked = postInfo.data().like;
      const iD = sessionStorage.userID;
      console.log('click en like');

      const counter = e.querySelector('.likeCount'); // DOm virtual

      if (iD === undefined) {
        console.log('gmail');
        if (liked.includes(user)) {
          console.log('Si ha estado');
          updateDocu(postID, {
            like: liked.filter((item) => item !== user),
          });
          counter.textContent = liked.length - 1;
        } else {
          console.log('No ha estado');
          updateDocu(postID, {
            like: [...liked, user],
          });
          counter.textContent = liked.length + 1;
        }
      } else {
        console.log('correo normal');
        if (liked.includes(iD)) {
          console.log('Si ha estado');
          updateDocu(postID, {
            like: liked.filter((item) => item !== iD),
          });
          counter.textContent = liked.length - 1;
        } else {
          console.log('No ha estado');
          updateDocu(postID, {
            like: [...liked, iD],
          });
          counter.textContent = liked.length + 1;
        }
      }
    });
  });
};
