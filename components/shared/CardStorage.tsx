"use server";

import React from "react";
import { fetchStorage } from "@/lib/actions/storage.actions";
import { Button } from "../ui/button";
import StorageCard from "@/components/cards/StorageCard";

async function CardStorage() {
  const storages = await fetchStorage();
  return (
    <div>
      <section className="mt-9 flex flex-wrap gap-4 p-4">
        {storages.length === 0 ? (
          <p className="no-result">No Result</p>
        ) : (
          <>
            {storages.map((client) =>
              client.varastot.map((storage) => (
                <StorageCard
                  client={client.asiakas}
                  id={client._id}
                  key={storage.nimi}
                  name={storage.nimi}
                  capacity={storage.varastonkoko}
                  lastDelivery={storage.viimejakelu}
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
