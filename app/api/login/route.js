import connectToMongodb from "@/lib/mongodb/mongodb";
import Signup from "../db/mongo";
import { NextResponse } from "next/server";

connectToMongodb();

export async function POST(req) {
    const data = await req.json();

    try {
        const user = await Signup.findOne({ username: data.username });
        if (user) {
            console.log(user);
        } else {
            console.log("no user");
        }
    } catch (error) {
        console.log("Error while finding user");
    }

    return new Response(JSON.stringify('Hello'));
}
