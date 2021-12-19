import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js';
import { app } from './app.js';

const db = getFirestore(app);

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

      const querySnapshot = await getDocs(collection(db, 'posts'));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        postContainer.innerHTML += `
        <div class="postedOne">
          <div class="postedOneTitle">Publicado por ${doc.id}</div>
          <div class="postedText">${doc.data().description}</div>
          <div class="postedBtns">
            <button class="likePosted">Like</button>
            <button class="sharePosted">Share</button>
            <button class="editPosted">Edit</button>
            <button class="deletePosted">Delete</button>
          </div>
        </div>
      `;
      });
    }
  });

  /*
  for (var i = 0; i < btnsDelete.length; i++) {
    btnsDelete[i].addEventListener('click', async () => {
      console.log('deleting');
    });
  } */
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
          <button class="likePosted">Like</button>
          <button class="sharePosted">Share</button>
          <button class="editPosted">Edit</button>
          <button class="deletePosted">Delete</button>
        </div>
      </div>
    `;
  });
};

export const deleteBtn = async () => {
  const btnsDelete = document.querySelectorAll('.deletePosted');
  console.log(btnsDelete);
  /* btnsDelete.addEventListener('click', () => {
    console.log('deleting');
  });
  #root div section.postContainer div.posted div.postedOne button
  */
};
