import { encryptPassword } from "@/app/utils/crypto";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const maxDuration = 60

export async function POST(req) {
    const { userEmail, carsEmail } = await req.json();
    // if (password !== confirmPassword) {
    //     return new Response(
    //         JSON.stringify({ success: false, error: "Passwords do not match" }),
    //         { status: 400 }
    //     );
    // }

    try {


        const data = await prisma.user.findFirst({ where: { email: userEmail }, select: { id: true } });

        const userId = data.id.toString()
        console.log(typeof userId)

        // const hashedPassword = await encryptPassword(password)
        // const id = userId

        const newCarData = await prisma.carsData.create({
            data: {
                userId,  // Hardcoded MongoDB ObjectId for user
                userEmail,      // Hardcoded email
                carsEmail,      // Hardcoded cars email
                password: "securePassword123",      // Hardcoded password
                confirmPassword: "securePassword123", // Hardcoded confirmPassword (not recommended to store this in DB)
                updateDate: new Date(),             // Set current date and time
                updatedToday: true,                 // Example boolean flag
                updateError: null,                  // No error initially
                createdAt: new Date(),              // Set current date and time
            },
        });

        console.log(newCarData)
        console.log('success')

    } catch (err) {

        console.log(err)
    }



    return new Response(JSON.stringify({ success: true }), { status: 201 });

}
