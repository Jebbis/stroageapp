import { currentUser } from "@clerk/nextjs";
import CreateStoragenew from "@/components/forms/CreateStorage mongo version";
import { fetchDetails } from "@/lib/actions/storage.actions";

async function Page({ params }: { params: { id: string } }) {
  const user = await currentUser();
  console.log("Received params: " + params.id)
  let id = { id: params.id };
  const storageObject = await fetchDetails(id);
  if (!user) return null;

  if (!params.id) return null;
  console.log("StorageObject: " + storageObject)
  return (
    <>
      <h1 className="head-text">Creating new storage for {storageObject.clientName}</h1>

      <CreateStoragenew
        client={storageObject.clientName}
        id={storageObject._id}
        storages={(storageObject.storages.length)} />
    </>
  );
}

export default Page;
