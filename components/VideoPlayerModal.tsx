import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface VideoPlayerModalProps {
    videoUrl: string | null;
    onClose: () => void;
}

const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({ videoUrl, onClose }) => {
    
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (videoUrl) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
        };
    }, [videoUrl, onClose]);

    if (!videoUrl) {
        return null;
    }

    return (
        <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="video-player-title"
        >
            <div 
                className="bg-black rounded-lg shadow-xl w-11/12 max-w-7xl aspect-video relative"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 id="video-player-title" className="sr-only">Reproductor de video</h2>
                <button 
                    onClick={onClose}
                    className="absolute -top-3 -right-3 bg-red-600 rounded-full p-2 text-white hover:bg-red-700 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-white"
                    aria-label="Cerrar reproductor de video"
                >
                    <X size={24} />
                </button>
                <iframe
                    src={videoUrl}
                    title="Reproductor de Video de la Sesión"
                    className="w-full h-full rounded-lg"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default VideoPlayerModal;