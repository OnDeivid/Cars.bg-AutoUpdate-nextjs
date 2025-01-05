import { serverURL } from "@/app/CONST";
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


        const response = await fetch(`${serverURL}/serverCheck/${userEmail}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${access_token}`
            },
        });

        if (!response.ok) {
            throw new Error('error thrown')
        }
        const res = await fetch(`${serverURL}/Update/${userEmail}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${access_token}`
            },
        });

        return new Response(JSON.stringify({ message: 'Request for update sent successfully !' }), { status: 201 });
    } catch (err) {
        console.log(err)

        return new Response(JSON.stringify({ message: 'Request for update sent Unsuccessfully !!!' }), { status: 400 });
    }
}