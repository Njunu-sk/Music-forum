/* eslint-disable import/prefer-default-export */

import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAq_D9O9HfhKMdS1Q9LLgIdSVw6Y9krRtA",
  authDomain: "music-forum-bb03d.firebaseapp.com",
  projectId: "music-forum-bb03d",
  storageBucket: "music-forum-bb03d.appspot.com",
  appId: "1:25730402461:web:3e25ceb18bd8a72d04ec74",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

const songsCollection = firebase.firestore().collection("songs");
const commentsCollection = firebase.firestore().collection("comments");

export { storage, songsCollection, commentsCollection };
