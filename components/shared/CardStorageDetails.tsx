import React from "react";
import { fetchStorageDetails } from "@/lib/actions/storage.actions";
import DeliveryHistory from "@/components/cards/DeliveryHistory";

async function CardDetails(id) {
  console.log("Fetching details for: " + id.id);
  console.log("Fetching details for: " + id);
  const storageObject = await fetchStorageDetails(id);

  return (
    <div>
      <div className="flex rounded-xl h-full dark:bg-gray-800 bg-dark-2 p-8 flex-col">
        <div className="flex items-center mb-3">
          <h2 className="text-white dark:text-white text-lg font-medium">
            <div className="flex flex-col justify-between flex-grow">
              {storageObject.map((storageObject) =>
                storageObject.storages.map((storageArray) => (
                  <div>
                    <p className="leading-relaxed text-base text-white dark:text-gray-300">
                      Name: {storageArray.storageName}
                    </p>
                    <p className="leading-relaxed text-base text-white dark:text-gray-300">
                      Storage size: {storageArray.storageCapacity} %
                    </p>
                    <p className="leading-relaxed text-base text-white dark:text-gray-300">
                      Location:{" "}
                      {storageArray.address.streetName +
                        ", " +
                        storageArray.address.city +
                        ", " +
                        storageArray.address.postcode}
                    </p>
                    <p className="leading-relaxed text-base text-white dark:text-gray-300">
                      Delivery Instructions: {storageArray.deliveryInstructions}
                    </p>
                    <p className="leading-relaxed text-base text-white dark:text-gray-300">
                      Note: {storageArray.note}
                    </p>
                  </div>
                ))
              )}
            </div>
          </h2>
          {" "}
        </div>
        <a
          href={"/edit/" + id.id}
          className="text-light-2 hover:text-red-500 inline-flex items-center border-2 rounded-lg p-3 mt-5"
        >
          Edit
        </a>
        <a
          href={"/storages/remove/" + id.id}
          className="text-light-2 hover:text-red-500 inline-flex items-center border-2 rounded-lg p-3 mt-5"
        >
          Remove
        </a>
      </div>
    </div>
  );
}

export default CardDetails;
