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
        "h-12 w-12",
        "button-accent",
        "flex items-center justify-center",
        className,
      )}
    >
      <img src="Plus.svg" alt="Add Noti" />
    </Button>
  );
}
