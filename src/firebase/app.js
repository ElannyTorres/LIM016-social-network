
//import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-SERVICE.js'
/*import { initializeApp } from 'firebase/app';*/
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnNJ2wh2QwS1SlbaDA1dpeWs_c_xE8_4o",
  authDomain: "socialnetwork-94420.firebaseapp.com",
  projectId: "socialnetwork-94420",
  storageBucket: "socialnetwork-94420.appspot.com",
  messagingSenderId: "384092263819",
  appId: "1:384092263819:web:84d1c4bb47179537d58b8e"
};

export const app = initializeApp(firebaseConfig);



/*
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
  import { getAuth, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseApp = initializeApp({
    apiKey: "AIzaSyAnNJ2wh2QwS1SlbaDA1dpeWs_c_xE8_4o",
    authDomain: "socialnetwork-94420.firebaseapp.com",
    projectId: "socialnetwork-94420",
    storageBucket: "socialnetwork-94420.appspot.com",
    messagingSenderId: "384092263819",
    appId: "1:384092263819:web:84d1c4bb47179537d58b8e"
  });
  // Initialize Firebase
  const auth = getAuth(firebaseApp);

  onAuthStateChanged(auth, user => {
    if (user != null) {
      console.log('longged in!')
    } else {
      console.log('No user')
    }
  })
*/

/*
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyAkzw6x3_y_uWtryQMQIMOg7IAhcWx3AJE",
    authDomain: "usuarios-da065.firebaseapp.com",
    projectId: "usuarios-da065",
    storageBucket: "usuarios-da065.appspot.com",
    messagingSenderId: "570280120227",
    appId: "1:570280120227:web:9e896e58149c9f60b45416",
    measurementId: "G-P5CTYENSHV"
});

const auth = getAuth(firebaseApp);
//const app = initializeApp(firebaseApp);
const db = getFirestore(firebaseApp);
db.collection('todos').getDocs();
const todosCol = collection(db, 'todos');
const snapshot = await getDocs(todosCol);

//detect auth state
onAuthStateChanged(auth, user =>{
    if (user !== null) {
        console.log('logged in!')
    } else {
        console.log('No user')
    }
})

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

*/