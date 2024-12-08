import React from 'react'
import { auth } from '@/auth';
import { redirect } from 'next/navigation';


import { endpoints } from '../CONST';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export default async function UpdateButton() {

    const session = await auth()
    const carsEmail = session?.user?.userDataCars?.carsEmail
    const userEmail = session?.user.email

    const onUpdate = async () => {
        'use server'
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


        if (userEmail) {
            if (!carsEmail) {
                redirect(endpoints.getStarted)
            }
        }

        if (!userEmail) {
            redirect('/Login')
        }

        await fetch(`http://localhost:3001/Update/${userEmail}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${access_token}`  // Sending token in header
            },
        });
    }
    return (
        <button
            onClick={onUpdate}
            className="inline-flex items-center py-3 hover:bg-custom-input-color font-semibold tracking-tighter text-white transition-all duration-1000 ease-in-out transform ml-1 bg-orange-600 px-12 text-md md:mt-0 focus:shadow-outline focus:border focus:border-orange-500"
        >
            <div className="flex text-lg">
                <span className="justify-center">Актулизиране</span>
            </div>
        </button>
    )
}
