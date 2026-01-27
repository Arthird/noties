import { doc, deleteDoc } from "firebase/firestore";
import { db } from "shared/api/db/db";
import type { NotiId, NotiOwnerId } from "../model/types";
import { notiIdToOwnerId } from "../lib/convertors";

export async function deleteNoti(
  notiId: NotiId,
  ownerId?: NotiOwnerId,
): Promise<void> {
  const resolvedOwnerId = ownerId ?? notiIdToOwnerId(notiId);
  const docRef = doc(db, "users", resolvedOwnerId, "noties", notiId);
  
  await deleteDoc(docRef);
}
