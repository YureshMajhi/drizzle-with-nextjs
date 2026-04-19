"use server";

import { db } from "@db/index";
import { userTable } from "@db/schema";

export async function getUsers() {
  const result = await db.select().from(userTable);
  console.log(result);
}
