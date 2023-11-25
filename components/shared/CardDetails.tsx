import React from "react";
import { fetchDetails } from "@/lib/actions/storage.actions";

async function CardDetails(id) {
  console.log("Fetching details for: " + id.id);
  const storageObject = await fetchDetails(id);
  return (
    <div>
      <div key={storageObject._id} className="p-4 max-w-sm">
        <div className="flex rounded-xl h-full dark:bg-gray-800 bg-dark-2 p-8 flex-col">
          <div className="flex items-center mb-3">
            <h2 className="text-white dark:text-white text-lg font-medium">
              Client name: {storageObject.clientName}
            </h2>
            <div className=" ml-5 w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0"></div>
          </div>
          {storageObject.storages.map((storageArray) => (
            <div className="flex flex-col justify-between flex-grow">
              <p className="leading-relaxed text-base text-white dark:text-gray-300">
                Name: {storageArray.storageName}
              </p>
              <p className="leading-relaxed text-base text-white dark:text-gray-300">
                Storage size: {storageArray.storageCapacity} %
              </p>
              <p className="leading-relaxed text-base text-white dark:text-gray-300">
                Last delivery: {storageArray.lastDelivery}
              </p>
              <a
                href={"/storagedetails/" + storageArray._id}
                className="text-light-2 hover:text-red-500 inline-flex items-center border-2 rounded-lg p-3 mt-5"
              >
                View details
              </a>
            </div>
          ))}
          <a
            href={"/edit/" + storageObject.id}
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
