import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { F1_CALENDAR_2025 } from '../constants/data';
import SessionButton from '../components/SessionButton';
import { ChevronLeft, MapPin, Calendar } from 'lucide-react';
import VideoPlayerModal from '../components/VideoPlayerModal';
import AdBlockerToast from '../components/AdBlockerToast';

const GrandPrixPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const gp = F1_CALENDAR_2025.find(g => g.id === id);
    const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);

    if (!gp) {
        return (
            <div className="text-center py-10">
                <h2 className="text-2xl font-bold text-red-500">Gran Premio no encontrado</h2>
                <Link to="/" className="text-blue-500 dark:text-blue-400 hover:underline mt-4 inline-block">Volver al inicio</Link>
            </div>
        );
    }

    const handleSessionClick = (videoUrl: string) => {
        setSelectedVideoUrl(videoUrl);
    };

    const handleCloseModal = () => {
        setSelectedVideoUrl(null);
    };

    const mapImageId = gp.mapId || gp.countryCode.toLowerCase();

    return (
        <>
            <div className="max-w-6xl mx-auto">
                <Link 
                    to="/" 
                    className="inline-flex items-center gap-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 hover:bg-red-600 hover:text-white dark:hover:text-white px-4 py-2 rounded-lg transition-colors mb-8"
                >
                    <ChevronLeft size={20} />
                    <span>Volver al Calendario</span>
                </Link>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-2xl dark:shadow-black/30 overflow-hidden border border-gray-200 dark:border-transparent">
                    {/* Header Section */}
                    <div className="p-8 bg-gradient-to-br from-gray-100 to-white/50 dark:from-gray-900 dark:to-gray-800/50 relative">
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23e50914%22%20fill-opacity%3D%220.05%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M0%2040L40%200H20L0%2020M40%2040V20L20%2040%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
                        <div className="flex flex-col sm:flex-row justify-between items-start gap-6 relative">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-gray-900 dark:text-white">{gp.name}</h1>
                                <p className="text-xl text-gray-600 dark:text-gray-400 mt-1">{gp.country}</p>
                            </div>
                            <img
                                src={`/img/${gp.countryCode.toLowerCase()}.webp`}
                                alt={`Bandera de ${gp.country}`}
                                className="w-24 h-16 object-cover rounded-lg shadow-md shrink-0"
                            />
                        </div>
                    </div>
                    
                    <div className="p-8 grid md:grid-cols-2 gap-8">
                        {/* Info & Details Column */}
                        <div className="space-y-8">
                            
                            {/* Event Details Section */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b-2 border-red-600 pb-2">Detalles del Evento</h2>
                                <div className="space-y-4 mt-4">
                                    <div className="bg-gray-100 dark:bg-gray-900/50 p-5 rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <MapPin className="w-6 h-6 text-red-500 shrink-0" />
                                            <div>
                                                <p className="font-semibold text-gray-900 dark:text-white">{gp.circuit}</p>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">Circuito</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-100 dark:bg-gray-900/50 p-5 rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <Calendar className="w-6 h-6 text-red-500 shrink-0" />
                                            <div>
                                                <p className="font-semibold text-gray-900 dark:text-white">{gp.dates}</p>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">Fecha</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Circuit Map Section */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b-2 border-red-600 pb-2">Mapa del Circuito</h2>
                                <div className="overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-900/50 p-2 mt-4">
                                    <img
                                        src={`/img/circuits/map-${mapImageId}.webp`}
                                        alt={`Mapa del ${gp.circuit}`}
                                        className="w-full h-auto object-contain rounded-md"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Sessions Column */}
                        <div>
                             <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b-2 border-red-600 pb-2">Sesiones</h2>
                             <div className="space-y-4 mt-4">
                                {gp.sessions.map(session => (
                                    <SessionButton key={session.name} session={session} onClick={handleSessionClick} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <VideoPlayerModal videoUrl={selectedVideoUrl} onClose={handleCloseModal} />
            <AdBlockerToast />
        </>
    );
};

export default GrandPrixPage;