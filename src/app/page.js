import { getData } from "./api/todoActions";
import Todos from "./links/todos";

export default async function Home() {
  const data = await getData();
  return <Todos todos={data} />;
}
// import Image from "next/image";
// import { HelloDB } from "./lib/db";

// export default async function Home() {
//   const time = await HelloDB();
//   return (
//     <div>
//       <h2>{time}</h2>
//     </div>
//   );
// }
