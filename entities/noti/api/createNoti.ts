import { doc, setDoc } from "firebase/firestore";
import { db } from "shared/api/db/db";
import type {
  NotiDTO,
  NotiContent,
  NotiOwnerId,
  NotiTitle,
  Noti,
} from "../../../entities/noti/model/types";
import { notiToDTO } from "entities/noti";
import generateNotiId from "./generateNotiId";

type createNotiProps = {
  ownerId: NotiOwnerId;
  title: NotiTitle;
  content: NotiContent;
};

export default async function createNoti({
  ownerId,
  title,
  content,
}: createNotiProps) {
  const now = new Date();
  const noti: Noti = {
    id: generateNotiId(ownerId),
    ownerId: ownerId,
    created: now,
    edited: now,
    title: title,
    content: content,
  };
  const dto: NotiDTO = notiToDTO(noti);

  await setDoc(doc(db, "users", ownerId, "noties"), {
    ...dto,
  });
}
