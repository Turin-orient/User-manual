import React from 'react';

/**
 * AnnotatedImage component
 * Usage:
 * <AnnotatedImage 
 *   src="/img/your-image.png" 
 *   annotations={[
 *     { type: 'circle', x: '50%', y: '50%', size: '40px', color: 'blue', label: 'Click here' },
 *     { type: 'border', x: '10%', y: '20%', width: '100px', height: '50px', color: 'blue' },
 *     { type: 'cursor', x: '52%', y: '55%' }
 *   ]} 
 * />
 */
export default function AnnotatedImage({ src, alt, annotations = [] }) {
    return (
        <div className="image-annotation-wrapper">
            <img src={src} alt={alt || ""} />
            {annotations.map((ann, index) => (
                <div
                    key={index}
                    className={`annotation-marker marker-${ann.type} color-${ann.color || 'red'}`}
                    style={{
                        left: ann.x,
                        top: ann.y,
                        width: ann.width || ann.size || (ann.type === 'circle' ? '50px' : '24px'),
                        height: ann.height || ann.size || (ann.type === 'circle' ? '50px' : '24px'),
                        ...(ann.type === 'border' ? { transform: 'none' } : {})
                    }}
                >
                    {ann.label && <span className="annotation-label">{ann.label}</span>}
                </div>
            ))}
        </div>
    );
}
