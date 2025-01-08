'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function OnLocalStorageDelete({ onNextDay, data }) {
    const [cout, setCount] = useState(0)
    const [state, setState] = useState(false)

    const router = useRouter();
    useEffect(() => {
        if (onNextDay) {
            localStorage.removeItem('updateCars');
        }

        const intervalId = setInterval(() => {
            const updateDate = localStorage.getItem('updateDate');
            const currentDate = new Date().toDateString();

            if (localStorage.getItem('onUpdateButton') && data.user.userDataCars.updatedToday == false) {

                setCount(prev => prev + 1)
                if (!localStorage.getItem('futureAutoUpdateTimer')) {
                    const currentTimer = new Date();
                    const futureTimer = new Date(currentTimer.getTime() + 4 * 60 * 1000);
                    localStorage.setItem('futureAutoUpdateTimer', futureTimer.toISOString());
                }

                // if (cout >= 4 && data.user.userDataCars.updatedToday == false) {
                //     setCount(0)
                //     router.push('/')
                //     router.push('/')
                // }
            }

            if (new Date(updateDate) < new Date(currentDate)) {
                localStorage.setItem('updateDate', currentDate);
                localStorage.removeItem('updateCars');
                localStorage.removeItem('reqRes');

                router.push('/')
                router.push('/')
            }
            setState(prev => !prev)
        }, 900);
        // 60000
        return () => {
            clearInterval(intervalId);
        };
    }, [onNextDay, router, cout]);

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