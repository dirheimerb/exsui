import React from 'react';
import { ColorContext } from '../styles/ColorContext';
import { ColorContextAPI } from '../styles/types';

/**
 * A hook to access the color API
 * @returns {colors: ColorContextAPI} - The color object containing all the color functions
 */
export const useColor = (): { colors: ColorContextAPI } => {
    const colors = React.useContext(ColorContext);
    if (!colors) {
        throw new Error('useColor must be used within a ColorProvider');
    }
    return { colors };
};
