
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, AlertTriangle } from 'lucide-react';

const DisclaimerPage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-transparent">
            <div className="flex items-center gap-3 mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
                <AlertTriangle className="w-8 h-8 text-red-500" />
                <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">Descargo de Responsabilidad Legal</h1>
            </div>

            <div className="prose prose-p:text-gray-600 prose-headings:text-gray-900 prose-strong:text-red-500 dark:prose-p:text-gray-300 dark:prose-headings:text-white dark:prose-strong:text-red-400 max-w-none space-y-4">
                <p>
                    Este documento establece los términos y condiciones bajo los cuales se rige el uso de este sitio web. Al acceder y utilizar este sitio, usted acepta estar sujeto a los siguientes puntos. Si no está de acuerdo con alguno de ellos, por favor, no utilice nuestros servicios.
                </p>

                <h2 className="text-2xl font-bold">1. Naturaleza del Sitio</h2>
                <p>
                    Este sitio web funciona como un <strong>índice y motor de búsqueda</strong> de contenido audiovisual relacionado con la Fórmula 1, disponible públicamente en Internet. No alojamos, almacenamos, subimos ni transmitimos ningún tipo de archivo de video o contenido multimedia en nuestros servidores. Nuestra función se limita a recopilar y organizar enlaces a contenido alojado en plataformas de terceros.
                </p>

                <h2 className="text-2xl font-bold">2. Contenido de Terceros</h2>
                <p>
                    Todo el contenido al que se accede a través de este sitio (incluyendo, entre otros, videos, streams, y enlaces) es proporcionado y alojado por <strong>terceras partes independientes</strong>. No tenemos control, afiliación ni responsabilidad sobre dicho contenido, su calidad, legalidad, disponibilidad, o las políticas de los sitios que lo alojan.
                </p>

                <h2 className="text-2xl font-bold">3. Responsabilidad del Usuario</h2>
                <p>
                    El uso de los enlaces y el acceso al contenido de terceros es bajo la <strong>total responsabilidad del usuario</strong>. No nos hacemos responsables de ningún daño directo o indirecto que pueda surgir del uso de este sitio, incluyendo problemas de software, pérdida de datos o cualquier otra incidencia derivada de la visualización del contenido enlazado.
                </p>

                <h2 className="text-2xl font-bold">4. Propiedad Intelectual y Derechos de Autor (DMCA)</h2>
                <p>
                    Respetamos la propiedad intelectual de otros. Este sitio no infringe deliberadamente los derechos de autor. Si usted es titular de derechos de autor y considera que algún enlace de nuestro índice infringe sus derechos, le solicitamos que dirija su reclamación de retirada de contenido (bajo la Digital Millennium Copyright Act o ley equivalente) <strong>directamente al proveedor de servicios que aloja el material en cuestión</strong>. Nosotros no tenemos la capacidad técnica ni legal para eliminar contenido de servidores de terceros.
                </p>
                <p>
                    No obstante, si desea que eliminemos un enlace de nuestro índice, puede contactarnos y lo revisaremos a la brevedad posible.
                </p>
                
                <h2 className="text-2xl font-bold">5. Sin Afiliación Oficial</h2>
                <p>
                    Este sitio web <strong>no está afiliado, asociado, autorizado, respaldado ni conectado de ninguna manera oficial</strong> con Formula One Group, la FIA (Fédération Internationale de l'Automobile), o cualquiera de sus subsidiarias o afiliadas. Las marcas, nombres y logotipos relacionados con la Fórmula 1 son marcas registradas de sus respectivos propietarios.
                </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <Link to="/" className="inline-flex items-center gap-2 text-red-500 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                    <ChevronLeft size={20} />
                    <span>Volver a la página principal</span>
                </Link>
            </div>
        </div>
    );
};

export default DisclaimerPage;