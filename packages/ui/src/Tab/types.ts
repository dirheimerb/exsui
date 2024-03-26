import { ReactNode } from 'react';

export interface TabData {
    items: Items[];
}

export interface Items {
    name: string;
    href: string;
    current: boolean;
    content: ReactNode;
}

export interface TabContextProps {
    activeIndex: number;
    setActiveIndex: (index: number) => void;
    items: Items[];
    handleSetItems: (newItems: Items[]) => void;
}

export interface TabButtonProps {
    children: ReactNode;
    current: boolean;
    className?: string;
    name: string;
    onClick: () => void;
    href: string;
}
