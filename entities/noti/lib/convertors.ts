import type { Noti, NotiContent, NotiDTO, NotiId, NotiTitle } from "../model/types";

export function notiToDTO(noti: Noti): NotiDTO {
  return {
    ...noti,
    created: noti.created.toISOString(),
    edited: noti.edited.toISOString(),
    title: noti.title as string,
    content: noti.content as string,
  };
}

export function dtoToNoti(dto: NotiDTO): Noti {
  return {
    id: dto.id,
    ownerId: dto.ownerId,
    created: new Date(dto.created),
    edited: new Date(dto.edited),
    title: dto.title as NotiTitle,
    content: dto.content as NotiContent,
  };
}

export function notiIdToOwnerId(notiId: NotiId) {
  const userIdInNoti = "--user-";
  return notiId.slice(notiId.indexOf(userIdInNoti) + userIdInNoti.length);
}