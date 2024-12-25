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

        const userId = "1234567890abcdef12345678"; // Example userId
        const userEmail = "user@example.com"; // Example userEmail
        const carsEmail = "cars@example.com"; // Example carsEmail
        const hashedPassword = "hashedpassword123"; // Example hashed password
        const confirmPassword = "hashedpassword123"; // Example confirmPassword

        const data = await prisma.user.findFirst({ where: { email: userEmail }, select: { id: true } });
        console.log(data)
        // const userId = data?.id

        // const hashedPassword = await encryptPassword(password)


        const newEntry = await prisma.carsData.create({
            data: { userId, userEmail, carsEmail, password: hashedPassword, confirmPassword, updatedToday: false, },
        });
        console.log('success')
    } catch (err) {
        console.log(err)
    }



    return new Response(JSON.stringify({ success: true }), { status: 201 });

}
