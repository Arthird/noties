import { onAuthStateChanged, type User as FirebaseUser } from "firebase/auth";
import { auth } from "../../../shared/api/auth/auth";
import { saveUserProfile } from "./saveUserProfile";

export function onAuthStateChange(
  callback: (user: FirebaseUser | null) => void,
): () => void {
  return onAuthStateChanged(auth, async (firebaseUser) => {
    if (firebaseUser) {
      await saveUserProfile(firebaseUser);
    }
    callback(firebaseUser);
  });
}
