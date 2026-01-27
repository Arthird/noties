import { doc, updateDoc } from "firebase/firestore";
import { db } from "shared/api/db/db";
import type { NotiId, NotiOwnerId } from "../model/types";
import { validateNotiOwner } from "../lib/validators";

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
  if (!validateNotiOwner(notiId, ownerId)) {
    throw Error("Attempt to edit someone else's noti");
  }
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
