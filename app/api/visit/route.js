import connectToDb from "@/lib/connectToDb"
import visiterSchema from '@/model/visiter';
import { NextResponse } from "next/server";

export const POST = async (request) => {
    const {visit} = await request.json()
    await connectToDb();
    console.log(visit)
    await visiterSchema.create({visit:visit})
    const res = await visiterSchema.find()
    return new NextResponse(JSON.stringify({message:"ok", res}),{status:200})
}