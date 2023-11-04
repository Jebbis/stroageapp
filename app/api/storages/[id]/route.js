import connectMongoDB from "@/lib/mongodb";
import Storage from "@/models/storage"
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = params;
    const { newAsiakas: asiakas, newVarastot: varastot } = await request.json();
    await connectMongoDB();
    await Storage.findByIdAndUpdate(id, { asiakas, varastot });
    return NextResponse.json({ message: "Client Updated" });
}