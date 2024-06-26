import React, { useState, useMemo, useCallback } from 'react';
import { StyleAPI, StyleProviderProps } from './types';
import { backgroundColors, textColors } from './colors';

export const ThemeContext = React.createContext<StyleAPI | undefined>(undefined);
/**
 * The StyleProvider component
 * @param {StyleProviderProps} { children } - The children of the StyleProvider
 * @returns {JSX.Element} - The JSX element representing the StyleProvider
 */
export const StyleProvider = ({ children }: StyleProviderProps): JSX.Element => {
    const [style, setStyle] = useState<StyleAPI>({
        width: {
            quarter: 'w-1/4',
            half: 'w-1/2',
            threeQuarters: 'w-3/4',
            full: 'w-full',
        },
        round: {
            none: 'rounded-none',
            sm: 'rounded-sm',
            md: 'rounded-md',
            lg: 'rounded-lg',
            full: 'rounded-full',
        },
        textSize: {
            xs: 'text-xs',
            sm: 'text-sm',
            base: 'text-base',
            lg: 'text-lg',
            xl: 'text-xl',
            '2xl': 'text-2xl',
            '3xl': 'text-3xl',
            '4xl': 'text-4xl',
            '5xl': 'text-5xl',
            '6xl': 'text-6xl',
            '7xl': 'text-7xl',
            '8xl': 'text-8xl',
            '9xl': 'text-9xl',
        },
        color: {
            text: textColors,
            backgroundColor: backgroundColors,
        },
        shadow: {
            sm: 'shadow-sm',
            md: 'shadow-md',
            lg: 'shadow-lg',
            xl: 'shadow-xl',
            '2xl': 'shadow-2xl',
            inner: 'shadow-inner',
            outline: 'shadow-outline',
            none: 'shadow-none',
        },
        disabled: 'text-gray-500',
        textDecoration: {
            underline: 'underline',
            overline: 'overline',
            lineThrough: 'line-through',
        },
    });

    const handleCallback = useCallback((option: Partial<StyleAPI>) => {
        setStyle((prevStyle) => ({ ...prevStyle, ...option }));
    }, []);

    const themeValue = useMemo(
        () => ({
            ...style,
            setStyle: handleCallback,
        }),
        [style, handleCallback],
    );

    return <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>;
};
