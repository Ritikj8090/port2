
import connectToDb from "@/lib/connectToDb"
import visiterSchema from '@/model/visiter';
import { NextResponse } from "next/server";

export const GET = async (request, {params:{id}}) => {
    await connectToDb();
    const visit = await visiterSchema.findOne({_id:id})
    return new NextResponse(JSON.stringify({message:"ok", visit}),{status:200})
}

export const PUT = async (request, {params:{id}}) => {
    const {visit} = await request.json();
    await connectToDb();
    await visiterSchema.findByIdAndUpdate(id, {visit:visit});
    const res = await visiterSchema.findOne({_id:id})
    return new NextResponse(JSON.stringify({message:"ok", data:res}),{status:200})
  };

  