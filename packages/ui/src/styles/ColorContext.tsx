import { useCallback } from 'react';
import { backgroundColors, colors, textColors } from './colors';
import { ColorContextAPI, ColorProviderProps } from './types';
import React from 'react';
import { useMemo } from 'react';

export const ColorContext = React.createContext<ColorContextAPI | undefined>(undefined);
/**
 * The ColorProvider component
 * @param {ColorProviderProps} { children } - The children of the ColorProvider
 * @returns {JSX.Element} - The JSX element representing the ColorProvider
 */
export const ColorProvider = ({ children }: ColorProviderProps): JSX.Element => {
    const [color, setColor] = React.useState<ColorContextAPI | undefined>({
        textColors: colors.text,
        backgroundColors: colors.background,
        setColors: () => {},
    });

    const handleColorChange = useCallback((color: ColorContextAPI) => {
        setColor(color);
    }, []);

    const colorValue = useMemo(() => {
        if (!color)
            return {
                textColors: textColors,
                backgroundColors: backgroundColors,
                setColors: handleColorChange,
            };
        return {
            textColors: color?.textColors,
            backgroundColors: color?.backgroundColors,
            setColors: handleColorChange,
        };
    }, [color, handleColorChange]);
    return <ColorContext.Provider value={colorValue}>{children}</ColorContext.Provider>;
};
