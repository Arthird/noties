import { Button } from "@headlessui/react";
import clsx from "clsx";

export type EditButtonProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className: string;
};

export default function EditButton({ onClick, className }: EditButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={clsx(
        "transition-colors duration-200 ease-in",
        "bg-neutral-700 text-neutral-50 rounded-md border-2 border-transparent",
        "hover:bg-neutral-600 hover:text-neutral-200",
        "active:border-neutral-600 active:bg-neutral-800",
        className,
      )}
    >
      Edit
    </Button>
  );
}
