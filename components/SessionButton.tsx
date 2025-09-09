import React from 'react';
import { Session } from '../types';
import { PlayCircle } from 'lucide-react';

interface SessionButtonProps {
    session: Session;
    onClick: (videoUrl: string) => void;
}

const SessionButton: React.FC<SessionButtonProps> = ({ session, onClick }) => {
    return (
        <button
            onClick={() => onClick(session.videoUrl)}
            className="w-full flex items-center justify-between bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white px-6 py-4 rounded-md shadow-sm hover:bg-red-600 hover:text-white dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
            <span className="text-lg font-medium">{session.name}</span>
            <PlayCircle className="w-6 h-6" />
        </button>
    );
};

export default SessionButton;