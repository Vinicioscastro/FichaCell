import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBt43l81yZISuNitv4tnH6ooLPElM1m84Y",
    authDomain: "fichacell-9b50d.firebaseapp.com",
    projectId: "fichacell-9b50d",
    storageBucket: "fichacell-9b50d.appspot.com",
    messagingSenderId: "107296317112",
    appId: "1:107296317112:web:0fc2c78f2ae5fb8dbdde4d"
  };

let app = firebase.initializeApp(firebaseConfig);
export const firestore = app.firestore();
export const auth = app.auth();
