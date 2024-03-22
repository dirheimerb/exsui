'use client';
import React, { createContext, useState } from 'react';
import { FABContextType, FABProviderProps, FABItemProps } from './types';

export const FABContext = createContext<FABContextType | undefined>(undefined);

export const FABProvider: React.FC<FABProviderProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [items, setItems] = useState<FABItemProps[]>([]);

    const toggle = () => setIsOpen(!isOpen);

    return <FABContext.Provider value={{ isOpen, items, toggle, setItems }}>{children}</FABContext.Provider>;
};
