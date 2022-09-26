import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAYYTMJ5f542MM3RxNLz0hsXVY0fihyQl4",
  authDomain: "disney-plus-unofficial.firebaseapp.com",
  projectId: "disney-plus-unofficial",
  storageBucket: "disney-plus-unofficial.appspot.com",
  messagingSenderId: "306515018549",
  appId: "1:306515018549:web:d15552e0ca086ed2af427c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
