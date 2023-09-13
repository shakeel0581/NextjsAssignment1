import { PrismaClient } from '@prisma/client';
import { NextResponse, NextRequest } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next";

export async function POST( req: NextApiRequest, res: NextApiResponse<Data>) {
    const data = await req.json();
    const prisma = new PrismaClient()
    const { enteredTitle, enteredName, enteredPostDescription, thumbnail } = data; 

    const date =  Date();
    const Idd = await new Date().toISOString();

    const result = await prisma.BlogPost.create({ 
    data: { 
        title: enteredTitle, 
        author: enteredName, 
        description: enteredPostDescription, 
        pubDate: Idd,
        thumbnail: thumbnail
    } 
    }) 
  return NextResponse.json({ message: "Hello World", status: 200 });
}

