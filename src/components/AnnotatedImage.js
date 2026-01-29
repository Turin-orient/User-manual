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
    return (
        <div
            className="image-annotation-wrapper"
        >
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
                    }}
                >
                    {ann.label && <span className="annotation-label">{ann.label}</span>}
                </div>
            ))}
        </div>
    );
}
