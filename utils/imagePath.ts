export const getImagePath = (path: string): string => {
    // Elimina la barra inicial si existe
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `/${cleanPath}`;
};
