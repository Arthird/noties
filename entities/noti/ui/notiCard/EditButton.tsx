import { Button } from "@headlessui/react";
import clsx from "clsx";

export type EditButtonProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className: string;
};

export default function EditButton({ onClick, className }: EditButtonProps) {
  return (
    <Button onClick={onClick} className={clsx("button-neutral", className)}>
      Edit
    </Button>
  );
}
