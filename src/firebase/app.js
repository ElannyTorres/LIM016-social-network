// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAnNJ2wh2QwS1SlbaDA1dpeWs_c_xE8_4o',
  authDomain: 'socialnetwork-94420.firebaseapp.com',
  projectId: 'socialnetwork-94420',
  storageBucket: 'socialnetwork-94420.appspot.com',
  messagingSenderId: '384092263819',
  appId: '1:384092263819:web:84d1c4bb47179537d58b8e',
};

export const app = initializeApp(firebaseConfig);