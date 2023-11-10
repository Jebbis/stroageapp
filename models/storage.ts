import mongoose, { Schema } from "mongoose";

const storageSchema = new Schema(
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

const Storage = mongoose.models.Storage || mongoose.model("Storage", storageSchema);

export default Storage;