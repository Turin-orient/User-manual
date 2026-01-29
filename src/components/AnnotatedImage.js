import React, { useState } from 'react';

/**
 * AnnotatedImage component with Coordinate Tracker
 * Usage:
 * <AnnotatedImage 
 *   src="/img/your-image.png" 
 *   annotations={[
 *     { type: 'border', x: '10%', y: '20%', width: '100px', height: '50px', color: 'blue', label: 'Feature' }
 *   ]} 
 * />
 */
export default function AnnotatedImage({ src, alt, annotations = [] }) {
    const [coord, setCoord] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width * 100).toFixed(1);
        const y = ((e.clientY - rect.top) / rect.height * 100).toFixed(1);
        setCoord({ x, y });
    };

    return (
        <div
            className="image-annotation-wrapper"
            onMouseMove={handleMouseMove}
        >
            <img src={src} alt={alt || ""} />

            {/* Coordinate Debug Overlay (Visible in dev/hover) */}
            <div className="coordinate-debug">
                X: {coord.x}%, Y: {coord.y}%
            </div>

            {annotations.map((ann, index) => (
                <div
                    key={index}
                    className={`annotation-marker marker-${ann.type} color-${ann.color || 'red'}`}
                    style={{
                        left: ann.x,
                        top: ann.y,
                        width: ann.width || ann.size || (ann.type === 'circle' ? '50px' : '24px'),
                        height: ann.height || ann.size || (ann.type === 'circle' ? '50px' : '24px'),
                    }}
                >
                    {ann.label && <span className="annotation-label">{ann.label}</span>}
                </div>
            ))}
        </div>
    );
}
