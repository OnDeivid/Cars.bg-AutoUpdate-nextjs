import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";

export async function POST(req) {
    const { session } = await req.json()
   
    const userEmail = session?.user.email

    const prisma = new PrismaClient();

    const token = await prisma.carsData.findFirst({
        where: {
            userEmail: userEmail,
        },
        select: {
            userId: true,
        },
    });

    const { access_token } = await prisma.account.findFirst({
        where: {
            userId: token.userId,
        },
        select: {
            access_token: true,
        },
    });
    try {

        const response = await fetch(`http://localhost:3001/Update/${userEmail}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${access_token}`
            },
        });

        return new Response(JSON.stringify({ message: 'Request for update sent successfully !' }), { status: 201 });

    } catch (err) {

        return new Response(JSON.stringify({ message: 'Request for update sent Unsuccessfully !!!' }), { status: 400 });
    }



}