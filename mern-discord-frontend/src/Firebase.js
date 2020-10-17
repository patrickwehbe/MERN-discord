import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBNRgPV_TOaCsejLySduIGnlsiJZbVzzEM",
  authDomain: "discord-clone-5aebf.firebaseapp.com",
  databaseURL: "https://discord-clone-5aebf.firebaseio.com",
  projectId: "discord-clone-5aebf",
  storageBucket: "discord-clone-5aebf.appspot.com",
  messagingSenderId: "489519371965",
  appId: "1:489519371965:web:c13fb3d719ccbf641b49d4",
  measurementId: "G-C2P7W35XBD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
