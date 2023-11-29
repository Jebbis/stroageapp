"use server";

import React from "react";
import { fetchStorage } from "@/lib/actions/storage.actions";
import StorageCard from "@/components/cards/StorageCard";
function redirect(path) {
  window.location.href = "details/" + path;
}

async function CardStorage() {
  const storages = await fetchStorage();

  return (
    <div>
      <section className="mt-9 flex flex-wrap gap-4 p- justify-center">
        {storages.length === 0 ? (
          <p className="no-result">No Result</p>
        ) : (
          <>
            {storages.map((storageObject) =>
              storageObject.storages.map((storageArray) => (
                <StorageCard
                  client={storageObject.clientName}
                  id={storageArray._id}
                  key={storageArray._id}
                  name={storageArray.storageName}
                  capacity={storageArray.storageCapacity}
                />
              ))
            )}
          </>
        )}
      </section>
    </div>
  );
}

export default CardStorage;
