import React, { createContext, useEffect, useState, type ReactNode } from "react";
import type { User } from "../schemas/userSchema";
import { userService } from "../services/userService";

export interface UsersContextData {
  users: User[];
}

export const UsersContext = createContext<UsersContextData>({
  users: [],
});

interface UsersContextProviderProps {
  children: ReactNode;
}

export const UsersContextProvider: React.FC<UsersContextProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    userService.getUsers()
      .then(setUsers)
      .catch(err => console.error("Erro ao buscar usuários:", err));
  }, []);

  return (
    <UsersContext.Provider value={{ users }}>
      {children}
    </UsersContext.Provider>
  );
};
