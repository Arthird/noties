import type { Route } from "./+types/home";
import HomePage, { clientAction as homeClientAction } from "pages/HomePage";

export const clientAction = homeClientAction;

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

export default function Home() {
  return <HomePage />;
}
