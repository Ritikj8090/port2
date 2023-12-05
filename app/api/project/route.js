
import connectToDb from "@/lib/connectToDb"
import project from "@/model/project";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    await connectToDb();
    const res = await project.find() 
    return new NextResponse(JSON.stringify({message:"ok", res}))
}

export const POST = async (request) => {
    try {
        const {number, name, gitlink, weblink, description, image, tech, mainImage} = await request.json()
        await connectToDb();
        const res = await project.create({number, name, gitlink, weblink, description, image, tech, mainImage})
        return new NextResponse(JSON.stringify({message:"ok", res}))
        
    } catch (error) {
        console.log(error)
    }
}

