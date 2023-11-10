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

export async function GET() {
    await connectMongoDB();
    const storages = await Storage.find();
    console.log("Get request");
    return NextResponse.json({ storages });
}