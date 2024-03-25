import { ReactNode } from 'react';

export interface DrawerProps {
    anchor: DrawerAnchor;
    setAnchor: (anchor: DrawerAnchor) => void;
    open: boolean;
    onToggle: (open: boolean) => void;
    width: string;
    setWidth: (width: string) => void;
    elevation: number;
    setElevation: (elevation: number) => void;
    variant: DrawerVariant;
    setVariant: (variant: DrawerVariant) => void;
    transitionDuration: number;
    setTransitionDuration: (duration: number) => void;
}

export interface DrawerOptions {
    anchor?: DrawerAnchor;
    width?: string;
    elevation?: number;
    variant?: DrawerVariant;
    transitionDuration?: number;
    children: React.ReactNode;
}

export type DrawerAnchor = 'top' | 'left' | 'bottom' | 'right';
export type DrawerVariant = 'temporary' | 'persistent' | 'permanent';

export interface DrawerContextProps {
    open: boolean;
    onClose: () => void;
}

export interface DrawerProviderProps {
    children: ReactNode;
}

export interface DrawerHeaderProps {
    children: ReactNode;
}

export interface DrawerFooterProps {
    children: ReactNode;
}

export interface DrawerBodyProps {
    children: ReactNode;
}

export interface DrawerContentProps {
    children: ReactNode;
}
