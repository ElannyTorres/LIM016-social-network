import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  deleteDoc,
  updateDoc,
} from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js';
import { app } from './app.js';

const db = getFirestore(app);

export const loadPosts = async () => {
  const postContainer = document.querySelector('.posted');
  const querySnapshot = await getDocs(collection(db, 'posts'));
  postContainer.innerHTML = '';
  querySnapshot.forEach((doc) => {
    // console.log(doc);
    // console.log(`${doc.id} => ${doc.data()}`);
    postContainer.innerHTML += `
      <div class="postedOne" id="post${doc.id}">
        <div class="postedOneTitle">Publicado por ${doc.id}</div>
        <div class="postedText">${doc.data().description}</div>
        <div class="postedBtns">
          <button class="likePosted" id="${doc.id}">
            <i class="fas fa-heart"></i>
          </button>
          <button class="editPosted" id="${doc.id}">
            <i class="fas fa-pencil-alt"></i>
          </button>
          <button class="deletePosted" id="${doc.id}">
          <i class="far fa-trash-alt"></i>
          </button>
        </div>
      </div>
    `;
  });
  editBtn();
  deleteBtn();
};

export const deleteBtn = async () => {
  const btnsDelete = document.querySelectorAll('.deletePosted');

  btnsDelete.forEach((btn) => {
    btn.addEventListener('click', async () => {
      /* console.log('deleting', btn.id); */
      const deleted = await deleteDoc(doc(db, 'posts', btn.id));
      const postToEliminate = document.getElementById('post' + btn.id);
      console.log(postToEliminate);
      postToEliminate.innerHTML = '';
    });
  });
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

      loadPosts();
    }
  });
};

export const editBtn = async () => {
  const postContainer = document.querySelector('.posted');
  const btnsEdit = document.querySelectorAll('.editPosted');

  btnsEdit.forEach((btn) => {
    btn.addEventListener('click', async () => {
      const postToEdit = document.querySelector(btn.id);
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
