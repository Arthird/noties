import { useNoties } from "entities/noti/api/useNoties";
import NotiCard from "entities/noti/ui/notiCard/NotiCard";
import { useCurrentUser } from "entities/user/api/useCurrentUser";
import { Form, useNavigation, type ActionFunctionArgs } from "react-router";
import { createNoti } from "entities/noti";

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
  const { user, loading } = useCurrentUser();
  const { noties, loading: notesLoading, error } = useNoties(user?.uid);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <main>
      <h1>Домашняя страница</h1>
      <p>
        До появления нормальной навигации будет выступать как страница для
        тестов
      </p>
      <p>userId: {loading ? "Загрузка данных" : user?.uid}</p>
      Пример заметки:
      <NotiCard title="Привет, йоу блин чумба">
        Рапапапапапапапапаппапапапам
      </NotiCard>
      Форма создания заметок:
      <Form method="post">
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
      </Form>
      Список существующих заметок:
      {notesLoading ? (
        <p>Загрузка заметок...</p>
      ) : (
        noties.map((note) => (
          <NotiCard key={note.id} title={note.title}>
            {note.content}
          </NotiCard>
        ))
      )}
      <br />
      {error && <p>Ошибка: {error.message}</p>}
    </main>
  );
}
