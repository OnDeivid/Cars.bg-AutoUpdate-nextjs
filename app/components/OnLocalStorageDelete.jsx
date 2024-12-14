'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

export default function OnLocalStorageDelete({ onNextDay }) {
    const router = useRouter();

    useEffect(() => {
        if (onNextDay) {
            console.log('Data has been deleted!');
            localStorage.removeItem('updateCars');
        }

        const intervalId = setInterval(() => {
            const updateDate = localStorage.getItem('updateDate');
            const currentDate = new Date().toDateString();



            console.log('Client',new Date(updateDate) < new Date(currentDate))
            if (new Date(updateDate) < new Date(currentDate)) {
                localStorage.setItem('updateDate', currentDate);
                localStorage.removeItem('updateCars');
            }
            router.push('/');
        }, 10000);

        return () => {
            clearInterval(intervalId);
        };
    }, [onNextDay, router]);

    return (<div></div>)
}
