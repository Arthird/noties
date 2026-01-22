import type { Route } from "./+types/home";
import LoginPage from "pages/LoginPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Noties" },
    {
      name: "description",
      content:
        "Noties — простое и удобное приложение для " +
        "создания, организации и управления заметками в реальном времени.",
    },
  ];
}

export default function Login() {
  return <LoginPage />;
}
