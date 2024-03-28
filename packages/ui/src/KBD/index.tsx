import React from 'react';

export interface KBDProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

/**
 * KBD is a component that represents user input, such as keyboard input or voice commands.
 * @param {React.ReactNode} children - The content of the KBD.
 * @param {string} [className='px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500'] - The class name of the KBD.
 * @param {React.CSSProperties} style - The style of the KBD.
 * @returns {React.ReactElement} The KBD component.
 */
export function KBD({
    children,
    className = 'px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500',
    style,
}: KBDProps): React.ReactElement {
    return (
        <kbd
            className={className}
            style={style}>
            {children}
        </kbd>
    );
}
