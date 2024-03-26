import React from 'react';
import { AccordionContextProvider } from './Context';
import { AccordionProps } from './types';
import AccordionItem from './Item';
import { LayoutGroup } from 'framer-motion';

/**
 * Accordion
 * @param {AccordionProps} props
 * @returns {JSX.Element}
 */
const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(({ items }): JSX.Element => {
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

export default Accordion;
