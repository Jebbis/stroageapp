"use server";

import React from "react";
import { fetchStorage } from "@/lib/actions/storage.actions";
import { Button } from "../ui/button";
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
            {storages.map((clientName) =>
              clientName.storages.map((varasto) => (
                <StorageCard
                  client={clientName.clientName}
                  id={clientName._id}
                  key={varasto.storageName}
                  name={varasto.storageName}
                  capacity={varasto.storageCapacity}
                  lastDelivery={varasto.lastDelivery}
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
