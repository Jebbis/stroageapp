import UpdateStorage from "@/components/forms/UpdateStorage";
import { fetchStorageDetails } from "@/lib/actions/storage.actions";

async function page({ params }: { params: { id: string } }) {
  if (!params.id) return null;
  let id = { id: params.id };
  const storageObject = await fetchStorageDetails(id);
  console.log(storageObject);
  return (
    <div>
      <h1 className="head-text text-left">Editing</h1>
      {storageObject.map((storageObject) =>
        storageObject.storages.map((storageArray) => (
          <div>
            <UpdateStorage
              id={params.id}
              client={storageObject.clientName}
              storageName={storageArray.storageName}
              storageCapacity={storageArray.storageCapacity}
              streetName={storageArray.address.streetName}
              city={storageArray.address.city}
              postcode={storageArray.address.postcode}
              deliveryInstructions={storageArray.deliveryInstructions}
              note={storageArray.note}
            />
          </div>
        )))
      }
    </div>
  );
}

export default page;