import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCRZNpEUcBDi6vKRP40qtVZtfqBtnn2HyI',
  authDomain: 'uberclone-1812f.firebaseapp.com',
  projectId: 'uberclone-1812f',
  storageBucket: 'uberclone-1812f.appspot.com',
  messagingSenderId: '42189935399',
  appId: '1:42189935399:web:ede42e12b563698cbb8f02',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export {app, provider, auth}
