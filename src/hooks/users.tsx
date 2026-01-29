import { useUsersQuery } from "@/api/users";
import { useUsersContext } from "@/contexts/users-context";

export function useAllUsers() {
  const { data: apiUsers, error, isLoading } = useUsersQuery();
  const { localUsers } = useUsersContext();

  const allUsers = [...(apiUsers || []), ...localUsers];

  return { allUsers, error, isLoading };
}
