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
                localStorage.removeItem('reqRes');

                router.push('/')
                router.push('/')
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
        <>
            <div className='text-white border-y-2  border-custom-input-color sm:text-sm md:text-md lg:text-lg xl:-text-xl rounded-lg uppercase p-2
            cursor-pointer w-[38%] select-none sm:mt-3 md:mt-3 lg:mt-3 xl:mt-4 mx-auto ' onClick={refresh}
            >
                провери!
            </div>
        </>
    )
}