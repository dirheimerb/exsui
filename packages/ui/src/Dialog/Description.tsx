'use client';
import React, { useId } from 'react';
import { useDialogContext } from './hooks/use-dialog-context';

export const DialogDescription = React.forwardRef<HTMLParagraphElement, React.HTMLProps<HTMLParagraphElement>>(
    function DialogDescription({ children, ...props }, ref) {
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
