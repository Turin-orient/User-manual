import React, { useEffect, useRef, useState } from 'react';
import useAnimationPreferences from '../hooks/useAnimationPreferences';

/**
 * Scroll reveal component - animates children when they come into viewport
 * Uses Intersection Observer for performance
 */
export default function ScrollReveal({
    children,
    animation = 'fade-up',
    delay = 0,
    threshold = 0.1
}) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    const { shouldAnimate } = useAnimationPreferences();

    useEffect(() => {
        if (!shouldAnimate) {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Only animate once
                }
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [shouldAnimate, threshold]);

    const getAnimationStyle = () => {
        if (!shouldAnimate) {
            return { opacity: 1, transform: 'none' };
        }

        const baseStyle = {
            transition: `opacity 0.8s ease-out ${delay}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        };

        if (!isVisible) {
            switch (animation) {
                case 'fade-up':
                    return { ...baseStyle, opacity: 0, transform: 'translateY(30px)' };
                case 'fade-down':
                    return { ...baseStyle, opacity: 0, transform: 'translateY(-30px)' };
                case 'fade-left':
                    return { ...baseStyle, opacity: 0, transform: 'translateX(30px)' };
                case 'fade-right':
                    return { ...baseStyle, opacity: 0, transform: 'translateX(-30px)' };
                case 'scale':
                    return { ...baseStyle, opacity: 0, transform: 'scale(0.9)' };
                default:
                    return { ...baseStyle, opacity: 0 };
            }
        }

        return { ...baseStyle, opacity: 1, transform: 'translate(0) scale(1)' };
    };

    return (
        <div ref={ref} style={getAnimationStyle()}>
            {children}
        </div>
    );
}
