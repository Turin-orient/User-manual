import React from 'react';

/**
 * Root component - wraps the entire Docusaurus app
 * This is swizzled from @docusaurus/theme-classic
 * 
 * To regenerate: npx docusaurus swizzle @docusaurus/theme-classic Root --wrap
 */
export default function Root({ children }) {
    return (
        <>
            {children}
        </>
    );
}
