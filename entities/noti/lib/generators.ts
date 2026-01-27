import type { NotiId, NotiOwnerId } from "../model/types";

export function generateNotiId(userId: NotiOwnerId): NotiId {
  const now = new Date();
  return "time-" + now.getTime() + "--user-" + userId;
}
