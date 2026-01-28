import { editNoti, type Noti } from "entities/noti";
import NotiDialog from "entities/noti/ui/notiDialog/NotiDialog";

type NotiEditDialogProps = {
  isOpen: boolean;
  setIsOpen: (state: boolean) => any;
  noti: Noti | null | undefined;
};

export default function NotiEditDialog({
  isOpen,
  setIsOpen,
  noti,
}: NotiEditDialogProps) {
  if (!noti) {
    return <></>;
  }

  const save = async function (title: string, content: string) {
    try {
      editNoti(noti.id, title, content);
      setIsOpen(false);
    } catch (error) {
      console.error("Failed to edit noti:", error);
    }
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
