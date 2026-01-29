import { useQuery } from "@tanstack/react-query";

async function getUsers(): Promise<User[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("Nie udało się pobrać użytkowników z API");
  }

  const users: User[] = await response.json();
  return users;
}

export function useUsersQuery() {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
}
