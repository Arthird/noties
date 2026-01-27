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
    <Button
      onClick={onClick}
      className={clsx(
        "transition-colors duration-200 ease-in border-2 border-transparent",
        "bg-neutral-700 text-neutral-50 rounded-md",
        "hover:bg-amber-700",
        "active:bg-neutral-800 active:border-amber-700",
        className,
      )}
    >
      Delete
    </Button>
  );
}
