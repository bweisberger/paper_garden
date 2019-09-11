import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAJZS4pykkE-u1hHMAK0vxFLNd8HsZ3jgw",
    authDomain: "paper-garden-cfa4e.firebaseapp.com",
    // databaseURL: "https://paper-garden-cfa4e.firebaseio.com",
    projectId: "paper-garden-cfa4e",
    storageBucket: "paper-garden-cfa4e.appspot.com",
    messagingSenderId: "1063086134758",
    appId: "1:1063086134758:web:24f6cb9c0ff1bd929bb227"
  };
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app)

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default db;