import {
  createNoti,
  deleteNoti,
  editNoti,
  getNoti,
  useNoties,
  type Noti,
  type NotiId,
} from "entities/noti/";
import { useCurrentUser } from "entities/user/api/useCurrentUser";
import NotiList from "../widgets/notiList/ui/NotiList";
import { Button } from "@headlessui/react";
import { useState } from "react";
import NotiEditDialog from "features/notiEdit/NotiEditDialog";

export default function HomePage() {
  const { user, loading: userDataLoading } = useCurrentUser();
  const { noties, loading: notiesLoading, error } = useNoties(user?.uid);

  // Dialog
  // const [isDialogOpen, setIsDialogOpen] = useState(false);
  // const save = function (title: string, content: string) {
  //   createNoti(user?.uid, title, content);
  //   setIsDialogOpen(false);
  // };
  // const cancel = function () {
  //   setIsDialogOpen(false);
  // };
  // const close = function () {
  //   setIsDialogOpen(false);
  // };
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [editingNoti, setEditingNoti] = useState<Noti | null>(null)
  async function handleEditDialogOpen(notiId: NotiId) {
    const noti = await getNoti(notiId);
    setEditingNoti(noti)
    setIsEditDialogOpen(true)
  }

  return (
    <main>
      <div className="max-w-6xl mx-auto p-4 text-neutral-50 min-h-screen">
        <h1>Домашняя страница</h1>
        <p>
          До появления нормальной навигации будет выступать как страница для
          тестов
        </p>
        <p>userId: {userDataLoading ? "Загрузка данных" : user?.uid}</p>
        {/* Форма создания заметок: */}
        {/* <Button onClick=Чисто под создание>создать заметку</Button> */}
        <br />
        <NotiEditDialog
          isOpen={isEditDialogOpen}
          setIsOpen={setIsEditDialogOpen}
          noti={editingNoti}
        />
        Список существующих заметок:
        <NotiList
          noties={noties}
          loading={notiesLoading || userDataLoading}
          onDeleteBtnClick={deleteNoti}
          onEditBtnClick={handleEditDialogOpen}
        />
        <br />
        {error && <p>Ошибка: {error.message}</p>}
      </div>
    </main>
  );
}
