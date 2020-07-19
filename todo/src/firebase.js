import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBBwbk8RVERr1r1z6IvZlKwuf5Sys11FdQ",
    authDomain: "react-todo-7f113.firebaseapp.com",
    databaseURL: "https://react-todo-7f113.firebaseio.com",
    projectId: "react-todo-7f113",
    storageBucket: "react-todo-7f113.appspot.com",
    messagingSenderId: "225376590775",
    appId: "1:225376590775:web:9827aa42263e1cfd01e632"
});

export { firebaseConfig as firebase };