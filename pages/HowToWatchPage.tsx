const HowToWatchPage = () => {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <h1 className="text-3xl font-bold mb-8 text-center dark:text-white">Cómo ver las carreras</h1>
            
            <div className="space-y-8">
                {/* Chrome, Edge, Firefox */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                    <h2 className="text-2xl font-semibold mb-4 dark:text-white">Chrome, Edge, Firefox</h2>
                    <ol className="list-decimal pl-6 space-y-4 dark:text-gray-300">
                        <li>
                            Instala la extensión uBlock Origin Lite:
                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                <li><a href="https://chrome.google.com/webstore/detail/ublock-origin-lite/ddkjiahejlhfcafbddmgiahcphecmpfh" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">Chrome/Edge</a></li>
                                <li><a href="https://addons.mozilla.org/es/firefox/addon/ublock-origin/" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">Firefox</a></li>
                            </ul>
                        </li>
                        <li>
                            Configura uBlock Origin Lite:
                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                <li>Abre la configuración de la extensión</li>
                                <li>Selecciona el modo de filtrado "Óptimo"</li>
                                <li>Aplica los cambios y reinicia el navegador</li>
                            </ul>
                        </li>
                    </ol>
                </div>

                {/* Brave */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                    <h2 className="text-2xl font-semibold mb-4 dark:text-white">Brave</h2>
                    <ol className="list-decimal pl-6 space-y-4 dark:text-gray-300">
                        <li>
                            Configura el escudo de Brave:
                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                <li>Haz clic en el icono del escudo en la barra de direcciones</li>
                                <li>Selecciona "Modo Agresivo"</li>
                                <li>Reinicia el navegador para aplicar los cambios</li>
                            </ul>
                        </li>
                    </ol>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6">
                    <p className="text-red-800 dark:text-red-200">
                        Nota: Estas configuraciones son necesarias para una experiencia óptima al ver las carreras.
                        Asegúrate de seguir todos los pasos antes de intentar reproducir cualquier contenido.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HowToWatchPage;
