"use client"
import React from "react";
import { removeStorage } from "@/lib/actions/storage.actions";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

interface Props {
  id: string;
  client: string;
  storageName: string;
  storageCapacity: string;
  streetName: string;
  city: string;
  postcode: string;
  deliveryInstructions: string;
  note: string;
}

function CardDetails({ id, client, storageName, storageCapacity, streetName, city, postcode, deliveryInstructions, note }: Props) {

  const onSubmit = async => {
    console.log("Remove confirmed for: " + id);
    removeStorage(id);
    const router = useRouter();
    router.push("/customers/");
  };

  return (
    <div>
      <div className="flex rounded-xl h-full dark:bg-gray-800 bg-dark-2 p-8 flex-col">
        <div className="flex items-center mb-3">
          <h2 className="text-white dark:text-white text-lg font-medium">
            <div className="flex flex-col justify-between flex-grow">
              <div>
                <p className="leading-relaxed text-base text-white dark:text-gray-300">
                  Name: {storageName}
                </p>
                <p className="leading-relaxed text-base text-white dark:text-gray-300">
                  Storage size: {storageCapacity} %
                </p>
                <p className="leading-relaxed text-base text-white dark:text-gray-300">
                  Location:{" "}
                  {streetName +
                    ", " +
                    city +
                    ", " +
                    postcode}
                </p>
                <p className="leading-relaxed text-base text-white dark:text-gray-300">
                  Delivery Instructions: {deliveryInstructions}
                </p>
                <p className="leading-relaxed text-base text-white dark:text-gray-300">
                  Note: {note}
                </p>
              </div>
            </div>
          </h2>
          {" "}
        </div>
        <form
          onSubmit={onSubmit}
          className="flex flex-col justify-start gap-10 mt-10"
        >
          <Button type="submit" className="bg-primary-500">
            Confirm Remove
          </Button>
        </form>
      </div>
    </div>
  );
}

export default CardDetails;
