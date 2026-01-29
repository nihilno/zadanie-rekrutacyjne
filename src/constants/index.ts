import { Home, PlusCircle, User } from "lucide-react";

export const NAVIGATION_ITEMS = [
  { label: "Strona główna", href: "/", icon: Home },
  { label: "Użytkownicy", href: "/users", icon: User },
  { label: "Dodaj użytkownika", href: "/users/add", icon: PlusCircle },
];
