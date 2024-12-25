import { encryptPassword } from "@/app/utils/crypto";
import { PrismaClient } from "@prisma/client";
import { ConsoleMessage } from "puppeteer-core";

const prisma = new PrismaClient();
export const maxDuration = 60

export async function POST(req) {
    const { userEmail, carsEmail, password, confirmPassword } = await req.json();
    if (password !== confirmPassword) {
        return new Response(
            JSON.stringify({ success: false, error: "Passwords do not match" }),
            { status: 400 }
        );
    }

    try {


        const data = await prisma.user.findFirst({ where: { email: userEmail }, select: { id: true } });

        const userId = data.id.toString()
        console.log(typeof userId)

        const hashedPassword = await encryptPassword(password)
        const id = userId

        const newEntry = await prisma.carsData.create({
            userId: "user123",
            userEmail: "user@example.com",
            carsEmail: "cars@example.com",
            password: "securepassword",
            confirmPassword: "securepassword",
            updatedToday: true,
            updateError: null,
        });
        console.log('sccess!')
    } catch (err) {
        console.log(err)
    }



    return new Response(JSON.stringify({ success: true }), { status: 201 });

}
