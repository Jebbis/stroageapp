import React from "react";
import { fetchDetails } from "@/lib/actions/storage.actions";

async function CardDetails(id) {
  console.log("Fetching details for: " + id.id);
  const storage = await fetchDetails(id);
  return (
    <div>
      <div key={storage._id} className="p-4 max-w-sm">
        <div className="flex rounded-xl h-full dark:bg-gray-800 bg-dark-2 p-8 flex-col">
          <div className="flex items-center mb-3">
            <h2 className="text-white dark:text-white text-lg font-medium">
              Storage ID: {storage.clientName}
            </h2>
            <div className=" ml-5 w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0"></div>
          </div>
          {storage.storages.map((t) => (
            <div className="flex flex-col justify-between flex-grow">
              <p className="leading-relaxed text-base text-white dark:text-gray-300">
                Name: {t.storageName}
              </p>
              <p className="leading-relaxed text-base text-white dark:text-gray-300">
                Storage size: {t.storageCapacity} %
              </p>
              <p className="leading-relaxed text-base text-white dark:text-gray-300">
                Last delivery: {t.lastDelivery}
              </p>
            </div>
          ))}
          <a
            href={"/edit/" + storage.id}
            className="text-light-2 hover:text-red-500 inline-flex items-center border-2 rounded-lg p-3 mt-5"
          >
            Edit
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
