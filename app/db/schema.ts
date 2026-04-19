import { integer, pgEnum, pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const userRole = pgEnum("userRole", ["Admin", "Basic"]);

export const userTable = pgTable("user_table", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 50 }).notNull(),
  age: integer("age").notNull(),
  email: varchar("email", { length: 90 }).notNull(),
  userRole: userRole("userRole").default("Basic").notNull(),
});
