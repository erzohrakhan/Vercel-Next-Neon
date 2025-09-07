import Image from "next/image";
import { HelloDB } from "./lib/db";

export default async function Home() {
  const time = await HelloDB();
  return (
    <div>
      <h2>{time}</h2>
    </div>
  );
}
