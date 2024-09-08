import { useState, useEffect } from "react";
import { User } from "../types";
import { fetchUsers } from "../services/fetchUsers";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async (): Promise<void> => {
    fetchUsers<User[]>().then((newUsers) => setUsers([...users, ...newUsers]));
  };

  const addUser = async (user: User): Promise<void> => {
    const options = {
      method: "POST",
      body: JSON.stringify({ ...user }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    fetchUsers<User>(options).then((newUser) => setUsers([...users, newUser]));
  };

  return { users, loadUsers, addUser };
};
