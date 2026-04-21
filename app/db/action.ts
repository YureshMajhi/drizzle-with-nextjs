"use server";

import { userTable } from "@/db/schema";
import { db } from "@/db/index";

export async function addUser() {
  try {
    const user = await db
      .insert(userTable)
      .values({ email: "test2@gmail.com", name: "Second Test" })
      .returning({
        id: userTable.id,
        name: userTable.name,
        email: userTable.email,
      });

    console.log(user);
  } catch (error) {
    console.log(error);
  }
}

export async function getUsers() {
  try {
    const users = await db.select().from(userTable);
    return users;
  } catch (error) {
    console.log(error);
  }
}
