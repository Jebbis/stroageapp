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
    console.log(id)
    const storageQuery = Storage.findById(id.id);
    const storages = await storageQuery.exec();
    return storages;
}
export async function fetchStorageDetails(id) {

    const storageQuery = Storage.find({
        "storages._id": id.id
    },
        { "storages.$": 1 });
    const storages = await storageQuery.exec();
    return storages;
}
export async function updateStorage(id, storageData) {

    const storageQuery = Storage.findOneAndUpdate(
        { "storages._id": id },
        {
            $set: {
                "storages": [
                    {
                        "storageName": storageData.storageName,
                        "storageCapacity": storageData.storageCapacity,
                        "address": {
                            "streetName": storageData.address.streetName,
                            "city": storageData.address.city,
                            "postcode": storageData.address.postcode
                        },
                        "deliveryInstructions": storageData.deliveryInstructions,
                        "note": storageData.note,
                    }
                ]
            }
        }

    );
    const storage = await storageQuery.exec();
    console.log("ModifiedCount: " + storage.modifiedCount);
    console.log("MatchedCount: " + storage.matchedCount);
    console.log("Updated: " + id)
}
export async function createCustomer(storageData) {

    const storageQuery = await Storage.create(storageData);

    console.log(storageQuery);
}
export async function createStorage(storageData, clientName) {

    const storageQuery = await Storage.updateOne({ clientName: clientName },
        { $push: { storages: storageData } }, { upsert: false });
    console.log("ModifiedCount: " + storageQuery.modifiedCount);
    console.log("MatchedCount: " + storageQuery.matchedCount);
    console.log("ClientName: " + clientName);
}
export async function removeStorage(id) {
    console.log("Removing entry: " + id)
    const storageQuery = await Storage.updateOne({ "storages._id": id }, {
        $pull: { storages: { _id: id } }
    });
    console.log({ storages: [{ _id: id }] });
    console.log("ModifiedCount: " + storageQuery.modifiedCount);
    console.log("MatchedCount: " + storageQuery.matchedCount);
}