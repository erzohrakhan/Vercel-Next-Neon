import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import dotenv from "dotenv";

//neonConfig.fetchConnectionCache = true;
dotenv.config({ path: ".env.local" });
const sql = neon(process.env.DATABASE_URL);

export const db = drizzle(sql);
export async function HelloDB() {
  const [dbresponse] = await sql`SELECT now();`;
  console.log(JSON.stringify(dbresponse));
  return JSON.stringify(dbresponse);
}
