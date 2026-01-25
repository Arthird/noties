import { doc, getDoc } from "firebase/firestore";
import { db } from "shared/api/db/db";
import type { Noti, NotiDTO, NotiId, NotiOwnerId } from "../model/types";
import { dtoToNoti } from "entities/noti";

export async function getNoti(
  ownerId: NotiOwnerId,
  notiId: NotiId,
): Promise<Noti | null> {
  const docRef = doc(db, "users", ownerId, "noties", notiId);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return null;
  }

  return dtoToNoti(docSnap.data() as NotiDTO);
}
