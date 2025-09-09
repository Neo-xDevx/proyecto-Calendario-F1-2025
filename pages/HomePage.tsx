
import React, { useState, useMemo } from 'react';
import { F1_CALENDAR_2025 } from '../constants/data';
import GrandPrixCard from '../components/GrandPrixCard';
import { GrandPrix } from '../types';
import { Search } from 'lucide-react';
import { normalizeText } from '../utils/text';
import AdBlockerToast from '../components/AdBlockerToast';
import NextPrevGrandPrix from '../components/NextPrevGrandPrix';

const HomePage: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredGPs = useMemo<GrandPrix[]>(() => {
        if (!searchQuery) {
            return F1_CALENDAR_2025;
        }
        
        const normalizedQuery = normalizeText(searchQuery);

        return F1_CALENDAR_2025.filter(gp => 
            normalizeText(gp.name).includes(normalizedQuery) ||
            normalizeText(gp.country).includes(normalizedQuery) ||
            normalizeText(gp.circuit).includes(normalizedQuery)
        );
    }, [searchQuery]);

    return (
        <div className="space-y-8">
            <NextPrevGrandPrix />
            <div>
                <h1 className="text-4xl font-extrabold text-center mb-2 tracking-tighter text-gray-900 dark:text-white">Temporada 2025 de Fórmula 1</h1>
                <p className="text-center text-gray-600 dark:text-gray-400 text-lg">Selecciona un Gran Premio para ver las sesiones.</p>
            </div>
            
            <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar por Gran Premio, país o circuito (ej: Mónaco, Mexico, Imola...)"
                    className="w-full bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 focus:border-red-600 focus:ring-red-600 rounded-lg py-3 pl-12 pr-4 text-gray-900 dark:text-white placeholder-gray-500 transition-colors duration-300"
                />
            </div>

            {filteredGPs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredGPs.map(gp => (
                        <GrandPrixCard key={gp.id} gp={gp} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <p className="text-xl text-gray-500 dark:text-gray-400">No se encontraron resultados para "{searchQuery}".</p>
                </div>
            )}
            <AdBlockerToast />
        </div>
    );
};

export default HomePage;