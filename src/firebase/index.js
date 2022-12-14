import { initializeApp } from "firebase/app";
/* import { getFirestore } from 'firebase/firestore'; */
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCQycH6dHowUCpOafuaLFJKObM4m_dP6o4",
  authDomain: "leelogluten.firebaseapp.com",
  projectId: "leelogluten",
  storageBucket: "leelogluten.appspot.com",
  messagingSenderId: "305885154240",
  appId: "1:305885154240:web:f8e47704c8ac631f0dd625"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/* const db = getFirestore(app);
const auth = getAuth(app); */

export { app };