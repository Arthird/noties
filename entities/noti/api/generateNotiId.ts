import type { NotiId } from "../model/types";
import type { NotiOwnerId } from '../model/types';

export default function generateNotiId(userId: NotiOwnerId): NotiId {
  const now = new Date()
  return "time-" + now.getTime() + "--user-" + userId
}
