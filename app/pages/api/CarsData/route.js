import { encryptPassword } from "@/app/utils/crypto";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
    try {
        const { userEmail, carsEmail, password, confirmPassword } = await req.json();

        if (password !== confirmPassword) {
            return new Response(
                JSON.stringify({ success: false, error: "Passwords do not match" }),
                { status: 400 }
            );
        }

        const data = await prisma.user.findUnique({ where: { email: userEmail }, select: { id: true } });
        const userId = data.id

        const hashedPassword = await encryptPassword(password)

        const newEntry = await prisma.carsData.create({
            data: { userId, userEmail, carsEmail, password: hashedPassword, confirmPassword, updatedToday: false, },
        });


        return new Response(JSON.stringify({ success: true, data: newEntry }), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error }), { status: 500 });
    }
}
