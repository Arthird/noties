import { doc, updateDoc } from "firebase/firestore";
import { db } from "shared/api/db/db";
import type { NotiId, NotiOwnerId } from "../model/types";

type EditNotiProps = {
  ownerId: NotiOwnerId;
  notiId: NotiId;
  title?: string;
  content?: string;
};

export async function editNoti({
  ownerId,
  notiId,
  title,
  content,
}: EditNotiProps): Promise<void> {
  const docRef = doc(db, "users", ownerId, "noties", notiId);

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
