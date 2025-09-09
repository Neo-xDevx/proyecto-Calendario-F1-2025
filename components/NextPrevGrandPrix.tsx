import { useState, useEffect } from 'react';
import { GrandPrix } from '../types';
import { F1_CALENDAR_2025 } from '../constants/data';
import GrandPrixCard from './GrandPrixCard';

const NextPrevGrandPrix = () => {
    const [nextRace, setNextRace] = useState<GrandPrix | null>(null);
    const [prevRace, setPrevRace] = useState<GrandPrix | null>(null);

    useEffect(() => {
        const currentDate = new Date('2025-09-09'); // Fecha actual fija para testing
        const races = [...F1_CALENDAR_2025];
        
        // Función para convertir el formato de fecha
        const parseDate = (dateStr: string) => {
            const months: { [key: string]: number } = {
                'Ene': 0, 'Feb': 1, 'Mar': 2, 'Abr': 3, 'May': 4, 'Jun': 5,
                'Jul': 6, 'Ago': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dic': 11
            };
            
            // Manejar casos especiales como '30 May-01 Jun'
            if (dateStr.includes('-')) {
                const parts = dateStr.split('-');
                if (parts[1].includes(' ')) {
                    // Caso: '30 May-01 Jun'
                    const [_, endPart] = parts[1].split(' ');
                    const endDay = parseInt(parts[1]);
                    return new Date(2025, months[endPart], endDay);
                } else {
                    // Caso normal: '05-07 Sep'
                    const [_, endDay] = parts;
                    const [day, month] = endDay.split(' ');
                    return new Date(2025, months[month], parseInt(day));
                }
            }
            return new Date(2025, 0, 1); // Fecha fallback
        };
        
        // Encontrar la carrera anterior y la próxima
        const findRaces = () => {
            let nextRaceFound = null;
            let prevRaceFound = null;

            for (const race of races) {
                const raceDate = parseDate(race.dates);
                
                if (raceDate > currentDate) {
                    if (!nextRaceFound || parseDate(nextRaceFound.dates) > raceDate) {
                        nextRaceFound = race;
                    }
                } else if (raceDate < currentDate) {
                    if (!prevRaceFound || parseDate(prevRaceFound.dates) < raceDate) {
                        prevRaceFound = race;
                    }
                }
            }

            setNextRace(nextRaceFound);
            setPrevRace(prevRaceFound);
        };

        findRaces();
    }, []);

    if (!nextRace && !prevRace) return null;

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Próximas Carreras</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {prevRace && (
                    <div>
                        <h3 className="text-xl font-semibold mb-4 dark:text-white">Carrera Anterior</h3>
                        <GrandPrixCard gp={prevRace} />
                    </div>
                )}
                {nextRace && (
                    <div>
                        <h3 className="text-xl font-semibold mb-4 dark:text-white">Próxima Carrera</h3>
                        <GrandPrixCard gp={nextRace} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default NextPrevGrandPrix;
