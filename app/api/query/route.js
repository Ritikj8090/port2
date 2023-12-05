import connectToDb from "@/lib/connectToDb";
import Email  from "@/model/email";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    try {
        const { name, email, body } = await request.json();
        await connectToDb();
        await Email.create({ name, email, body, date: new Date() });
        return new NextResponse(JSON.stringify({message:"ok"}), {status:200})
        
    } catch (error) {
        console.log(error)
    }
}