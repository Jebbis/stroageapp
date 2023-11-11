import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import CreateStorage from "@/components/forms/CreateStorage";
import CreateStoragenew from "@/components/forms/CreateStorage mongo version";

async function Page() {
  const user = await currentUser();
  if (!user) return null;

  return (
    <>
      <h1 className="head-text">Create New Storage</h1>

      <CreateStorage />
    </>
  );
}

export default Page;