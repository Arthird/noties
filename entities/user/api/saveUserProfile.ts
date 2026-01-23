import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../shared/api/db/db";
import type { User, UserProfile } from "../model/types";

export async function saveUserProfile(
  user: User,
): Promise<UserProfile> {
  const userRef = doc(db, "users", user.uid);
  const existingDoc = await getDoc(userRef);

  const userProfile: UserProfile = {
    id: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    created: existingDoc.exists()
      ? (existingDoc.data().createdAt as Date)
      : new Date(),
    updated: new Date(),
  };

  await setDoc(
    userRef,
    {
      ...userProfile,
      createdAt: existingDoc.exists()
        ? existingDoc.data().createdAt
        : serverTimestamp(),
      updatedAt: serverTimestamp(),
    },
    { merge: true },
  );

  return userProfile;
}
