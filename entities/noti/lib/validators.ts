import { MAX_CONTENT_LENGTH, MAX_TITLE_LENGTH } from "../model/constaints";
import type { Noti } from "../model/types";

export function validateNotiTitle(title: string): boolean {
  return title.length <= MAX_TITLE_LENGTH;
}

export function validateNotiContent(content: string): boolean {
  return content.length <= MAX_CONTENT_LENGTH;
}

export function isNoti(obj: any): obj is Noti {
  return obj && typeof obj === "object" && "id" in obj && "ownerId" in obj;
}