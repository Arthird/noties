import { firebaseApp } from "firebase.config";
import {
  GoogleAuthProvider,
  getAuth
} from "firebase/auth";

export const auth = getAuth(firebaseApp);
export const googleProvider = new GoogleAuthProvider();