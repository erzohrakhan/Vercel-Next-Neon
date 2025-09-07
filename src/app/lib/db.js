"use server";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

export async function HelloDB() {
  const [dbresponse] = await sql`SELECT now();`;
  console.log(JSON.stringify(dbresponse));
  return JSON.stringify(dbresponse);
}
