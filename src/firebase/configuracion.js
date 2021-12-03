
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


/*
// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}*/