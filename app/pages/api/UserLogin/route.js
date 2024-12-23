import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";

export async function POST(req) {

    const { userEmail } = await req.json();
    const prisma = new PrismaClient();
    try {

        const userDataCars = await prisma.carsData.findUnique({
            where: { userEmail: userEmail },
            select: {
                userId: true,
                userEmail: true,
                carsEmail: true,
            },
        });
        return new Response(JSON.stringify(userDataCars), { status: 200 });
    } catch (error) {
        console.error("Error in GET handler:", error);
        return new Response(JSON.stringify({ error: error.message || "An error occurred" }), { status: 500 });
    }
}
