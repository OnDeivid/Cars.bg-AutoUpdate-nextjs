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
        <button type='submit' onClick={() => {
            if (!onShowLoading) setShowLoading(true);
        }}
            className={!onShowLoading ? 'w-full relative text-black bg-white hover:bg-gray-100 border border-gray-300 dark:border-y-white dark:text-gray dark:bg-custom-white hover:dark:bg-custom-input-color transition-all focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                : 'hidden'
            }>

            <div
                onClick={() => {
                    if (!onShowLoading) setShowLoading(true);
                }}
                className=""
            >
                Sign in
            </div>
        </button>
    );
}
