import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAr7UuGd42aH6TlSEE_DaBiS6S00PBO51w',
  authDomain: 'slack-2-react-clone.firebaseapp.com',
  projectId: 'slack-2-react-clone',
  storageBucket: 'slack-2-react-clone.appspot.com',
  messagingSenderId: '409323433999',
  appId: '1:409323433999:web:dac83fec695228dabb737a',
};

// this starts the firebase server and connects the App with Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
// adding google auth
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
