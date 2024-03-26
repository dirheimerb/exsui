'use client';
import React from 'react';
import { useDialogContext } from '../hooks/use-dialog-context';
/**
 * DialogClose
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} props
 * @param {React.Ref<HTMLButtonElement>} ref
 * @returns {JSX.Element}
 */
export const DialogClose = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
    function DialogClose(props, ref): JSX.Element {
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

DialogClose.displayName = 'DialogClose';
