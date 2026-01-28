# Noties - веб приложение для заметок

Простой веб-сайт для ведения заметок с возможностью синхронизации через Firebase Firestore. Проект реализован как SPA (Single Page Application) на React с современным стеком библиотек и структурой **FSD (Feature-Sliced Design)** для удобной масштабируемости.

## Демо

Чтобы протестировать работоспособность сайта, вы можете перейти по [ссылке](https://noties-d814d.web.app)

## Особенности

- SPA
- Создание, редактирование и удаление заметок
- Аутентификация и инхронизация данных в реальном времени через
- Адаптивный интерфейс
- Сетка Masonry для отображения заметок
- Структура проекта построена по **FSD (Feature-Sliced Design)**

## Технологии

- **React Router v7**
- **Tailwind CSS**
- **Firebase**
- **@headlessui/react**
- **clsx**
- **react-masonry-css**

## Установка

1. Клонируйте репозиторий:

```bash
git clone https://github.com/Arthird/noties.git
cd noties
```

2. Установите зависимости:

```bash
npm install
```

3. Настройте Firebase:

- Создайте проект в [Firebase Console](https://console.firebase.google.com/)
- Включите Firestore
- Скопируйте настройки Firebase в файл `.env.exemple`:

```
REACT_APP_FIREBASE_API_KEY=ваш_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=ваш_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=ваш_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=ваш_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=ваш_sender_id
REACT_APP_FIREBASE_APP_ID=ваш_app_id
```

- Переименуйте его в `.env`

4. Запустите проект:

```bash
npm run dev
```

5. При необходимости задеплйте с помощью firebase hosting

```bash
npm run deploy
```

## Использование

- Главная страница отображает все заметки в виде сетки Masonry
- Нажмите на кнопку для создания новой заметки
- Каждая заметка может быть отредактирована или удалена
- Все изменения автоматически синхронизируются с Firestore в реальном времени

## Структура проекта (FSD)

Проект организован по **Feature-Sliced Design**, чтобы легко масштабировать и поддерживать функционал, с документацией можете ознакомится по [ссылке](https://feature-sliced.design/)

```
src/
├─ app/             # Глобальные настройки приложения и маршрутизация
├─ entities/        # Сущности приложения (Noti и User)
├─ features/        # Фичи приложения
├─ pages/           # Страницы приложения
├─ shared/          # Повторно используемые компоненты и утилиты
├─ widgets/         # Комбинации компонентов для UI

```

## Лицензия

MIT © [Терентьев Артём, Arthird](https://github.com/Arthird)
