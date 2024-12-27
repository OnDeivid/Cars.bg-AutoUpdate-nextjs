import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { PrismaClient } from '@prisma/client';

import { endpoints } from '../CONST';

import UpdateButtonState from './UpdateButtonState';
import OnLocalStorageDelete from './OnLocalStorageDelete';

const prisma = new PrismaClient();

export default async function UpdateButton() {

    const session = await auth()

    const carsEmail = session?.user?.userDataCars?.carsEmail
    const userEmail = session?.user.email

    if (userEmail) {
        if (!carsEmail) {
            redirect(endpoints.getStarted)
        }
    }

    if (!userEmail) {
        redirect(endpoints.login)
    }

    const data = await prisma.carsData.findFirst({
        where: {
            userEmail: userEmail,
        },
        select: {
            updatedToday: true,
            updateError: true,
            updateDate: true
        },
    });

    const currentDate = new Date().setHours(0, 0, 0, 0);;
    const lastUpdateDate = new Date(data?.updateDate).setHours(0, 0, 0, 0);;
    const onNextDay = lastUpdateDate < currentDate

    if (onNextDay) {
        if (!userEmail) {
            return
        }

        await prisma.carsData.update({
            where: {
                userEmail: userEmail,
            },
            data: {
                updatedToday: false,
                updateDate: new Date(),
                updateError: ''
            },
        })
    }

    const onUpdate = async () => {
        'use server'

        if (userEmail) {
            if (!carsEmail) {
                redirect(endpoints.getStarted)
            }
        }

        if (!userEmail) {
            redirect(endpoints.login)
        }


        const response = await fetch(`https://automation-eosin.vercel.app/pages/api/OnCarsUpdate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ session: session }),
        });

        return response.ok
    }

    return (
        <>
            {!data?.updatedToday ? (<><UpdateButtonState update={onUpdate} /> <OnLocalStorageDelete onNextDay={onNextDay} /></>)
                : data?.updateError == 'success' ?
                    (<><div className='text-green-600 mt-2 font-bold uppercase'>Колите бяха успешно Обновени! </div> <OnLocalStorageDelete onNextDay={onNextDay} /></>)
                    :
                    // (<><OnLocalStorageDelete onNextDay={onNextDay} /><div className='text-red-600 mt-2 text-md font-bold uppercase'>Грешка!: {data?.updateError}</div>
                    (<><OnLocalStorageDelete onNextDay={onNextDay} /><div className='text-red-600 mt-2 text-md font-bold uppercase'>Грешка!:error</div>
                        <span className='text-yellow-400 text-sm'>Наш служител ще се погрижи да актуализира колите вместо вас и ще разгледа проблема. Ако опитът за актуализация е неуспешен, ще се свърже с вас възможно най-скоро, за да ви окаже съдействие!</span></>)}
        </>
    )
}
