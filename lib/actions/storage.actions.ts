"use server";

import connectMongoDB from "@/lib/mongodb";
import Storage from "@/models/storage";

export async function fetchStorage() {
    connectMongoDB();

    const storageQuery = Storage.find();
    const storages = await storageQuery.exec();

    return storages;

}
export async function fetchDetails(id) {
    connectMongoDB();

    const storageQuery = Storage.findById(id.id);
    const storages = await storageQuery.exec();

    return storages;
}
export async function updateStorage(id, clientName) {
    connectMongoDB();

    const storageQuery = Storage.findOneAndUpdate(
        { clientName: clientName },
        {
            $set: {
                "clientName": "clientName 12",
                "storages": [
                    {
                        "storageName": "Espoo2",
                        "storageCapacity": 202,
                        "lastDelivery": "12.10.20222",
                    }
                ]
            }
        }

    );
    const storages = await storageQuery.exec();
    console.log("Updated")
}