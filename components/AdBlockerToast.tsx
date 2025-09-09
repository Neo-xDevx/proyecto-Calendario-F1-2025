import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const AdBlockerToast: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // The notification was likely hidden because it was dismissed before.
        // This logic is updated to always show it for review purposes.
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1500); // Delay appearance to be less intrusive
        
        return () => clearTimeout(timer);
    }, []);

    const handleDismiss = () => {
        setIsVisible(false);
        localStorage.setItem('adBlockerToastDismissed', 'true');
    };

    if (!isVisible) {
        return null;
    }

    const extensionUrl = 'https://chromewebstore.google.com/detail/ublock-origin-lite/ddkjiahejlhfcafbddmgiahcphecmpfh?hl=es&pli=1';

    // A simple SVG icon that resembles the uBlock Origin logo (a shield)
    // to build trust and brand recognition without using an external image.
    const UBlockIcon = () => (
        <svg
            viewBox="0 0 24 24"
            className="w-10 h-10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4.125 5.313c0-.622.503-1.125 1.125-1.125h13.5c.622 0 1.125.503 1.125 1.125v9.562c0 4.1-5.603 7.502-6.793 8.01a1.125 1.125 0 01-1.114 0c-1.19-.508-6.793-3.91-6.793-8.01V5.313z"
                fill="#ef4444" // A shade of red, similar to the brand
            />
            <path
                d="M9.375 12.375L11.25 14.25l4.125-4.125"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );


    return (
        <div className="fixed bottom-5 right-5 z-50 animate-fade-in max-w-sm w-full">
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 rounded-lg shadow-2xl p-4">
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 pt-1">
                        <UBlockIcon />
                    </div>
                    <div className="flex-grow">
                        <h3 className="font-bold text-slate-800 dark:text-white text-base">Visualización sin interrupciones</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                            Disfruta de las sesiones sin anuncios con esta extensión ligera y segura, recomendada por la comunidad.
                        </p>
                        <a
                            href={extensionUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-slate-900 text-white dark:bg-slate-200 dark:text-slate-900 font-bold py-2 px-4 rounded-md text-sm mt-4 hover:bg-slate-700 dark:hover:bg-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-800 focus:ring-red-500"
                        >
                            Ver Extensión en Chrome Store
                        </a>
                    </div>
                    <div className="flex-shrink-0">
                        <button
                            onClick={handleDismiss}
                            className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors"
                            aria-label="Cerrar recomendación"
                        >
                            <X size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdBlockerToast;