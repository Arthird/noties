import { useNoties } from "entities/noti/";
import NotiCard from "entities/noti/ui/notiCard/NotiCard";
import { useCurrentUser } from "entities/user/api/useCurrentUser";
import { Form, useNavigation, type ActionFunctionArgs } from "react-router";
import { createNoti } from "entities/noti";
import NotiEditBanner from "entities/noti/ui/notiEditBanner/NotiEditBanner";
import NotiList from "../widgets/notiList/ui/NotiList";

export async function clientAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  await createNoti({
    ownerId: String(data.ownerId),
    title: String(data.title),
    content: String(data.content),
  });

  return { ok: true };
}

export default function HomePage() {
  const { user, loading: userDataLoading } = useCurrentUser();
  const { noties, loading: notiesLoading, error } = useNoties(user?.uid);
  // const navigation = useNavigation();
  // const isSubmitting = navigation.state === "submitting";

  return (
    <main>
      <div className="max-w-6xl mx-auto p-4 text-neutral-50 min-h-screen">
        <h1>Домашняя страница</h1>
        <p>
          До появления нормальной навигации будет выступать как страница для
          тестов
        </p>
        <p>userId: {userDataLoading ? "Загрузка данных" : user?.uid}</p>

        Форма создания заметок: Список существующих заметок:
        <NotiList noties={noties} loading={notiesLoading || userDataLoading} />
        <br />
        {error && <p>Ошибка: {error.message}</p>}
      </div>
      <NotiEditBanner />
    </main>
  );
}
