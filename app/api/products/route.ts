import { NextResponse } from "next/server";
import prisma from "@/utils/db";

export async function GET() {
  try {
    console.log("Attempting to fetch products...");
    const products = await prisma.product.findMany({
      include: {
        category: true,
      },
    });
    return NextResponse.json(products);
  } catch (error: any) {
    console.error("Database connection error:", error);
    return new NextResponse("Error fetching products", { status: 500 });
  }
}
