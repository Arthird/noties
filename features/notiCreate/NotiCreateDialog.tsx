import { createNoti } from "entities/noti";
import NotiDialog from "entities/noti/ui/notiDialog/NotiDialog";

type NotiCreateDialogProps = {
  isOpen: boolean;
  setIsOpen: (state: boolean) => any;
  ownerId: string | null | undefined;
};

export default function NotiCreateDialog({
  isOpen,
  setIsOpen,
  ownerId,
}: NotiCreateDialogProps) {
  if (!ownerId) {
    return <></>;
  }
  const save = function (title: string, content: string) {
    createNoti(ownerId, title, content);
    setIsOpen(false);
  };
  const cancel = function () {
    setIsOpen(false);
  };
  const close = function () {
    setIsOpen(false);
  };

  return (
    <NotiDialog
      isOpen={isOpen}
      onSave={save}
      onCancel={cancel}
      onClose={close}
    />
  );
}
