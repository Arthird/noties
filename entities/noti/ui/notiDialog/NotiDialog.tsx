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
  isSaving?: boolean;
};

export default function NotiDialog({
  isOpen,
  onSave,
  onClose,
  onCancel,
  startTitle = "",
  startContent = "",
  isSaving = false,
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
        <DialogPanel className="rounded bg-neutral-800 p-4 shadow-xl sm:w-4/5 sm:h-[80dvh] w-full h-full">
          <div className="flex flex-1 flex-col h-full">
            <Input
              className="text-xl outline-0"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={isSaving}
            />
            <hr className="my-1" />
            <Textarea
              className="resize-none h-full outline-0"
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              disabled={isSaving}
            />
            <div className="mt-4 flex justify-end gap-2">
              <Button
                onClick={handleCancel}
                disabled={isSaving}
                className={clsx(
                  "transition-colors duration-200 ease-in border-2 border-transparent px-2 py-1 ",
                  "bg-neutral-700 text-neutral-50 rounded-md",
                  "hover:bg-amber-700",
                  "active:bg-neutral-800 active:border-amber-700",
                  "disabled:opacity-50 disabled:cursor-not-allowed",
                )}
              >
                Cancel
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={isSaving}
                className={clsx(
                  "transition-colors duration-200 ease-in px-3 py-1",
                  "bg-neutral-700 text-neutral-50 rounded-md border-2 border-transparent",
                  "hover:bg-neutral-600 hover:text-neutral-200",
                  "active:border-neutral-600 active:bg-neutral-800",
                  "disabled:opacity-50 disabled:cursor-not-allowed",
                )}
              >
                {isSaving ? "Saving..." : "Save"}
              </Button>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
