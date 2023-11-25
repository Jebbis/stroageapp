"use server";
import mongoose from "mongoose";
import connectMongoDB from "@/lib/mongodb";
import Storage from "@/models/storage";
connectMongoDB();

export async function fetchStorage() {

    const storageQuery = Storage.find();
    const storages = await storageQuery.exec();

    return storages;

}
export async function fetchDetails(id) {

    const storageQuery = Storage.findById(id.id);
    const storages = await storageQuery.exec();
    console.log(storages);
    return storages;
}
export async function fetchStorageDetails(id) {

    const storageQuery = Storage.find({
        "storages._id": id.id
    },
        { "storages.$": 1 });
    //const storages = await Storage.find(objectIdToFind).populate("storages")
    const storages = await storageQuery.exec();
    return storages;
}
export async function updateStorage(id, clientName) {

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
export async function createStorage2(storageData) {

    const storageQuery = await Storage.create(storageData);

    console.log(storageQuery);
}
export async function createStorage(storageData) {

    const storageQuery = await Storage.updateOne({ clientName: storageData.clientName }, storageData, { upsert: false });
    console.log("ModifiedCount: " + storageQuery.modifiedCount);
    console.log("MatchedCount: " + storageQuery.matchedCount);
    console.log("ClientName: " + storageData.clientName);
}