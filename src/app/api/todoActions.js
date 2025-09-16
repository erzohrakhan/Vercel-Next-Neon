"use server";

import { eq, not } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "../lib/db";
import { todo } from "../lib/schema";

export const getData = async () => {
  const data = await db.select().from(todo);
  return data;
};

export const addTodo = async (text) => {
  await db.insert(todo).values({
    text: text,
  });
};

export const deleteTodo = async (id) => {
  await db.delete(todo).where(eq(todo.id, id));

  revalidatePath("/");
};

export const toggleTodo = async (id) => {
  await db
    .update(todo)
    .set({
      done: not(todo.done),
    })
    .where(eq(todo.id, id));

  revalidatePath("/");
};

export const editTodo = async (id, text) => {
  await db
    .update(todo)
    .set({
      text: text,
    })
    .where(eq(todo.id, id));

  revalidatePath("/");
};
