import React from 'react';
import type { useDialog } from './hooks/use-dialog';

export interface DialogOptions {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export type ContextType =
    | (ReturnType<typeof useDialog> & {
          setLabelId: React.Dispatch<React.SetStateAction<string | undefined>>;
          setDescriptionId: React.Dispatch<React.SetStateAction<string | undefined>>;
      })
    | null;

export const DialogContextObj = React.createContext<ContextType>(null);

export interface DialogTriggerProps {
    children: React.ReactNode;
    asChild?: boolean;
}

export interface DialogClassNames {
    closeButton?: string;
    content?: string;
    description?: string;
    heading?: string;
    dialog?: string;
}
