import React from 'react';

/**
 * Scroll reveal component - Minimalist version
 * Removes scroll animations
 */
export default function ScrollReveal({
    children,
    animation = 'fade-up', // Kept for prop compatibility
    delay = 0,             // Kept for prop compatibility
    threshold = 0.1        // Kept for prop compatibility
}) {
    // Just render children without animation
    return (
        <div>
            {children}
        </div>
    );
}
