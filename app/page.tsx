import { getUsers } from "@db/action";

export default async function Home() {
  await getUsers();

  return <div></div>;
}

