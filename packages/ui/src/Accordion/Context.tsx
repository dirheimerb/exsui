import React, { useState } from 'react';
import { AccordionContextProviderProps, AccordionContextType } from './types';

export const AccordionContext = React.createContext<AccordionContextType | null>(null);
/**
 * AccordionContextProvider
 * @param {AccordionContextProviderProps} children
 * @returns {JSX.Element}
 */
export const AccordionContextProvider = ({ children }: AccordionContextProviderProps): JSX.Element => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    return <AccordionContext.Provider value={{ openIndex, setOpenIndex }}>{children}</AccordionContext.Provider>;
};
