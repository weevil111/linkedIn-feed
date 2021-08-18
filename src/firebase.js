import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAUUKpXWWlVHto0UtdpnR45hEJSczAqNUg",
  authDomain: "linkedin-clone-22825.firebaseapp.com",
  projectId: "linkedin-clone-22825",
  storageBucket: "linkedin-clone-22825.appspot.com",
  messagingSenderId: "209937414024",
  appId: "1:209937414024:web:efe0c86de5af9c86da6c3d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};