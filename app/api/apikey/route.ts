import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma";


export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const created = await prisma.aPIKEY.create({ data })
    return NextResponse.json(created, { status: 201 })
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 400 })
  }
} 