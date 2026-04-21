"use client";

import { User } from "@/app/lib/definitions";
import { addUser, getUsers } from "@/db/action";
import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  const addUserInfo = async () => {
    await addUser();
  };

  useEffect(() => {
    const getAllUsers = async () => {
      const result = await getUsers();
      if (result) {
        setUsers(result);
      }
    };

    getAllUsers();
  }, []);

  return (
    <div>
      <button onClick={addUserInfo}>Add User</button>

      {users.map((user) => (
        <p key={user.id}>
          {user.name} -- {user.email}
        </p>
      ))}
    </div>
  );
}

