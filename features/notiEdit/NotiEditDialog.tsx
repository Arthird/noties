import { editNoti, type Noti } from "entities/noti";
import NotiDialog from "entities/noti/ui/notiDialog/NotiDialog";

type NotiEditDialogProps = {
  isOpen: boolean;
  setIsOpen: (state: boolean) => any;
  noti: Noti | null;
};

export default function NotiEditDialog({
  isOpen,
  setIsOpen,
  noti,
}: NotiEditDialogProps) {
  if (!noti) {
    return <></>
  }

  const save = function (title: string, content: string) {
    editNoti(noti.id, title, content);
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
      startTitle={noti.title}
      startContent={noti.content}
    />
  );
}
