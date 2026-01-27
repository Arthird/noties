import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "shared/api/db/db";
import type {
  NotiDTO,
  NotiOwnerId,
  Noti,
} from "../../../entities/noti/model/types";
import {
  createNotiContent,
  createNotiTitle,
  DEFAULT_CONTENT,
  DEFAULT_TITLE,
  notiToDTO,
} from "entities/noti";
import { generateNotiId } from "../lib/generators";

export async function createNoti(ownerId?: NotiOwnerId, title?: string, content?: string) {
  if (!ownerId) {
    throw Error("Creating nobody's noti try")
  }
  const now = new Date();
  const notiId = generateNotiId(ownerId);
  const noti: Noti = {
    id: notiId,
    ownerId: ownerId,
    created: now,
    edited: now,
    title: createNotiTitle(
      title === undefined || title === "" ? DEFAULT_TITLE : title,
    ),
    content: createNotiContent(
      content === undefined || content === "" ? DEFAULT_CONTENT : content,
    ),
  };
  const dto: NotiDTO = notiToDTO(noti);

  await setDoc(doc(db, "users", ownerId, "noties", notiId), {
    ...dto,
  });
}
