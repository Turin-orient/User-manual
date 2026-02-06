import React, { useRef, useState } from 'react';
import useAnimationPreferences from '../hooks/useAnimationPreferences';

/**
 * Interactive card with 3D tilt effect on mouse move
 * Similar to Antigravity website cards
 */
export default function InteractiveCard({ children, className = '' }) {
    const cardRef = useRef(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const { shouldAnimate } = useAnimationPreferences();

    const handleMouseMove = (e) => {
        if (!shouldAnimate || !cardRef.current) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();

        // Calculate mouse position relative to card center
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        // Calculate rotation (max 10 degrees)
        const rotateY = (x / rect.width) * 20;
        const rotateX = -(y / rect.height) * 20;

        setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
        setIsHovering(false);
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const cardStyle = {
        transform: shouldAnimate
            ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovering ? 1.02 : 1})`
            : 'none',
        transition: shouldAnimate
            ? 'transform 0.2s ease-out, box-shadow 0.3s ease'
            : 'none',
        boxShadow: isHovering && shouldAnimate
            ? '0 20px 40px rgba(0, 0, 0, 0.15)'
            : '0 4px 6px rgba(0, 0, 0, 0.1)',
        transformStyle: 'preserve-3d',
        willChange: 'transform'
    };

    return (
        <div
            ref={cardRef}
            className={className}
            style={cardStyle}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
        >
            {children}
        </div>
    );
}
