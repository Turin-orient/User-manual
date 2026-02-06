import React, { useState, useEffect } from 'react';
import useAnimationPreferences from '../hooks/useAnimationPreferences';

/**
 * Improved mouse trail effect with neon tech aesthetic
 * Creates beautiful gradient trails with glow effects
 */
export default function MouseTrail() {
    const [trails, setTrails] = useState([]);
    const { shouldAnimate } = useAnimationPreferences();

    useEffect(() => {
        if (!shouldAnimate) return;

        let trailId = 0;
        let lastTime = Date.now();

        const handleMouseMove = (e) => {
            const now = Date.now();
            // Throttle trail creation to every 20ms for smoother performance
            if (now - lastTime < 20) return;
            lastTime = now;

            const newTrail = {
                id: trailId++,
                x: e.clientX,
                y: e.clientY,
                timestamp: now
            };

            setTrails(prev => [...prev, newTrail].slice(-10)); // Reduced for performance
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Clean up old trails more frequently
        const interval = setInterval(() => {
            setTrails(prev =>
                prev.filter(trail => Date.now() - trail.timestamp < 800)
            );
        }, 30);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearInterval(interval);
        };
    }, [shouldAnimate]);

    if (!shouldAnimate) return null;

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 9999 }}>
            {trails.map((trail, index) => {
                const age = Date.now() - trail.timestamp;
                const opacity = Math.max(0, 1 - age / 800);
                const scale = 1 - age / 800 * 0.3;
                const size = 8 + (trails.length - index) * 0.5; // Bigger trails at cursor

                return (
                    <div
                        key={trail.id}
                        style={{
                            position: 'absolute',
                            left: trail.x,
                            top: trail.y,
                            width: `${size}px`,
                            height: `${size}px`,
                            borderRadius: '50%',
                            background: `radial-gradient(circle, 
                                rgba(0, 180, 255, ${opacity * 0.9}) 0%, 
                                rgba(30, 200, 255, ${opacity * 0.6}) 40%, 
                                transparent 70%)`,
                            transform: `translate(-50%, -50%) scale(${scale})`,
                            boxShadow: `
                                0 0 ${10 * opacity}px rgba(0, 180, 255, ${opacity * 0.8}),
                                0 0 ${20 * opacity}px rgba(30, 200, 255, ${opacity * 0.4})
                            `,
                            opacity: opacity,
                            pointerEvents: 'none',
                            filter: `blur(${1 - opacity}px)`
                        }}
                    />
                );
            })}
        </div>
    );
}

