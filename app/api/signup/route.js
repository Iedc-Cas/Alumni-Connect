import mongoose from "mongoose";
import Singup from "../db/mongo";
import { NextResponse } from "next/server";

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("connected"))
    .catch(() => console.log("Error while connecting"));

export async function POST(req) {
    const data = await req.formData();

    const register = new Singup({
        emial: data.get("email"),
        username: data.get("username"),
        password: data.get("password"),
    });
    const _response = await register.save();
    console.log(_response);

    return NextResponse.json(_response);
}
