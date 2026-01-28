import { createNoti } from "entities/noti";
import NotiDialog from "entities/noti/ui/notiDialog/NotiDialog";
import { useState } from "react";

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
  const [isSaving, setIsSaving] = useState(false);

  if (!ownerId) {
    return <></>;
  }
  const save = async function (title: string, content: string) {
    setIsSaving(true);
    try {
      await createNoti(ownerId, title, content);
      setIsOpen(false);
    } catch (error) {
      console.error("Failed to create noti:", error);
    } finally {
      setIsSaving(false);
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
      isSaving={isSaving}
    />
  );
}
