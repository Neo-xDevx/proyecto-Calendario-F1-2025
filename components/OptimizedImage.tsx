import React from 'react';
import { getImagePath } from '../utils/imagePath';

interface OptimizedImageProps {
    src: string;
    alt: string;
    className?: string;
    width?: number;
    height?: number;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
    src, 
    alt, 
    className = '', 
    width, 
    height 
}) => {
    return (
        <img
            src={getImagePath(src)}
            alt={alt}
            className={className}
            loading="lazy"
            width={width}
            height={height}
            decoding="async"
            onError={(e) => {
                const img = e.currentTarget;
                img.style.opacity = '0.5';
                img.style.backgroundColor = '#f3f4f6';
            }}
        />
    );
};

export default OptimizedImage;
