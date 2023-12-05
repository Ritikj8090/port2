
import connectToDb from "@/lib/connectToDb";
import project from "@/model/project";
import { NextResponse } from "next/server";

export const PUT = async (request,{params:{id}}) => {
    try {
        const {number, name, gitlink, weblink, description, image, tech, mainImage} = await request.json()
        await connectToDb();
        await project.findOneAndUpdate({_id: id}, {number, name, gitlink, weblink, description, image, tech, mainImage})
        const res = await project.findById(id);
        return new NextResponse(JSON.stringify({message:"ok", res}))
        
    } catch (error) {
        console.log(error)
    }
}

export const DELETE = async (request,{params:{id}}) => {
    try {
        await connectToDb();
        await project.deleteOne({_id: id});
        const res = await project.findById(id);
        return new NextResponse(JSON.stringify({message:"DELETED"}))
        
    } catch (error) {
        console.log(error)
    }
}

export const GET = async (request,{params:{id}}) => {
    try {
        await connectToDb();
         const res = await project.findOne({_id: id});
        return new NextResponse(JSON.stringify({message:"ok", res}))
        
    } catch (error) {
        console.log(error)
    }
}
