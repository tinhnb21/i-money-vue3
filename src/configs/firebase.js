import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArj0qxf8TGWLyqJ_9zRN2RgLZeKKBDwCo",
  authDomain: "imoney-88332.firebaseapp.com",
  projectId: "imoney-88332",
  storageBucket: "imoney-88332.appspot.com",
  messagingSenderId: "213068511637",
  appId: "1:213068511637:web:5187783265960828915e9c",
  measurementId: "G-TSJY2PSXP4",
};

firebase.initializeApp(firebaseConfig);
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectStorage, projectFirestore, timestamp };
