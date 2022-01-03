/* eslint-disable import/prefer-default-export */

import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "api_key",
  authDomain: "domain",
  projectId: "project_id",
  storageBucket: "bucket",
  appId: "app_id",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

const songsCollection = firebase.firestore().collection("songs");
const commentsCollection = firebase.firestore().collection("comments");

export { storage, songsCollection, commentsCollection };
