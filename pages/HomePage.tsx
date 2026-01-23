import NotiCard from "entities/noti/ui/notiCard/NotiCard";
import { useCurrentUser } from "entities/user/ui/useCurrentUser";

export default function HomePage() {
  const { user, loading } = useCurrentUser();

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
    </main>
  );
}
