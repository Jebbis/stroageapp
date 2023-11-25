import React from "react";
import { fetchStorageDetails } from "@/lib/actions/storage.actions";
import Table from "./Table";

async function DeliveryHistory(id) {
  const storageObject = await fetchStorageDetails(id);
  let deliveryData2 = await JSON.stringify(storageObject.map((storageObject) => storageObject.storages.map((storageArray) => storageArray.deliverys.map((deliveryArray => deliveryArray)))));
  return (
    <div>
      <div className="head-text text-left mt-10">Delivery History</div>
      <Table id={deliveryData2} />
    </div>
  );
}

export default DeliveryHistory;
