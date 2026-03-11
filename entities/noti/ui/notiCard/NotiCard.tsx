import clsx from "clsx";
import Content from "./Content";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import Title from "./Title";
import type { Noti } from "entities/noti/model/types";
import { formatDate } from "shared/utils/formatDate";

export type NotiCardProps = {
  noti: Noti;
  onEdit?: () => any;
  onDelete?: () => any;
  className?: string;
};

export default function NotiCard({
  noti,
  onEdit,
  onDelete,
  className,
}: NotiCardProps) {
  return (
    <div
      className={clsx(
        "color-border-primary color-bg-primary border-2",
        className,
      )}
    >
      <header>
        <Title>{noti.title}</Title>
      </header>
      <hr className="color-hr-primary border" />
      <Content>{noti.content}</Content>
      <footer className="m-1 flex h-8 gap-1">
        <EditButton className="flex-1" onClick={onEdit} />
        <DeleteButton className="flex-1" onClick={onDelete} />
      </footer>
    </div>
  );
}
