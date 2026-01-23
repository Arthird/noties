import { signOut as firebaseSignOut } from "firebase/auth";
import { auth } from "../../../shared/api/auth/auth";

export async function signOut(): Promise<void> {
  await firebaseSignOut(auth);
}
