'use client';
import { useState, useEffect } from 'react';

export default function InstallApp() {
    const [installPromptEvent, setInstallPromptEvent] = useState(null);

    useEffect(() => {
        const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
        const handleBeforeInstallPrompt = (event) => {
            event.preventDefault(); 
            setInstallPromptEvent(event); 
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);

    const handleInstallClick = () => {
        if (installPromptEvent) {
            installPromptEvent.prompt();

            installPromptEvent.userChoice.then((choice) => {
                if (choice.outcome === 'accepted') {
                    console.log('User accepted the install prompt');
                } else {
                    console.log('User dismissed the install prompt');
                }
                setInstallPromptEvent(null);
            });
        } else {
            console.log('No install prompt event available');
        }
    };

    return (
        <div>
            {installPromptEvent ? <button className='bg-custom-input-color p-1.5 select-none rounded-xl text-blue-700 font-semibold mt-2 mb-3 ml-3 animate-bounce-item' onClick={handleInstallClick} disabled={!installPromptEvent}>
                Install App
            </button> : <button className='bg-custom-input-color p-1.5 select-none rounded-xl text-blue-700 font-semibold mt-2 mb-3 ml-3' >How To Install App</button>}
        </div>
    );
}