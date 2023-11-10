import mongoose, { Schema } from "mongoose";

const storageSchema = new Schema(
    {
        asiakas: String,
        varastot: [
            {
                nimi: String,
                varastonkoko: Number,
                viimejakelu: String
            }
        ]
    }
);

const Storage = mongoose.models.Storage || mongoose.model("Storage", storageSchema);

export default Storage;