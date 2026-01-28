import { onAuthStateChanged as onFirebaseAuthStateChanged, type User as FirebaseUser } from "firebase/auth";
import { auth } from "../../../shared/api/auth/auth";
import { saveUserProfile } from "./saveUserProfile";

export function onAuthStateChanged(
  callback: (user: FirebaseUser | null) => void,
): () => void {
  return onFirebaseAuthStateChanged(auth, async (firebaseUser) => {
    if (firebaseUser) {
      await saveUserProfile(firebaseUser);
    }
    callback(firebaseUser);
  });
}
