/* //import firebase from "firebase/app";
//import "firebase/auth";
//import { } from 'firebase/auth';

export const registrar = () => {
    document.getElementById("button-login").addEventListener("click", function () {
      console.log("click")
      let email = document.getElementById('inputEmail').value;
      let password = document.getElementById('inputPassword').value;
console.log(email)
console.log(password)

      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
    })
}; */
