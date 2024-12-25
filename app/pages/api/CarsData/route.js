import { encryptPassword } from "@/app/utils/crypto";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const maxDuration = 60

export async function POST(req) {
    const { userEmail, carsEmail, password, confirmPassword } = await req.json();
    console.log(userEmail, carsEmail, password)
    if (password !== confirmPassword) {
        return new Response(
            JSON.stringify({ success: false, error: "Passwords do not match" }),
            { status: 400 }
        );
    }

    const data = await prisma.user.findUnique({ where: { email: userEmail }, select: { id: true } });
    const userId = data?.id
    console.log(data)
    const hashedPassword = await encryptPassword(password)


    const newEntry = await prisma.carsData.create({
        data: { userId, userEmail, carsEmail, password: hashedPassword, confirmPassword, updatedToday: false, },
    });

    console.log(newEntry)

    return new Response(JSON.stringify({ success: true }), { status: 201 });

}
