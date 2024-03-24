import { AccordionContext } from "./Context";
import { AccordionContextType } from "./types";
import React from "react";

/**
 * A hook to use the Accordion context.
 * @returns {AccordionContextType} The Accordion context.
 */
export function useAccordion(): AccordionContextType {
    const context = React.useContext(AccordionContext);

    if (!context) {
        throw new Error(
            'useAccordion() must be used within an Accordion. It happens when you use AccordionHeader or AccordionBody components outside the Accordion component.',
        );
    }

    return context;
}