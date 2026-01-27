import type { Route } from "./+types/home";
import HomePage from "pages/HomePage";

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
