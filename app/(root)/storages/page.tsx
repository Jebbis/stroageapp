import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import Searchbar from "@/components/shared/Searchbar";
import Pagination from "@/components/shared/Pagination";
import StorageCard from "@/components/cards/StorageCard";
import { fetchStorage } from "@/lib/actions/storage.actions";

import { placeStorages } from "@/constants";

async function Page() {
  const storages = await fetchStorage();

  return (
    <>
      <h1 className="head-text">Storages</h1>

      <div className="mt-5">
        <Searchbar routeType="storages" />
      </div>

      <section className="mt-9 flex flex-wrap gap-4">
        {storages.length === 0 ? (
          <p className="no-result">No Result</p>
        ) : (
          <>
            {storages.map((storageObject) =>
              storageObject.storages.map((storageArray) => (
                <StorageCard
                  client={storageObject.clientName}
                  id={storageObject._id}
                  key={storageArray._id}
                  name={storageArray.storageName}
                  capacity={storageArray.storageCapacity}
                />
              ))
            )}
          </>
        )}
      </section>
    </>
  );
}

export default Page;
