import { encryptPassword } from "@/app/utils/crypto";
import { PrismaClient } from "@prisma/client"


export async function PUT(req) {
    const formValue = await req.json()

    const prisma = new PrismaClient();

    try {
        const cryptedPassword = await encryptPassword(formValue.password);

        if (formValue.password != formValue.confirmPassword) {
            return new Response(JSON.stringify({ message: 'Password mismatch !!!' }), { status: 400 });

        }
        const userEmail = formValue.userEmail
        const response = await prisma.carsData.update({
            where: { userEmail: userEmail },
            data: {
                carsEmail: formValue.carsEmail,
                password: cryptedPassword,
            },
        });
        console.log(response)
        return new Response(JSON.stringify({ message: 'Request for update sent successfully !' }), { status: 201 });
    } catch (err) {
        return new Response(JSON.stringify({ message: 'Request for update sent Unsuccessfully !!!' }), { status: 400 });
    }

}