import {
  Button,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Input,
  Textarea,
} from "@headlessui/react";

type NotiDialogProps = {
  isOpen: boolean;
  onSave: (title: string, content: string) => any;
  onClose: () => any;
  onCancel: () => any;
  startTitle?: string;
  startContent?: string;
};

export default function NotiDialog({
  isOpen,
  onSave,
  onClose,
  onCancel,
  startTitle,
  startContent,
}: NotiDialogProps) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    onSave(title, content);
  }

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-black/50" />

      <div className="fixed inset-0 flex items-center justify-center p-4 ">
        <DialogPanel className="rounded bg-neutral-800 p-4 shadow-xl w-4/5 h-[80dvh]">
          <form className="flex flex-1 flex-col h-full" onSubmit={handleSubmit}>
            <Input
              className="text-xl"
              placeholder="Title"
              name="title"
              defaultValue={startTitle}
            />
            <hr className="my-1" />
            <Textarea
              className="resize-none h-full"
              placeholder="Content"
              name="content"
              defaultValue={startContent}
            />
            <div className="mt-4 flex justify-end gap-2">
              <Button
                onClick={onCancel}
                className="px-3 py-1.5 rounded border border-slate-300 text-slate-700"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="px-3 py-1.5 rounded bg-sky-600 text-white"
              >
                Save
              </Button>
            </div>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
