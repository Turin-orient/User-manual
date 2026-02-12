import React from 'react';

/**
 * Interactive card - Minimalist version
 * Removes 3D tilt effects
 */
export default function InteractiveCard({ children, className = '' }) {
    return (
        <div className={`interactive-card ${className}`}>
            {children}
        </div>
    );
}
