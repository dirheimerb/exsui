import React from 'react';
import { DialogContextObj } from '../Dialog/types';

/**
 * useDialogContext
 */
export const useDialogContext = () => {
    const context = React.useContext(DialogContextObj);

    if (context == null) {
        throw new Error('Dialog components must be wrapped in <Dialog />');
    }

    return context;
};
