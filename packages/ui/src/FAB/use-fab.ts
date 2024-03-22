'use client';
import { useContext } from 'react';
import { FABContext } from './FABContext';

export const useFAB = () => {
    const context = useContext(FABContext);
    if (context === undefined) {
        throw new Error('useFAB must be used within a FABProvider');
    }
    return context;
};
