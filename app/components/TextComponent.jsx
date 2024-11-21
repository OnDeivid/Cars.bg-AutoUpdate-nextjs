'use client'


import React, { useEffect, useState } from 'react'

export default function TextComponent() {
    const [state, setState] = useState('running')
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/autoUpdate');
                const errorData = await response.json();
                if (!response.ok) {
                    setState('error');
                } else {
                    const data = await response.json();
                    console.log('API Response:', data);
                    setState(errorData);
                }
            } catch (error) {
                const errorMessage = error.message
                setState(errorMessage);
            }
        };

        fetchData();

    }, [])

    return (
        <div>{state}</div>
    )
}
