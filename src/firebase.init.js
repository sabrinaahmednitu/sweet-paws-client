// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyALE5E1HvW0EBOtO5Lc2S-enEXuKvsrkiQ',
  authDomain: 'sweetpaws-caebf.firebaseapp.com',
  projectId: 'sweetpaws-caebf',
  storageBucket: 'sweetpaws-caebf.appspot.com',
  messagingSenderId: '598219715365',
  appId: '1:598219715365:web:85f010de81a59d94bca0cc',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;