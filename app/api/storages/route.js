import connectMongoDB from "../../../lib/mongodb";
import Storage from "@/models/storage.ts";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { clientName, storages } = await request.json();
    await connectMongoDB();
    console.log("%j", request.json);
    await Storage.create({ clientName, storages });
    return NextResponse.json({ message: "Client added", clientName: clientName });
}

// export async function GET() {
//     await connectMongoDB();
//     const storages = await Storage.find();
//     console.log("Get request");
//     return NextResponse.json({ storages });
// }
export async function GET() {
    await connectMongoDB();
    const objectIdToFind = "654e3236d81e04c7a4a0e579";
    const storages = await Storage.find({
        "storages._id": objectIdToFind
    }, {
        "storages.$": 1
    });
    console.log(JSON.stringify(storages));
    return NextResponse.json({ storages });
}
