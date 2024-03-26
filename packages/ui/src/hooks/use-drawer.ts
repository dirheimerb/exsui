import React from 'react';
import { DrawerContext } from '../Drawer/Context';
import { DrawerProps } from '../Drawer/types';
/**
 * useDrawer
 * @returns {DrawerProps}
 */
export function useDrawer(): DrawerProps {
    const context = React.useContext(DrawerContext);
    if (!context) {
        throw new Error('useDrawer must be used within a DrawerProvider');
    }
    return context;
}
