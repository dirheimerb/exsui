'use client';
import React from 'react';
import { useDialogContext } from './hooks/use-dialog-context';

export const DialogClose = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
    function DialogClose(props, ref) {
        const { setOpen } = useDialogContext();
        return (
            <button
                type="button"
                {...props}
                onClick={() => {
                    setOpen(false);
                }}
                ref={ref}
            />
        );
    },
);
