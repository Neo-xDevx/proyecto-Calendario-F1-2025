import React from 'react';
import { Link } from 'react-router-dom';
import { GrandPrix } from '../types';
import { Calendar, MapPin } from 'lucide-react';
import { getImagePath } from '../utils/imagePath';

interface GrandPrixCardProps {
    gp: GrandPrix;
}

const GrandPrixCard: React.FC<GrandPrixCardProps> = ({ gp }) => {
    return (
        <Link 
            to={`/gp/${gp.id}`}
            className="block bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl dark:hover:shadow-red-600/40 transition-all duration-300 ease-in-out transform hover:-translate-y-1 group border border-gray-200 dark:border-gray-800"
        >
            <div className="p-5">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-red-500 transition-colors duration-300">{gp.country}</p>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white tracking-wide">{gp.name}</h3>
                    </div>
                    <img 
                        src={getImagePath(`img/flags/${gp.countryCode.toLowerCase()}.webp`)} 
                        alt={`Bandera de ${gp.country}`}
                        className="w-14 h-9 object-cover rounded-md shadow-sm"
                        loading="lazy"
                    />
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700/50 space-y-2 text-gray-600 dark:text-gray-300">
                    <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-red-500" />
                        <span className="text-sm">{gp.circuit}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-red-500" />
                        <span className="text-sm font-semibold">{gp.dates}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default GrandPrixCard;