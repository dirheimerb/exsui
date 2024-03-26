'use client';
import React, { useId } from 'react';
import { useDialogContext } from '../hooks/use-dialog-context';
/**
 * DialogDescription
 * @param {React.HTMLProps<HTMLParagraphElement>} { children, ...props }
 * @returns {JSX.Element}
 */
export const DialogDescription = React.forwardRef<HTMLParagraphElement, React.HTMLProps<HTMLParagraphElement>>(
    function DialogDescription({ children, ...props }, ref): JSX.Element {
        const { setDescriptionId } = useDialogContext();
        const id = useId();

        // Only sets `aria-describedby` on the Dialog root element
        // if this component is mounted inside it.
        React.useLayoutEffect(() => {
            setDescriptionId(id);
            return () => {
                setDescriptionId(undefined);
            };
        }, [id, setDescriptionId]);

        return (
            <p
                {...props}
                id={id}
                ref={ref}>
                {children}
            </p>
        );
    },
);

DialogDescription.displayName = 'DialogDescription';
