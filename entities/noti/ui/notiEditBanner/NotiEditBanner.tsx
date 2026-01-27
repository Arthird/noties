import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Form } from "react-router";

export default function NotiEditBanner() {
  //TODO: сделать из этой фигни форму, раскидать ui по компонентам
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 rounded bg-sky-600 text-white"
      >
        Открыть диалог
      </button>

      <Dialog
        open={open}
        onClose={setOpen}
        className="relative z-50"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/50" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="mx-auto w-full max-w-md rounded bg-neutral-800 p-6 shadow-xl">
            <DialogTitle id="modal-title" className="text-lg font-semibold">
              Создание новой заметки
            </DialogTitle>
            {/* <Form method="post">
              <fieldset
                disabled={isSubmitting || !user}
                className="flex flex-col gap-2"
              >
                <input type="hidden" name="ownerId" value={user?.uid || ""} />

                <input
                  name="title"
                  placeholder="Заголовок"
                  className={isSubmitting ? "opacity-50" : ""}
                />

                <textarea
                  name="content"
                  placeholder="Содержание"
                  className={isSubmitting ? "opacity-50" : ""}
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-amber-700 ${isSubmitting ? "grayscale cursor-not-allowed" : ""}`}
                >
                  {isSubmitting ? "Создание..." : "Создать заметку"}
                </button>
              </fieldset>
            </Form> */}
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setOpen(false)}
                className="px-3 py-1.5 rounded border border-slate-300 text-slate-700"
              >
                Отмена
              </button>
              <button
                onClick={() => setOpen(false)}
                className="px-3 py-1.5 rounded bg-sky-600 text-white"
              >
                Ок
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
