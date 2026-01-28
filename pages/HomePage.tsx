import {
  deleteNoti,
  getNoti,
  useNoties,
  type Noti,
  type NotiId,
} from "entities/noti/";
import { useCurrentUser } from "entities/user/api/useCurrentUser";
import NotiList from "../widgets/notiList/NotiList";
import { useState } from "react";
import NotiEditDialog from "features/notiEdit/NotiEditDialog";
import NotiCreateDialog from "features/notiCreate/NotiCreateDialog";
import NotiCreateButton from "features/notiCreate/NotiCreateButton";
import { Navigate } from "react-router";

export default function HomePage() {
  const { user, loading: userDataLoading } = useCurrentUser();
  const { noties, loading: notiesLoading, error } = useNoties(user?.uid);

  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  async function handleCreateDialogOpen() {
    setIsCreateDialogOpen(true);
  }

  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingNoti, setEditingNoti] = useState<Noti | null>(null);
  async function handleEditDialogOpen(notiId: NotiId) {
    const noti = await getNoti(notiId);
    setEditingNoti(noti);
    setIsEditDialogOpen(true);
  }

  console.log(!!user, !!userDataLoading)
  if (!userDataLoading && !user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <main>
      <div className="flex max-w-6xl mx-auto sm:mx-5 text-neutral-50 min-h-dvh ">
        {noties.length > 0 ? (
          <>
            <NotiList
              noties={noties}
              loading={notiesLoading || userDataLoading}
              onDeleteBtnClick={deleteNoti}
              onEditBtnClick={handleEditDialogOpen}
            />
            <br />
            {error && <p>Ошибка: {error.message}</p>}
          </>
        ) : (
          <div className="flex flex-1 items-center justify-center">
            <p>Just create your first Noti</p>
          </div>
        )}
        <NotiCreateButton onClick={handleCreateDialogOpen} className="absolute bottom-4 right-5" />
        <NotiEditDialog
          isOpen={isEditDialogOpen}
          setIsOpen={setIsEditDialogOpen}
          noti={editingNoti}
        />
        <NotiCreateDialog
          isOpen={isCreateDialogOpen}
          setIsOpen={setIsCreateDialogOpen}
          ownerId={user?.uid}
        />
      </div>
    </main>
  );
}
