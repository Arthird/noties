import { firebaseApp } from "firebase.config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
} from "firebase/auth";

const auth = getAuth(firebaseApp);

export async function login(email: string, password: string) {
  return await signInWithEmailAndPassword(auth, email, password);
}

export async function register(email: string, password: string) {
  return await createUserWithEmailAndPassword(auth, email, password);
}

export async function logout() {
  return await signOut(auth);
}

export function getCurrentUser() {
  return auth.currentUser;
}

const googleProvider = new GoogleAuthProvider();

export async function loginWithGoogle() {
  return await signInWithPopup(auth, googleProvider);
}
