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
import Header from "widgets/header/ui/Header";

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

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [loading, user, navigate]);

  if (loading) {
    return (
      <main>
        <div className="flex min-h-dvh justify-center text-neutral-50">
          <Loading />
        </div>
      </main>
    );
  }

  return (
    <div className="flex min-h-screen flex-1 flex-col">
      <Header />
      <main className="flex h-full flex-1 justify-center">
        {noties.length === 0 ? (
          <div className="flex h-full flex-1 justify-center self-center">
            <p>
              Click on the button and create the first <b>Noti</b>
            </p>
          </div>
        ) : (
          <div
            className={clsx(
              "flex flex-1 text-neutral-50",
              "w-full max-w-6xl px-1 sm:px-4",
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
          className="fixed right-3 bottom-4 z-10"
        />
      </main>
    </div>
  );
}
