import { useState, useEffect } from 'react';

/**
 * Custom hook to detect user's motion preferences and provide settings for animations
 * Respects prefers-reduced-motion and allows user override
 */
export default function useAnimationPreferences() {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
    const [animationsEnabled, setAnimationsEnabled] = useState(true);

    useEffect(() => {
        // Check system preference for reduced motion
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

        const handleChange = () => {
            setPrefersReducedMotion(mediaQuery.matches);
            // Auto-disable animations if user prefers reduced motion
            if (mediaQuery.matches) {
                setAnimationsEnabled(false);
            }
        };

        // Initial check
        handleChange();

        // Listen for changes
        mediaQuery.addEventListener('change', handleChange);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    // Check if we should show animations
    const shouldAnimate = animationsEnabled && !prefersReducedMotion;

    return {
        prefersReducedMotion,
        animationsEnabled,
        shouldAnimate,
        toggleAnimations: () => setAnimationsEnabled(prev => !prev)
    };
}
