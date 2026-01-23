import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../shared/api/auth/auth";
import { saveUserProfile } from "./saveUserProfile";
import type { UserProfile } from "../model/types";

export async function signUpWithEmail(
  email: string,
  password: string,
  displayName?: string,
): Promise<UserProfile> {
  const result = await createUserWithEmailAndPassword(auth, email, password);
  const user = result.user;

  if (displayName) {
    await user.reload();
  }

  const userProfile = await saveUserProfile(user);
  return userProfile;
}
