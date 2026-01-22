import NotiCard from "entities/noti/ui/notiCard/NotiCard";

export default function HomePage() {
  return (
    <main>
      <h1>Домашняя страница</h1>
      <p>
        До появления нормальной навигации будет выступать как страница для
        тестов
      </p>
      Пример заметки:
      <NotiCard title="Привет, йоу блин чумба">
        Рапапапапапапапапаппапапапам
      </NotiCard>
    </main>
  );
}
