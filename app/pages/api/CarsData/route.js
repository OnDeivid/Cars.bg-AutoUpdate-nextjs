import { encryptPassword } from "@/app/utils/crypto";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const maxDuration = 60

export async function POST(req) {
    const { userEmail, carsEmail, password, confirmPassword, phoneNumber } = await req.json();

    if (password !== confirmPassword) {
        console.log('password missmatch')
        return new Response(
            JSON.stringify({ success: false, error: "Passwords do not match" }),
            { status: 400 }
        );
    }

    try {
        const data = await prisma.user.findFirst({ where: { email: userEmail }, select: { id: true } });

        const userId = data.id.toString()

        const hashedPassword = await encryptPassword(password)

        const newEntry = await prisma.carsData.create({
            data: { userId, userEmail, carsEmail, password: hashedPassword, updatedToday: false, phoneNumber },
        });
    } catch (err) {
        console.log('Error')
    }

    return new Response(JSON.stringify({ success: true }), { status: 201 });

}
