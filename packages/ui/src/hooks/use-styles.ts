import { useContext } from 'react';
import { ThemeContext } from '../styles/context';
import { StyleAPI } from '../styles/types';
/**
 * A hook to access the style API
 * @returns {theme: StyleAPI} - The theme object containing all the style functions
 */
export const useStyle = (): { theme: StyleAPI } => {
    const theme = useContext(ThemeContext);
    if (!theme) {
        throw new Error('useStyle must be used within a StyleProvider');
    }
    return { theme };
};
