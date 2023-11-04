import connectMongoDB from "../../../lib/mongodb";
import Storage from "@/models/storage";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { asiakas, varastot } = await request.json();
    await connectMongoDB();
    console.log("%j", request.json);
    await Storage.create({ asiakas, varastot });
    return NextResponse.json({ message: "Client added", asiakas: asiakas });
}

export async function GET() {
    await connectMongoDB();
    const storages = await Storage.find();
    console.log("Get request");
    return NextResponse.json({ storages });
}