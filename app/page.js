'use client'

import { useEffect, useState } from "react";

export default function page() {
    const [state, setState] = useState('page')
    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await fetch('/pages/api');
                const data = await response.json();

                return 'success'

            } catch (err) {

                return 'error'
            }

        };
        const data = fetchData();
        setState(data)
    }, []);

    return (
        <div>{state}</div>
    )
}

