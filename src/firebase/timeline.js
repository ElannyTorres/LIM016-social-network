import { dbOne } from '../firebase/firestore.js';

window.onload = function () {
  const postCreater = document.querySelector(
    '#root div section.postContainer form#postForm'
  );
  postCreater.addEventListener('submit', async (e) => {
    e.preventDefault();
    const description = postCreater['textDescription'].value;
    console.log(description);

    const olderPosts = await dbOne.collection['posts'].doc().set({
      description,
    });
    console.log(olderPosts);
  });
};
