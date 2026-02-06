import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import MouseTrail from '../components/MouseTrail';

/**
 * Root component - wraps the entire Docusaurus app
 * This is swizzled from @docusaurus/theme-classic
 * 
 * To regenerate: npx docusaurus swizzle @docusaurus/theme-classic Root --wrap
 */
export default function Root({ children }) {
    return (
        <>
            {/* Animated background with particles */}
            <AnimatedBackground />

            {/* Mouse trail effect */}
            <MouseTrail />

            {/* Gradient mesh background layer */}
            <div className="gradient-mesh-background" />

            {/* Original Docusaurus content */}
            {children}
        </>
    );
}
