import React from 'react';
import type { DialogOptions } from './types';
import { DialogContextObj } from './types';
import { useDialog } from './hooks/use-dialog';

export function DialogContext({
    children,
    ...options
}: {
    children: React.ReactNode;
} & DialogOptions) {
    const dialog = useDialog(options);
    return <DialogContextObj.Provider value={dialog}>{children}</DialogContextObj.Provider>;
}
