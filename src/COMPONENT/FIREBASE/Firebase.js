import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage, ref } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCg5t-Q92qaWq3mwsfCyYjc7YBlFGPpcg4",
    authDomain: "disneyplus-clone-f097a.firebaseapp.com",
    projectId: "disneyplus-clone-f097a",
    storageBucket: "disneyplus-clone-f097a.appspot.com",
    messagingSenderId: "455714835444",
    appId: "1:455714835444:web:bece4ae543fd08809647a1",
    measurementId: "G-V99B9FTDLM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const fb = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = getStorage();
const storageRef = ref(storage);

export {auth, provider, storageRef};

export default fb;

