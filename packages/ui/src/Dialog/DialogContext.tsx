import React from 'react';
import type { DialogOptions } from './types';
import { DialogContextObj } from './types';
import { useDialog } from './hooks/use-dialog';
/**
 * DialogContext
 * @param {React.ReactNode} { children, ...options }
 * @returns {JSX.Element}
 */
export function DialogContext({
    children,
    ...options
}: {
    children: React.ReactNode;
} & DialogOptions): JSX.Element {
    const dialog = useDialog(options);
    return <DialogContextObj.Provider value={dialog}>{children}</DialogContextObj.Provider>;
}
