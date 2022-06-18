import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { firebaseConfig } from '../settings/firebaseConfigFile';

import { backdrop, signUpBtn, logInBtn, logOutItem, libraryItem } from '../../components/authentication-modal';


const app = initializeApp(firebaseConfig);
const auth = getAuth();

function createUser(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
};

function signInUser(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log(user)
        backdrop.classList.add('is-bck-hidden');
        signUpBtn.classList.add('is-hidden-nav');
        logInBtn.classList.add('is-hidden-nav');
        libraryItem.classList.remove('is-hidden-nav');
        logOutItem.classList.remove('is-hidden-nav');
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
    } else {
        console.log(null)
        signUpBtn.classList.remove('is-hidden-nav');
        logInBtn.classList.remove('is-hidden-nav');
        libraryItem.classList.add('is-hidden-nav');
        logOutItem.classList.add('is-hidden-nav');
    // User is signed out
    // ...
  }
});

function exitUser() {
signOut(auth)
.then(() => { 

})
    .catch(error => { 

    });
};



export { createUser, signInUser, exitUser};

