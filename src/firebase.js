import { initializeApp, firestore } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyC-t_y8WqCCLBk36jSZ8Sl4-CT7--lbtno",
  authDomain: "disney-clone-b5d5d.firebaseapp.com",
  projectId: "disney-clone-b5d5d",
  storageBucket: "disney-clone-b5d5d.appspot.com",
  messagingSenderId: "477712338603",
  appId: "1:477712338603:web:70558d77986b5d4603b1ee",
  measurementId: "G-BRMCRZC57V",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
export { auth, provider, storage };
export default db;
