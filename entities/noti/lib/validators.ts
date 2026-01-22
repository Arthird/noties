import { MAX_CONTENT_LENGTH, MAX_TITLE_LENGTH } from "../model/constaints";

export function validateNotiTitle(title: string): boolean {
  return title.length <= MAX_TITLE_LENGTH;
}

export function validateNotiContent(content: string): boolean {
  return content.length <= MAX_CONTENT_LENGTH;
}
