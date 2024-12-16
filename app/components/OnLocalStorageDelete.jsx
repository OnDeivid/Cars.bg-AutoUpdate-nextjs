'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function OnLocalStorageDelete({ onNextDay }) {
    const router = useRouter();
    const [state, setState] = useState(false)
    useEffect(() => {
        if (onNextDay) {
            localStorage.removeItem('updateCars');
        }

        const intervalId = setInterval(() => {
            const updateDate = localStorage.getItem('updateDate');
            const currentDate = new Date().toDateString();

            if (new Date(updateDate) < new Date(currentDate)) {
                localStorage.setItem('updateDate', currentDate);
                localStorage.removeItem('updateCars');
            }
            setState(prev => !prev)
        }, 10000);

        return () => {
            clearInterval(intervalId);
        };
    }, [onNextDay, router]);

    function refresh() {
        router.push('/')
    }
    return (
        <div className='text-white bg-orange-400 text-2xl w-auto p-2
         cursor-pointer mt-8 mx-auto' onClick={refresh}
        >
            Щракни тук, ако искаш да обновиш!
        </div>
    )
}