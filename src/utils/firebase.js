import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCRMsRyNf95TL-KVmMiff91eQD1BfXpD6w",
  authDomain: "clone-2d55b.firebaseapp.com",
  projectId: "clone-2d55b",
  storageBucket: "clone-2d55b.appspot.com",
  messagingSenderId: "988006704279",
  appId: "1:988006704279:web:d3d9b0000b33c7a0d0f5d2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
