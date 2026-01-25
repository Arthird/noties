import { doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from "shared/api/db/db";
import type {
  NotiContent,
  NotiId,
  NotiOwnerId,
  NotiTitle,
} from "../model/types";

type EditNotiProps = {
  ownerId: NotiOwnerId;
  notiId: NotiId;
  title?: NotiTitle;
  content?: NotiContent;
};

export default async function editNoti({
  ownerId,
  notiId,
  title,
  content,
}: EditNotiProps): Promise<void> {
  const docRef = doc(db, "users", ownerId, "noties", notiId);

  const updates: Record<string, unknown> = {
    edited: serverTimestamp(),
  };

  if (title !== undefined) {
    updates.title = title;
  }

  if (content !== undefined) {
    updates.content = content;
  }

  await updateDoc(docRef, updates);
}
