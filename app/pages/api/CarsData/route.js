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
        const id = userId

        // Log all fields to debug missing ones
        console.log("id:", id);
        console.log("userId:", userId);
        console.log("userEmail:", userEmail);
        console.log("carsEmail:", carsEmail);
        console.log("password:", password);
        console.log("confirmPassword:", confirmPassword);

        if (!id || !userId || !userEmail || !carsEmail || !password || !confirmPassword) {
            throw new Error("Missing required fields");
        }

        // const hashedPassword = await encryptPassword(password)

        // const newEntry = await prisma.carsData.create({

        //     id: "64e9b2f8f3a2a0e7a1b3c7d6", // Example ObjectId in string format
        //     userId: "123456789",
        //     userEmail: "user@example.com",
        //     carsEmail: "cars@example.com",
        //     password: "securepassword123",
        //     confirmPassword: "securepassword123",
        //     updateDate: new Date("2024-12-25T12:00:00Z"), // Optional field
        //     updatedToday: true,
        //     updateError: null, // No error
        //     createdAt: new Date("2024-12-20T12:00:00Z")

        // });
        console.log('sccess!')
    } catch (err) {
        console.log(err)
    }



    return new Response(JSON.stringify({ success: true }), { status: 201 });

}
