import React from "react";
import { fetchDetails } from "@/lib/actions/storage.actions";

async function CardDetails(id) {
  console.log("Fetching details for: " + id.id);
  const storageObject = await fetchDetails(id);
  return (
    <>
      <section className="mt-9 flex flex-wrap gap-4">
        <div>
          {storageObject.storages.map((storageArray) => (
            <div className="p-4 max-w-sm">
              <div className="flex rounded-xl h-full dark:bg-gray-800 bg-dark-2 p-8 flex-col">
                <div className="flex flex-col justify-between flex-grow">
                  <p className="leading-relaxed text-base text-white dark:text-gray-300">
                    Storage Name: {storageArray.storageName}
                  </p>
                  <p className="leading-relaxed text-base text-white dark:text-gray-300">
                    Storage size: {storageArray.storageCapacity} %
                  </p>
                  <p className="leading-relaxed text-base text-white dark:text-gray-300">
                    Location: {(storageArray.address.streetName + ", " + storageArray.address.city + ", " + storageArray.address.postcode)}
                  </p>
                  <a
                    href={"/storagedetails/" + storageArray._id}
                    className="text-light-2 hover:text-red-500 inline-flex items-center border-2 rounded-lg p-3 mt-5"
                  >
                    View details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default CardDetails;
