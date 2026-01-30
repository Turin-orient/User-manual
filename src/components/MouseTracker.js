import React, { useState, useRef } from 'react';

/**
 * MouseTracker Component
 * 
 * Use this component to easily find x% and y% coordinates for your annotations.
 * 
 * Usage in Markdown:
 * import MouseTracker from '@site/src/components/MouseTracker';
 * 
 * <MouseTracker src="/img/your-image.png" />
 */
const MouseTracker = ({ src, alt, style }) => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [showTooltip, setShowTooltip] = useState(false);
    const imgRef = useRef(null);

    const handleMouseMove = (e) => {
        if (imgRef.current) {
            const rect = imgRef.current.getBoundingClientRect();
            // Calculate percentage positions
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;

            setCoords({
                x: x.toFixed(1),
                y: y.toFixed(1)
            });
        }
    };

    return (
        <div
            style={{
                position: 'relative',
                display: 'inline-block',
                maxWidth: '100%',
                cursor: 'crosshair',
                ...style
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            <img
                ref={imgRef}
                src={src}
                alt={alt || "Mouse Tracker"}
                style={{
                    maxWidth: '100%',
                    display: 'block',
                    border: showTooltip ? '2px solid #52c41a' : 'none'
                }}
            />

            {/* Crosshair horizontal line */}
            {showTooltip && (
                <div style={{
                    position: 'absolute',
                    top: `${coords.y}%`,
                    left: 0,
                    width: '100%',
                    height: '1px',
                    backgroundColor: 'rgba(82, 196, 26, 0.5)',
                    pointerEvents: 'none',
                    boxShadow: '0 0 2px rgba(0,0,0,0.5)'
                }} />
            )}

            {/* Crosshair vertical line */}
            {showTooltip && (
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: `${coords.x}%`,
                    width: '1px',
                    height: '100%',
                    backgroundColor: 'rgba(82, 196, 26, 0.5)',
                    pointerEvents: 'none',
                    boxShadow: '0 0 2px rgba(0,0,0,0.5)'
                }} />
            )}

            {/* Coordinate Tooltip */}
            {showTooltip && (
                <div style={{
                    position: 'absolute',
                    top: `${coords.y}%`,
                    left: `${coords.x}%`,
                    transform: 'translate(10px, 10px)',
                    backgroundColor: 'rgba(0, 0, 0, 0.85)',
                    color: '#52c41a',
                    padding: '6px 10px',
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontFamily: 'monospace',
                    fontWeight: 'bold',
                    pointerEvents: 'none',
                    whiteSpace: 'nowrap',
                    zIndex: 1000,
                    border: '1px solid #52c41a',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
                }}>
                    x: {coords.x}%, y: {coords.y}%
                </div>
            )}
        </div>
    );
};

export default MouseTracker;
