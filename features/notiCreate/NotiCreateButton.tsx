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
        "transition-colors duration-200 ease-in w-12 h-12 p-2 md:p-3",
        "border-2 border-transparent",
        "text-neutral-50 rounded-md bg-amber-700",
        "hover:bg-amber-800",
        "active:bg-neutral-800 active:border-amber-700",
        "flex items-center justify-center",
        className,
      )}
    >
      <img src="plus-symbol-button-svgrepo-com.svg" alt="+" />
    </Button>
  );
}
