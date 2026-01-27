import { doc, getDoc } from "firebase/firestore";
import { db } from "shared/api/db/db";
import type { Noti, NotiDTO, NotiId, NotiOwnerId } from "../model/types";
import { dtoToNoti } from "entities/noti";
import { notiIdToOwnerId } from "../lib/convertors";

export async function getNoti(
  notiId: NotiId,
  ownerId?: NotiOwnerId,
): Promise<Noti | null> {
  const resolvedOwnerId = ownerId ?? notiIdToOwnerId(notiId);
  const docRef = doc(db, "users", resolvedOwnerId, "noties", notiId);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return null;
  }

  return dtoToNoti(docSnap.data() as NotiDTO);
}
