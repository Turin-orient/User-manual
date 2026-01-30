import React, { useState, useRef } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function AnnotatedImage({ src, alt, annotations = [] }) {
    // Only enable mouse tracker in development mode
    const isDev = process.env.NODE_ENV === 'development';

    // Tracker state
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [showTracker, setShowTracker] = useState(false);
    const imgRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!isDev) return;

        // Use the image rect for precise calculation
        const target = imgRef.current || e.currentTarget;
        const rect = target.getBoundingClientRect();

        // Calculate percentage positions relative to the image
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        // Clamp values 0-100 to prevent weird outliers
        const clampedX = Math.max(0, Math.min(100, x));
        const clampedY = Math.max(0, Math.min(100, y));

        setCoords({
            x: clampedX.toFixed(1),
            y: clampedY.toFixed(1)
        });
    };

    return (
        <div
            className="image-annotation-wrapper"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => isDev && setShowTracker(true)}
            onMouseLeave={() => isDev && setShowTracker(false)}
        >
            <img ref={imgRef} src={src} alt={alt || ""} />

            {/* Dev Mode Tracker Overlay */}
            {isDev && showTracker && (
                <>
                    {/* Horizontal Line */}
                    <div style={{
                        position: 'absolute',
                        top: `${coords.y}%`,
                        left: 0,
                        width: '100%',
                        height: '1px',
                        backgroundColor: 'rgba(52, 211, 153, 0.8)',
                        pointerEvents: 'none',
                        zIndex: 100,
                        boxShadow: '0 0 2px rgba(0,0,0,0.5)'
                    }} />

                    {/* Vertical Line */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: `${coords.x}%`,
                        width: '1px',
                        height: '100%',
                        backgroundColor: 'rgba(52, 211, 153, 0.8)',
                        pointerEvents: 'none',
                        zIndex: 100,
                        boxShadow: '0 0 2px rgba(0,0,0,0.5)'
                    }} />

                    {/* Coordinate Label */}
                    <div style={{
                        position: 'absolute',
                        top: `${coords.y}%`,
                        left: `${coords.x}%`,
                        transform: 'translate(10px, 10px)',
                        background: 'rgba(0, 0, 0, 0.85)',
                        color: '#34d399',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontFamily: 'monospace',
                        fontWeight: 'bold',
                        zIndex: 101,
                        pointerEvents: 'none',
                        border: '1px solid #34d399',
                        whiteSpace: 'nowrap'
                    }}>
                        x: {coords.x}%, y: {coords.y}%
                    </div>
                </>
            )}

            {/* Standard Annotations */}
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
