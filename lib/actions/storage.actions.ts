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
export async function updateStorage(id, asiakas) {
    connectMongoDB();

    const storageQuery = Storage.findOneAndUpdate(
        { asiakas: asiakas },
        {
            $set: {
                "asiakas": "Asiakas 12",
                "varastot": [
                    {
                        "nimi": "Espoo2",
                        "varastonkoko": 202,
                        "viimejakelu": "12.10.20222",
                    }
                ]
            }
        }

    );
    const storages = await storageQuery.exec();
    console.log("Updated")
}