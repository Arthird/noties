import clsx from "clsx";
import Content from "./Content";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import Title from "./Title";

export type NotiCardProps = {
  title: string;
  children: React.ReactNode;
  onEdit?: () => any;
  onDelete?: () => any;
  className?: string;
};

export default function NotiCard({
  title,
  children,
  onEdit,
  onDelete,
  className,
}: NotiCardProps) {
  return (
    <div
      className={clsx(
        "bg-neutral-800 border-2 border-neutral-700",
        className,
      )}
    >
      <header>
        <Title>{title}</Title>
      </header>
      <hr className="border-neutral-700 border" />
      <Content>{children}</Content>
      <footer className="flex h-8 gap-1 m-1">
        <EditButton className="flex-1" onClick={onEdit} />
        <DeleteButton className="flex-1" onClick={onDelete} />
      </footer>
    </div>
  );
}
