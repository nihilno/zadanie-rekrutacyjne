import { useUsersQuery } from "@/api/users";
import { useUsersContext } from "@/contexts/users-context";
import { useState } from "react";
import { toast } from "sonner";

export function useAllUsers() {
  const { data: apiUsers, error, isLoading } = useUsersQuery();
  const { localUsers, deleteLocalUser } = useUsersContext();
  const [deletedApiUser, setDeletedApiUser] = useState<string[]>([]);

  function onDeleteUser(id: string) {
    const localUser = localUsers.find((user) => user.id === id);
    if (localUser) {
      deleteLocalUser(id);
      toast.success("Użytkownik lokalny usunięty pomyślnie");
    } else {
      setDeletedApiUser((prev) => [...prev, id]);
      toast.success("Użytkownik z API usunięty pomyślnie (z UI)");
    }
  }

  const allUsers = [
    ...(apiUsers?.filter((user) => !deletedApiUser.includes(user.id)) || []),
    ...localUsers,
  ];

  return { allUsers, error, isLoading, onDeleteUser };
}
