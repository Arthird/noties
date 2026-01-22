import { Button } from "@headlessui/react";
import clsx from "clsx";

export type DeleteButtonProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
};

export default function DeleteButton({ onClick, className }: DeleteButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={clsx(
        "transition-colors duration-200 ease-in",
        "bg-neutral-800 text-amber-200 rounded-md",
        "hover:bg-orange-700 active:bg-orange-950",
        className
      )}
    >
      Delete
    </Button>
  );
}
