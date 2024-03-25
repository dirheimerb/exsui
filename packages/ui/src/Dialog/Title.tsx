'use client';
import React, { useId } from 'react';
import { useDialogContext } from './hooks/use-dialog-context';
/**
 * DialogTitle
 * @param {React.HTMLProps<HTMLHeadingElement>} { children, ...props }
 * @returns {JSX.Element}
 */
export const DialogTitle = React.forwardRef<HTMLHeadingElement, React.HTMLProps<HTMLHeadingElement>>(
    function DialogTitle({ children, ...props }, ref): JSX.Element {
        const { setLabelId } = useDialogContext();
        const id = useId();

        // Only sets `aria-labelledby` on the Dialog root element
        // if this component is mounted inside it.
        React.useLayoutEffect(() => {
            setLabelId(id);
            return () => {
                setLabelId(undefined);
            };
        }, [id, setLabelId]);

        return (
            <h2
                {...props}
                id={id}
                ref={ref}>
                {children}
            </h2>
        );
    },
);

DialogTitle.displayName = 'DialogTitle';
