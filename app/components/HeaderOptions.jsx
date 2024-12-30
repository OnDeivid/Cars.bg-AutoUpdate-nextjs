import React from 'react'
import Link from 'next/link'

import { auth } from '@/auth'
import { endpoints, textEndpoint } from '../CONST'


export default async function HeaderOptions() {

    const session = await auth()

    return (
        <div className="text-center md:ml-auto md:mr-auto font-4 pt-0.5 md:pl-8 uppercase">

            <Link href={endpoints.home} className="mr-6 cursor-pointer text-xs sm:text-sm md:text-lg lg:text-xl text-gray-300 hover:text-custom-input-color font-semibold tr04">
                {textEndpoint.home}
            </Link>

            {session?.user?.userDataCars?.userEmail || !session?.user.email ? null : (
                <Link href={endpoints.getStarted} className="mr-6 cursor-pointer text-xs sm:text-sm md:text-lg lg:text-xl text-gray-300 hover:text-custom-input-color font-semibold tr04">
                    {textEndpoint.getStarted}
                </Link>
            )}

            <Link href={endpoints.guide} className="mr-6 cursor-pointer text-xs sm:text-sm md:text-lg lg:text-xl text-gray-300 hover:text-custom-input-color font-semibold tr04">
                {textEndpoint.guide}
            </Link>

            <Link href={endpoints.aboutUs} className="mr-6 cursor-pointer text-xs sm:text-sm md:text-lg lg:text-xl text-gray-300 hover:text-custom-input-color font-semibold tr04">
                {textEndpoint.aboutUs}
            </Link>

        </div>
    )
}
