import { MAX_TITLE_LENGTH, MAX_CONTENT_LENGTH } from "../model/constaints";
import type { NotiTitle, NotiContent } from "../model/types";

export function createNotiTitle(title: string): NotiTitle {
  if (title.length > MAX_TITLE_LENGTH) {
    throw new Error(`Title must be ${MAX_TITLE_LENGTH} characters or less`);
  }
  return title as NotiTitle;
}

export function createNotiContent(content: string): NotiContent {
  if (content.length > MAX_CONTENT_LENGTH) {
    throw new Error(`Content must be ${MAX_CONTENT_LENGTH} characters or less`);
  }
  return content as NotiContent;
}
