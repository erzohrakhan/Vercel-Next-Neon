import {
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
  boolean,
} from "drizzle-orm/pg-core";

export const LinksTable = pgTable("links", {
  id: serial("id").primaryKey().notNull(),
  url: text("url").notNull(),
  short: varchar(60),
  createdAt: timestamp("created_at").defaultNow(),
});

export const todo = pgTable("todo", {
  id: serial("id").primaryKey().notNull(),
  text: text("text").notNull(),
  done: boolean("done").default(false).notNull(),
});
