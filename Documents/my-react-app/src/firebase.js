import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyCDGoR3jy7r47BJKE1iC38LDXZgcu6_0QM",
  authDomain: "my-react-app-55dd7.firebaseapp.com",
  projectId: "my-react-app-55dd7",
  storageBucket: "my-react-app-55dd7.firebasestorage.app",
  messagingSenderId: "244771187157",
  appId: "1:244771187157:web:4f73e71b65525a9536f55c",
  measurementId: "G-C7QGTQRQ4C"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { db, auth, analytics };
