import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { firebaseConfig } from '../settings/firebaseConfigFile';

import { backdropLog, backdropSign, signUpBtn, logInBtn, logOutItem, libraryItem } from '../../components/authentication-modal';
import { signUpBtnMobile, logInBtnMobile, logOutItemMobile, libraryItemMobile } from '../../components/authentication-mobile';


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
        backdropSign.classList.add('is-bck-hidden');
        backdropLog.classList.add('is-bck-hidden');

        signUpBtn.classList.add('is-hidden-nav');
        logInBtn.classList.add('is-hidden-nav');
        libraryItem.classList.remove('is-hidden-nav');
        logOutItem.classList.remove('is-hidden-nav');
    
    // Мобільна версія
       
        signUpBtnMobile.classList.add('is-mobile-hidden');
        logInBtnMobile.classList.add('is-mobile-hidden');
        libraryItemMobile.classList.remove('is-mobile-hidden');
        logOutItemMobile.classList.remove('is-mobile-hidden');

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

        // Мобільна версія
        
        signUpBtnMobile.classList.remove('is-mobile-hidden');
        logInBtnMobile.classList.remove('is-mobile-hidden');
        libraryItemMobile.classList.add('is-mobile-hidden');
        logOutItemMobile.classList.add('is-mobile-hidden');

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

