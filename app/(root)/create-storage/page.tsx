import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import CreateStorage from "@/components/forms/CreateStorage";
import CreateStoragenew from "@/components/forms/CreateStorage mongo version";

async function Page(id) {
  const user = await currentUser();
  console.log("Received params: " + id)

  if (!user) return null;

  if (!id) id = "";

  return (
    <>
      <h1 className="head-text">Create New Storage</h1>

      <CreateStoragenew />
    </>
  );
}

export default Page;
