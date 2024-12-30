'use client'
import React, { useState, useEffect } from 'react';

export default function GetStartedLoginButton() {
    const [onShowLoading, setShowLoading] = useState(false);

    useEffect(() => {
        if (onShowLoading) {
            const timer = setTimeout(() => {
                setShowLoading(false);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [onShowLoading]);

    return (
        <button type='submit' className='w-full bg-red-600'>
            {!onShowLoading ? (
                <div
                    onClick={() => { setShowLoading(true) }}
                    className="w-full dark:border-y-white relative text-gray dark:bg-custom-white hover:bg-custom-input-color transition-all focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                    Sign in
                </div>
            ) : (
                null
            )}
        </button>
    );
}
