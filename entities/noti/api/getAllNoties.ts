import { collection, getDocs, query } from "firebase/firestore";
import { db } from "shared/api/db/db";
import type { Noti, NotiDTO, NotiOwnerId } from "../model/types";
import { dtoToNoti } from "entities/noti";

export default async function getAllNoties(
  ownerId: NotiOwnerId,
): Promise<Noti[]> {
  const collectionRef = collection(db, "users", ownerId, "noties");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);

  const noties: Noti[] = [];
  querySnapshot.forEach((doc) => {
    noties.push(dtoToNoti(doc.data() as NotiDTO));
  });

  return noties;
}
