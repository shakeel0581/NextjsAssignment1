import { PrismaClient } from '@prisma/client';
import { NextResponse, NextRequest } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next";

export async function GET( req: NextApiRequest, res: NextApiResponse<Data>) {
    const prisma = new PrismaClient()
    const result = await prisma.BlogPost.findMany();
  return NextResponse.json({ message: "Hello World", status: 200, data: result });
}

