import { currentUser } from "@clerk/nextjs";
import CreateCustomer from "@/components/forms/CreateCustomer";

async function Page() {
  const user = await currentUser();
  if (!user) return null;

  return (
    <>
      <h1 className="head-text">Add a new client</h1>

      <CreateCustomer />
    </>
  );
}

export default Page;
