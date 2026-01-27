import { MAX_CONTENT_LENGTH, MAX_TITLE_LENGTH } from "../model/constaints";
import type { NotiId, NotiOwnerId } from "../model/types";

export function validateNotiTitle(title: string): boolean {
  return title.length <= MAX_TITLE_LENGTH;
}

export function validateNotiContent(content: string): boolean {
  return content.length <= MAX_CONTENT_LENGTH;
}

export function validateNotiOwner(notiId: NotiId, userId: NotiOwnerId) {
  const userIdInNoti = "--user-";
  return (
    userId === notiId.slice(notiId.indexOf(userIdInNoti) + userIdInNoti.length)
  );
}
