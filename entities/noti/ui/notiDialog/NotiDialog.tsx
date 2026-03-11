import {
  Button,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Input,
  Textarea,
} from "@headlessui/react";
import clsx from "clsx";
import { useState, useEffect } from "react";

type NotiDialogProps = {
  isOpen: boolean;
  onSave: (title: string, content: string) => any;
  onClose: (title: string, content: string) => any;
  onCancel: (title: string, content: string) => any;
  startTitle?: string;
  startContent?: string;
};

export default function NotiDialog({
  isOpen,
  onSave,
  onClose,
  onCancel,
  startTitle = "",
  startContent = "",
}: NotiDialogProps) {
  const [title, setTitle] = useState(startTitle);
  const [content, setContent] = useState(startContent);

  useEffect(() => {
    if (isOpen) {
      setTitle(startTitle || "");
      setContent(startContent || "");
    }
  }, [isOpen, startTitle, startContent]);

  function handleSubmit() {
    onSave(title, content);
  }

  function handleCancel() {
    onCancel(title, content);
  }

  function handleDialogClose() {
    onClose(title, content);
  }

  return (
    <Dialog open={isOpen} onClose={handleDialogClose} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-black/50" />

      <div className="fixed inset-0 flex items-center justify-center">
        <DialogPanel className="h-full w-full rounded bg-neutral-800 p-4 shadow-xl sm:h-[80dvh] sm:w-4/5">
          <div className="flex h-full flex-1 flex-col">
            <Input
              className="text-xl outline-0"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoComplete="off"
            />
            <hr className="my-1" />
            <Textarea
              className="h-full resize-none outline-0"
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <div className="mt-4 flex justify-end gap-2">
              <Button
                onClick={handleCancel}
                className={clsx(
                  "border-2 border-transparent px-2 py-1 transition-colors duration-200 ease-in",
                  "rounded-md bg-neutral-700 text-neutral-50",
                  "hover:bg-amber-700",
                  "active:border-amber-700 active:bg-neutral-800",
                  "disabled:cursor-not-allowed disabled:opacity-50",
                )}
              >
                Cancel
              </Button>
              <Button
                onClick={handleSubmit}
                className={clsx(
                  "px-3 py-1 transition-colors duration-200 ease-in",
                  "rounded-md border-2 border-transparent bg-neutral-700 text-neutral-50",
                  "hover:bg-neutral-600 hover:text-neutral-200",
                  "active:border-neutral-600 active:bg-neutral-800",
                  "disabled:cursor-not-allowed disabled:opacity-50",
                )}
              >
                Save
              </Button>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
