import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../shared/api/db/db";
import type { UserProfile } from "../model/types";

export async function getUserProfile(
  userId: string,
): Promise<UserProfile | null> {
  const userRef = doc(db, "users", userId);
  const docSnap = await getDoc(userRef);

  if (!docSnap.exists()) {
    return null;
  }

  const data = docSnap.data();
  return {
    id: docSnap.id,
    email: data.email || null,
    displayName: data.displayName || null,
    photoURL: data.photoURL || null,
    created: data.createdAt?.toDate?.() || new Date(),
    updated: data.updatedAt?.toDate?.() || new Date(),
  };
}
