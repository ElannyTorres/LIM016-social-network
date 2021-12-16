import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js';
import { app } from './app.js';

const db = getFirestore(app);

window.onload = function () {
  const postCreater = document.querySelector(
    '#root div section.postContainer form#postForm'
  );
  console.log(postCreater);
  const postContainer = document.querySelector('.posted');
  console.log(postContainer);

  postCreater.addEventListener('submit', async (e) => {
    e.preventDefault();

    const postText = postCreater['textDescription'];
    const newPost = await addDoc(collection(db, 'posts'), {
      description: `${postText.value}`,
    });
    console.log('Document written with ID: ', newPost.id);
    console.log(postText.value);

    postCreater.reset();
    postText.focus();

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
        </div>
      </div>
    `;
    });
  });
};
