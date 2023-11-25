import mongoose, { Schema } from "mongoose";

const storageSchemaold = new Schema(
    {
        clientName: String,
        storages: [
            {
                storageName: String,
                storageCapacity: Number,
                lastDelivery: String,
                details: String
            }
        ]
    }
);

const storageSchema = new Schema(
    {
        clientName: String,
        clientNote: String,
        storages: [
            {
                storageName: String,
                storageCapacity: Number,
                address: {
                    streetName: String,
                    city: String,
                    postcode: String
                },
                deliveryInstructions: String,
                note: String,
                deliverys: [
                    {
                        deliveryId: String,
                        deliveryDate: String,
                        deliveryNote: String
                    }
                ]

            }
        ]
    }
)

const Storage = mongoose.models.Storage || mongoose.model("Storage", storageSchema);

export default Storage;