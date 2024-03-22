import { ReactNode } from 'react';

export interface FABProps {
    isOpen: boolean;
    items: FABItemProps[];
}

export interface FABItemProps {
    label: string;
    onClick: () => void;
    icon: ReactNode;
}

export interface FABContextProps {
    isOpen: boolean;
    items: FABItemProps[];
}

export interface FABProviderProps {
    children: React.ReactNode;
}

export interface FABContextType {
    isOpen: boolean;
    items: FABItemProps[];
    toggle: () => void;
    setItems: (items: FABItemProps[]) => void;
}
