'use client';

import React, { useEffect, useState } from 'react';

export default function UpdateButtonState({ update }) {
    const [updated, setUpdated] = useState(null);
    const [res, setRes] = useState('notSended')

    useEffect(() => {

        const sendReq = localStorage.getItem('reqRes')

        sendReq != null ? setRes(sendReq) : null
        const updateState = localStorage.getItem('updateCars');
        setUpdated(updateState === 'true');

        const interval1 = setInterval(() => {
            // if (!localStorage.getItem('updateCars') && update) {

            if (!localStorage.getItem('updateCars')) {
                setUpdated(false)
            }
        }, 1000);

        const interval2 = setInterval(() => {
            if (localStorage.getItem('futureTimer')) {
                localStorage.removeItem('updateCars')
                localStorage.removeItem('futureTimer')
                localStorage.setItem('reqRes', 'notSended')
                setRes('notSended')

            }
        }, 30000);

        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
        };
    }, []);



    const handleUpdate = async () => {
        localStorage.setItem('updateDate', new Date().toDateString())
        localStorage.setItem('updateCars', 'true');
        setUpdated(true);

        const result = await update();

        setRes(result.toString())
        localStorage.setItem('reqRes', result.toString())
        if (!result) {
            const currentTimer = new Date();
            const futureTimer = new Date(currentTimer.getTime() + 20 * 1000);
            localStorage.setItem('futureTimer', futureTimer.toISOString());
        }
    };

    if (updated === null) {
        return null;
    }

    return (
        <div>
            {!updated ? (
                <div
                    onClick={handleUpdate}
                    className="inline-flex cursor-pointer mb-3 items-center mt-[5%] py-3 hover:bg-custom-input-color rounded-md font-semibold tracking-tighter text-custom-gray transition-colors duration-1000 ease-in-out transform bg-custom-input-color px-16 text-md md:mt-0 focus:shadow-outline focus:border focus:border-orange-500"
                >
                    <span className="justify-center select-none cursor-pointer font-semibold uppercase">Обнови</span>
                </div>
            ) : (
                <div role="status">
                    <svg
                        aria-hidden="true"
                        className="w-10 h-10 text-gray-200 animate-spin mt-3 dark:text-gray-600 mx-auto fill-blue-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                        />
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                        />
                    </svg>
                    {res == 'true' ? (
                        <>
                            <span className="sr-only">Loading...</span>
                            <p className='text-white text-xl'>Колите скоро ще започнат да се Обновяват!</p>
                        </>
                    ) : res == 'false' ? (
                        <>
                            <p className='text-yellow-400 text-lg'>Извиняваме се, но в момента услугата не е достъпна. Моля, опитайте отново по-късно.</p>
                            <p className='text-green-400 text-sm'>Изчакайте и опитайте отново това съобщение ще се самоизтрие.</p>
                        </>
                    ) : null}
                </div>
            )}
        </div>
    );
}