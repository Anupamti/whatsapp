import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHDrYXrM87C7kxryEPZ-NsbFzFfSqY9A4",
  authDomain: "whatsappclone-52319.firebaseapp.com",
  databaseURL: "https://whatsappclone-52319.firebaseio.com",
  projectId: "whatsappclone-52319",
  storageBucket: "whatsappclone-52319.appspot.com",
  messagingSenderId: "214663226873",
  appId: "1:214663226873:web:f7e1499573b94d78a10928"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
