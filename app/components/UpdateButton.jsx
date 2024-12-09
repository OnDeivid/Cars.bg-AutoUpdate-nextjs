import { auth } from '@/auth';
import { redirect } from 'next/navigation';

import { PrismaClient } from '@prisma/client';

import { endpoints } from '../CONST';
import UpdateButtonState from './UpdateButtonState';

const prisma = new PrismaClient();

export default async function UpdateButton() {

    const session = await auth()

    const carsEmail = session?.user?.userDataCars?.carsEmail
    const userEmail = session?.user.email

    const onUpdate = async () => {
        'use server'

        if (userEmail) {
            if (!carsEmail) {
                redirect(endpoints.getStarted)
            }
        }

        if (!userEmail) {
            redirect('/Login')
        }

        const response = await fetch(`http://localhost:3000/pages/api/OnCarsUpdate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ session: session }),
        });
        console.log(response)
    }
    return (
        // <button
        //     onClick={onUpdate}
        //     className="inline-flex items-center py-3 hover:bg-custom-input-color font-semibold tracking-tighter text-white transition-all duration-1000 ease-in-out transform ml-1 bg-orange-600 px-12 text-md md:mt-0 focus:shadow-outline focus:border focus:border-orange-500"
        // >
            <UpdateButtonState update={onUpdate} />
        // </button>
    )
}
