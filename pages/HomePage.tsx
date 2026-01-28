import {
  deleteNoti,
  getNoti,
  useNoties,
  type Noti,
  type NotiId,
} from "entities/noti/";
import { useCurrentUser } from "entities/user/api/useCurrentUser";
import NotiList from "../widgets/notiList/NotiList";
import { useEffect, useState } from "react";
import NotiEditDialog from "features/notiEdit/NotiEditDialog";
import NotiCreateDialog from "features/notiCreate/NotiCreateDialog";
import NotiCreateButton from "features/notiCreate/NotiCreateButton";
import { useNavigate } from "react-router";
import Loading from "widgets/loading/Loading";
import clsx from "clsx";

export default function HomePage() {
  const navigate = useNavigate();

  const { user, loading: userDataLoading } = useCurrentUser();
  const { noties, loading: notiesLoading, error } = useNoties(user?.uid);
  let loading = userDataLoading || notiesLoading;

  useEffect(() => {
    loading = userDataLoading || notiesLoading;
  }, [userDataLoading, notiesLoading]);

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

  if (!loading && !user) {
    navigate("/login");
  }

  if (loading) {
    return (
      <main>
        <div className="flex justify-center text-neutral-50 min-h-dvh ">
          <Loading />;
        </div>
      </main>
    );
  }

  return (
    <main className="h-full">
      {noties.length === 0 ? (
        <div className=" flex justify-center items-center h-full">
          <p>
            Click on the button and create the first <b>Noti</b>
          </p>
        </div>
      ) : (
        <div
          className={clsx(
            "flex flex-1 justify-self-center text-neutral-50",
            " w-full max-w-6xl sm:px-4",
          )}
        >
          <NotiList
            noties={noties}
            onDeleteBtnClick={deleteNoti}
            onEditBtnClick={handleEditDialogOpen}
          />
          <br />
          {error && <p>Ошибка: {error?.message}</p>}
        </div>
      )}
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
      <NotiCreateButton
        onClick={handleCreateDialogOpen}
        className="fixed z-10 bottom-4 right-5"
      />
    </main>
  );
}
