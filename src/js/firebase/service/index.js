import { initializeApp } from 'firebase/app';

import { getDatabase, ref, set, get, remove } from 'firebase/database';
import { Notify } from 'notiflix';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

import { firebaseConfig } from '../settings/firebaseConfigFile';

import {
  backdropLog,
  backdropSign,
  signUpBtn,
  logInBtn,
  logOutItem,
  libraryItem,
} from '../../components/authentication-modal';
import {
  signUpBtnMobile,
  logInBtnMobile,
  logOutItemMobile,
  libraryItemMobile,
} from '../../components/authentication-mobile';
import { getUserId } from '../add-to-database';
import { notifyOptions } from '../../service/notify-options';

let userId = null;

const app = initializeApp(firebaseConfig);
const auth = getAuth();

const db = getDatabase();

function createUser(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      // ...
      Notify.success('You have successfully signed up', notifyOptions);
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      Notify.failure('Failed to sign up');
    });
}

function signInUser(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      // ...
      Notify.success('You have successfully logged in', notifyOptions);
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Notify.failure('Invalid Log In credentials provided', notifyOptions);
    });
}

onAuthStateChanged(auth, user => {
  if (user) {
    // console.log(user)
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
    userId = user.uid;
    getUserId(userId);
    // ...
  } else {
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
    getUserId(null);
    userId = null;
  }
});

function exitUser() {
  signOut(auth)
    .then(() => {
      window.location.href = './index.html';
    })
    .catch(error => {});
}

// Надсилання даних з Watched та Queue
const watchedWay = 'dataWatched';
const queueWay = 'dataQueue';

function sendDataToFirebase(data, way) {
  const movieId = data.movieData.id.toString();
  return set(ref(db, `${userId}/${way}/${movieId}`), data);
}

// Отримання даних з Watched та Queue

function getDataFromFirebase(way) {
  return get(ref(db, `${userId}/${way}`));
}

function parseDataBaseResponse(snapshot) {
  if (!snapshot.exists()) {
    throw new Error('Data base snapshot is empty');
  }
  return Promise.resolve(Object.values(snapshot.val()).map(el => el.movieData));
}

// Вилучення даних з Watchedd та Queue
function removeMovieFromFirebase(way, filmId) {
  return remove(ref(db, `${userId}/${way}/${filmId}`));
}

export {
  createUser,
  signInUser,
  exitUser,
  sendDataToFirebase,
  getDataFromFirebase,
  watchedWay,
  queueWay,
  parseDataBaseResponse,
  auth,
  onAuthStateChanged,
  removeMovieFromFirebase,
};
