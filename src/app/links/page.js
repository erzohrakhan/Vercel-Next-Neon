import { getData } from "../api/todoActions";
import Todos from "./todos";

export default async function Home() {
  const data = await getData();
  return <Todos todos={data} />;
}

// import LinksCreateForm from "./LinksCreateForm";
// export default function LinksPage() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <LinksCreateForm />
//     </main>
//   );
// }
