'use client'

import { useEffect, useState } from "react";

export default function Page() {
    const [state, setState] = useState('page');
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api');
                const data = await response.json();
                return 'success'; 
            } catch (err) {
                return 'error';
            }
        };


        fetchData().then((data) => {
            setState(data);
        });
    }, []); 

    return (
        <div>{state}</div>
    );
}