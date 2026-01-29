import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext<
  | {
      localUsers: User[];
      setLocalUsers: React.Dispatch<React.SetStateAction<User[]>>;
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
    if (localUsers.length > 0) {
      localStorage.setItem("users", JSON.stringify(localUsers));
    }
  }, [localUsers]);

  return (
    <UserContext.Provider value={{ localUsers, setLocalUsers }}>
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
