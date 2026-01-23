import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../shared/api/auth/auth";
import { saveUserProfile } from "./saveUserProfile";
import type { UserProfile } from "../model/types";

export async function signInWithEmail(
  email: string,
  password: string,
): Promise<UserProfile> {
  const result = await signInWithEmailAndPassword(auth, email, password);
  const userProfile = await saveUserProfile(result.user);
  return userProfile;
}
