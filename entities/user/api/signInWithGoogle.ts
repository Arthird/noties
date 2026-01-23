import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../../shared/api/auth/auth";
import { saveUserProfile } from "./saveUserProfile";
import type { UserProfile } from "../model/types";

export async function signInWithGoogle(): Promise<UserProfile> {
  const result = await signInWithPopup(auth, googleProvider);
  const userProfile = await saveUserProfile(result.user);
  return userProfile;
}
