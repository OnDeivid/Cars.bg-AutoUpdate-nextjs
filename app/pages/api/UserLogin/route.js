import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";

export async function POST(req) {

    const { userEmail } = await req.json();
    const prisma = new PrismaClient();
    const userDataCars = await prisma.carsData.findUnique({
        where: { userEmail: userEmail },
        select: {
            userId: true,
            userEmail: true,
            carsEmail: true,
        },
    });
    return new Response(JSON.stringify({ itsAddingNow: "yup" }), { status: 200 });

}
