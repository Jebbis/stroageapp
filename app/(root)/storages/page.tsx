import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import Searchbar from "@/components/shared/Searchbar";
import Pagination from "@/components/shared/Pagination";
import StorageCard from "@/components/cards/StorageCard";

import { placeStorages } from "@/constants";

async function Page() {
  return (
    <>
      <h1 className="head-text">Storages</h1>

      <div className="mt-5">
        <Searchbar routeType="storages" />
      </div>

      <section className="mt-9 flex flex-wrap gap-4">
        {placeStorages.length === 0 ? (
          <p className="no-result">No Result</p>
        ) : (
          <>
            {placeStorages.map((asiakas) =>
              asiakas.varastot.map((varasto) => (
                <StorageCard
                  key={varasto.nimi}
                  id={asiakas.id}
                  name={varasto.nimi}
                  client={asiakas.asiakas}
                  capacity={varasto.varastonkoko}
                  lastDelivery={varasto.viimejakelu}
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
