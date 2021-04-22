 import firebase from 'firebase';
 import "firebase/firestore";
 import "firebase/auth";



   var firebaseConfig = {
    apiKey: "AIzaSyCbkqE7aVMp9LVQFAjW6L6gkC3xpizBv-o",
    authDomain: "recipelogin-cd3b8.firebaseapp.com",
    projectId: "recipelogin-cd3b8",
    storageBucket: "recipelogin-cd3b8.appspot.com",
    messagingSenderId: "74325436835",
    appId: "1:74325436835:web:c223b3f87f9a62d2311216"
  };
    const fire = firebase.initializeApp(firebaseConfig);
  export const firestore = firebase.firestore();
   const auth = firebase.auth();
   export {auth};


   const googleProvider = new firebase.auth.GoogleAuthProvider()

export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider).then((res) => {
    console.log(res.user)
  }).catch((error) => {
    console.log(error.message)
  })
}



  export default fire;

