'use client'

import { useEffect, useState } from "react"

export default function SettingsButtonSubmit() {
    const [state, setState] = useState(false)

    useEffect(() => {
        if (state) {
            const timer = setTimeout(() => {
                setState(false); 
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [state]);

    // AGENT await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64)');

    return (
        <button
            type="submit"
            onClick={() => {
                if (!state) setState(true);
            }}
            className={
                !state
                    ? "text-white bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 w-full mt-3 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    : "hidden"
            }
        >
            Промени
        </button>
    );
}
