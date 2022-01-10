/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
import {
  getFirestore,
  // addDoc,
  doc,
  setDoc,
  collection,
  addDoc,
  // query,
  // where,
  // getDocs,
  // getDatabase,
  // ref,
  // child,
  // get,
  // onValue,
  // getDoc,
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
export const dataUser = async (id, Username, Correo, Name) => {
  const users = doc(db, 'usuarios', id);
  await setDoc(users, {
    name: Username,
    lastNames: Name,
    correo: Correo,
    idUser: id,
  });
};

export const newPost = async (textPost, uid, userName, url) => {
  const createPosts = await addDoc(collection(db, 'posts'), {
    description: textPost,
    user: uid,
    autor: userName,
    image: url,
  });
};

/*
// unir dos colecciones
export const collectionDate = async () => {
  const q = query(collection(db, "posts"), where("user", "==", true));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
}; */

/*
const baseDatos = getDatabase();
const starCountRef = ref(baseDatos, 'posts/' + postId + '/usuarios');
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  updateStarCount(postElement, data);
});
*/
/*
const dbRef = ref(getDatabase());
get((dbRef, `usuarios/${name}`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
}); */
