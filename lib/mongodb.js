"use server";
import mongoose from "mongoose";

let isConnected = false;
const connectMongoDB = async () => {

    if (!isConnected) {
        try {
            await mongoose.connect(process.env.MONGODB_URL);
            isConnected = true;
            console.log("Connect to Mongo success");
        } catch (error) {
            console.log(error)
        }
    }
};

export default connectMongoDB;