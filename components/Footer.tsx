
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 mt-12 border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 py-6">
                <h3 className="text-lg font-semibold text-red-500 mb-2">Descargo de Responsabilidad</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    Este sitio web no aloja ninguno de los videos o contenidos mostrados y actúa únicamente como un índice. Todo el contenido es proporcionado por terceros.
                    <Link to="/disclaimer" className="text-blue-500 dark:text-blue-400 hover:underline ml-2 whitespace-nowrap">
                        Leer descargo de responsabilidad completo.
                    </Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;