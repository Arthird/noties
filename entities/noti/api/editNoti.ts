import {
  doc,
  DocumentReference,
  updateDoc,
  type DocumentData,
} from "firebase/firestore";
import { db } from "shared/api/db/db";
import type { Noti, NotiId, NotiOwnerId } from "../model/types";
import { notiIdToOwnerId, notiToDTO } from "../lib/convertors";
import { getNoti } from "./getNoti";
import { isNoti } from "../lib/validators";
import { createNotiContent, createNotiTitle } from "../lib/creators";

export async function editNoti(
  notiId: NotiId,
  title?: string,
  content?: string,
): Promise<void>;

export async function editNoti(
  noti: Noti,
  title?: string,
  content?: string,
): Promise<void>;

export async function editNoti(
  notiIdOrNoti: Noti | NotiId,
  title?: string,
  content?: string,
): Promise<void> {
  let docRef: DocumentReference<DocumentData, DocumentData>;
  let editedNoti: Noti;
  let resolvedOwnerId: NotiOwnerId;
  let notiId: NotiId;

  if (isNoti(notiIdOrNoti)) {
    const noti = notiIdOrNoti;
    notiId = noti.id;
    resolvedOwnerId = notiIdToOwnerId(noti.id);

    editedNoti = { ...noti };
    if (title) {
      editedNoti.title = createNotiTitle(title);
    }
    if (content) {
      editedNoti.content = createNotiContent(content);
    }
  } else {
    notiId = notiIdOrNoti;
    resolvedOwnerId = notiIdToOwnerId(notiId);

    const noti = await getNoti(notiId);
    if (!noti) {
      throw new Error(`Notification with id ${notiId} not found`);
    }

    editedNoti = noti;
    if (title) {
      editedNoti.title = createNotiTitle(title);
    }
    if (content) {
      editedNoti.content = createNotiContent(content);
    }
  }
  docRef = doc(db, "users", resolvedOwnerId, "noties", notiId);

  const now = new Date();
  editedNoti.edited = now;

  await updateDoc(docRef, notiToDTO(editedNoti));
}
