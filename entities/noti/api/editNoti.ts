import { doc, updateDoc } from "firebase/firestore";
import { db } from "shared/api/db/db";
import type { NotiId, NotiOwnerId } from "../model/types";
import { notiIdToOwnerId } from "../lib/convertors";

export async function editNoti(
  notiId: NotiId,
  title?: string,
  content?: string,
  ownerId?: NotiOwnerId,
): Promise<void> {
  const resolvedOwnerId = ownerId ?? notiIdToOwnerId(notiId);
  const docRef = doc(db, "users", resolvedOwnerId, "noties", notiId);

  const updates: Record<string, unknown> = {
    edited: new Date(),
  };

  if (title !== undefined) {
    updates.title = title;
  }

  if (content !== undefined) {
    updates.content = content;
  }

  await updateDoc(docRef, updates);
}
