import React, { ReactNode } from 'react';
import { AccordionProps } from './styles';
import { AccordionContextProvider } from './Context';
import { AccordionItemProps } from './types';

import AccordionItem from './Item';
import { LayoutGroup } from 'framer-motion';

export interface AccordionProps extends React.ComponentProps<'div'> {
    open: boolean;
    icon?: ReactNode;
    animate?: {
        unmount: {
            height: string;
            transition: { duration: number; times: number[] };
        };
        mount: {
            height: string;
            transition: { duration: number; times: number[] };
        };
    };
    disabled?: boolean;
    className?: string;
    items: AccordionItemProps[];
}

export interface AccordionProps {
    items: AccordionItemProps[];
}
/**
 * Accordion
 * @param {AccordionProps} props
 * @returns {JSX.Element}
 */
export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(({ items }): JSX.Element => {
    return (
        <AccordionContextProvider>
            <LayoutGroup>
                {items.map((item, index) => (
                    <AccordionItem
                        key={index}
                        title={item.title}
                        content={item.content}
                    />
                ))}
            </LayoutGroup>
        </AccordionContextProvider>
    );
});

Accordion.displayName = 'Accordion';
