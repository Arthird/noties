import { Button } from "@headlessui/react";
import clsx from "clsx";

type NotiCreateButtonProps = {
  onClick: () => any;
  className?: string;
};

export default function NotiCreateButton({
  onClick,
  className,
}: NotiCreateButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={clsx(
        "h-12 w-12 transition-colors duration-200 ease-in",
        "border-2 border-transparent",
        "rounded-md bg-amber-600 text-neutral-50",
        "hover:bg-amber-500",
        "active:border-amber-600 active:bg-neutral-800",
        "flex items-center justify-center",
        className,
      )}
    >
      <img src="Plus.svg" alt="Add Noti" />
    </Button>
  );
}
