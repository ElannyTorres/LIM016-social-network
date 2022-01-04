/* // Initialize Cloud Firestore through Firebase
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js';
import { app } from './app.js';
const db = getFirestore(app);
/* export const sharePost = async (view, idUser, post) => {
  const postCollection = collection(db, view);
  const addPost = await addDoc(postCollection, {
    usuarioID: idUser,
    publicacion: post,
    timestamp: serverTimestamp(),
  });
  return functionAdd;
}; */

/* const savePost = (description) => {
  db.collection('posts').doc().set({
    description: description,
  });
}; */

/* try {const docRef = await addDoc(collection(db, 'posts'), {
  description: 'description',
});
console.log('Document written with ID: ', docRef.id);
} catch (e) {
  console.error('Error adding document: ', e);
} */

/* const querySnapshot = await getDocs(collection(db, 'users'));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});
 */
// Allow read/write access on all documents to any user signed in to the application
/* service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
export { docRef }; */
