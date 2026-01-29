import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext<
  | {
      localUsers: User[];
      setLocalUsers: React.Dispatch<React.SetStateAction<User[]>>;
      deleteLocalUser: (id: string) => void;
    }
  | undefined
>(undefined);

function UsersProvider({ children }: { children: React.ReactNode }) {
  const [localUsers, setLocalUsers] = useState<User[]>([]);

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      //eslint-disable-next-line
      setLocalUsers(JSON.parse(storedUsers));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(localUsers));
  }, [localUsers]);

  function deleteLocalUser(id: string) {
    setLocalUsers((prev) => {
      const updated = prev.filter((user) => user.id !== id);
      localStorage.setItem("users", JSON.stringify(updated));
      return updated;
    });
  }

  return (
    <UserContext.Provider
      value={{ localUsers, setLocalUsers, deleteLocalUser }}
    >
      {children}
    </UserContext.Provider>
  );
}

function useUsersContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUsersContext must be used within a UsersProvider");
  }
  return context;
}

//eslint-disable-next-line
export { UsersProvider, useUsersContext };
