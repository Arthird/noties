import { Button } from "@headlessui/react";
import clsx from "clsx";

export type DeleteButtonProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
};

export default function DeleteButton({
  onClick,
  className,
}: DeleteButtonProps) {
  return (
    <Button onClick={onClick} className={clsx("button-delete", className)}>
      Delete
    </Button>
  );
}
