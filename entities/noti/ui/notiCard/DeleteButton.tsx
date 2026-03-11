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
        "border-2 border-transparent transition-colors duration-200 ease-in",
        "rounded-md bg-neutral-700 text-neutral-50",
        "hover:bg-amber-700",
        "active:border-amber-700 active:bg-neutral-800",
        className,
      )}
    >
      Delete
    </Button>
  );
}
