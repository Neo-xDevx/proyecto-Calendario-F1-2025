
import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggleButton from './ThemeToggleButton.tsx';

const Header: React.FC = () => {
    return (
        <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                 <Link to="/" className="text-2xl md:text-3xl font-bold tracking-wider text-gray-900 dark:text-white">
                    <span className="text-red-600">F1</span> CALENDARIO <span className="text-gray-500 dark:text-gray-400">2025</span>
                </Link>
                <div className="flex items-center gap-4">
                    <Link 
                        to="/como-ver" 
                        className="text-sm font-medium text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-500 transition-colors"
                    >
                        Cómo Ver
                    </Link>
                    <ThemeToggleButton />
                </div>
            </div>
        </header>
    );
};

export default Header;