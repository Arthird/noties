import { doc, deleteDoc } from "firebase/firestore";
import { db } from "shared/api/db/db";
import type { NotiId, NotiOwnerId } from "../model/types";

export async function deleteNoti(
  ownerId: NotiOwnerId,
  notiId: NotiId,
): Promise<void> {
  const docRef = doc(db, "users", ownerId, "noties", notiId);
  await deleteDoc(docRef);
}
