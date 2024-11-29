import { auth } from '@/auth';
import React from 'react'

export default async function UpdateButton() {
    const session = await auth()
    const onUpdate = async () => {
        'use server'
        const email = session?.user.email
        const response = await fetch(`http://localhost:3001/Update/${email}`, {
            method: 'GET',
        });
    }
    return (
        <button
            onClick={onUpdate}
            className="inline-flex items-center py-3 font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent ml-1 bg-gradient-to-r from-orange-500 to-orange-800 px-12 text-md md:mt-0 focus:shadow-outline"
        >
            <div className="flex text-lg">
                <span className="justify-center">Актолизиране</span>
            </div>
        </button>
    )
}
