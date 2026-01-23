import { doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../shared/api/db/db";
import type { UserProfile } from "../model/types";

export async function updateUserProfile(
  userId: string,
  updates: Partial<Omit<UserProfile, "id" | "createdAt">>,
): Promise<void> {
  const userRef = doc(db, "users", userId);
  await updateDoc(userRef, {
    ...updates,
    updatedAt: serverTimestamp(),
  });
}
