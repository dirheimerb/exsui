import React, { useState, useCallback, useMemo } from 'react';
import { DrawerAnchor, DrawerProps, DrawerProviderProps } from './types';

export const DrawerContext = React.createContext<DrawerProps | undefined>(undefined);
/**
 * DrawerProvider
 * @param {DrawerProviderProps} { children }
 * @returns {JSX.Element}
 */
export function DrawerProvider({ children }: DrawerProviderProps): JSX.Element {
    const [open, setOpen] = useState(false); // Use `useState` directly
    const [anchor, setAnchor] = useState<DrawerAnchor>('left');
    const [width, setWidth] = useState('240px');
    const [elevation, setElevation] = useState(16);
    const [variant, setVariant] = useState<'temporary' | 'persistent' | 'permanent'>('temporary');
    const [transitionDuration, setTransitionDuration] = useState(200);

    const onClose = useCallback((open: boolean) => {
        setOpen(open);
    }, []);

    const value = useMemo(() => {
        return {
            open,
            onToggle: onClose,
            anchor,
            setAnchor, // Exposing the setter function
            width,
            setWidth, // Exposing the setter function
            elevation,
            setElevation, // Exposing the setter function
            variant,
            setVariant, // Exposing the setter function
            transitionDuration,
            setTransitionDuration, // Exposing the setter function
        };
    }, [open, onClose, anchor, width, elevation, variant, transitionDuration]);

    return <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>;
}
