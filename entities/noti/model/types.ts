export type NotiId = string;
export type NotiOwnerId = string;

export type NotiCreated = Date;
export type NotiEdited = Date;

export type NotiTitle = string & { readonly __brand: "NotiTitle" };
export type NotiContent = string & { readonly __brand: "NotiContent" };

export type NotiDTO = {
  id: string;
  ownerId: string;
  created: string;
  edited: string;
  title: string;
  content: string;
};

export interface Noti {
  id: NotiId;
  ownerId: NotiOwnerId;
  created: NotiCreated;
  edited: NotiEdited;
  title: NotiTitle;
  content: NotiContent;
}
