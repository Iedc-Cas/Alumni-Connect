import connectToMongodb from "@/lib/mongodb/mongodb";
import Singup from "../../../lib/models/mongo";
import { NextResponse } from "next/server";

connectToMongodb();

export async function POST(req) {
    const data = await req.formData();

    const register = new Singup({
        emial: data.get("email"),
        username: data.get("username"),
        password: data.get("password"),
        idproof: data.get("id-proof"),
    });
    const _response = await register.save();
    console.log(_response);

    return NextResponse.json(_response);
}
