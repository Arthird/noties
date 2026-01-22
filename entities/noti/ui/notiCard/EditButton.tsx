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
        "bg-neutral-800 text-amber-200 rounded-md",
        "hover:bg-neutral-700 active:bg-neutral-950",
        className
      )}
    >
      Edit
    </Button>
  );
}
