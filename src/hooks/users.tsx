import { useUsersQuery } from "@/api/users";
import { useUsersContext } from "@/contexts/users-context";
import { toast } from "sonner";

export function useAllUsers() {
  const { data: apiUsers, error, isLoading } = useUsersQuery();
  const { localUsers, deleteLocalUser } = useUsersContext();

  function onDeleteUser(id: string) {
    const localUser = localUsers.find((user) => user.id === id);
    if (localUser) {
      deleteLocalUser(id);
      toast.success("Użytkownik lokalny usunięty pomyślnie");
    } else {
      // apiUsers?.filter((user) => user.id === id);
      toast.success("Użytkownik z API usunięty pomyślnie (z UI)");
    }
  }

  const allUsers = [...(apiUsers || []), ...localUsers];

  return { allUsers, error, isLoading, onDeleteUser };
}
