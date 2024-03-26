'use client';
import React from 'react';
import type { DialogClassNames } from '../Dialog/types';

export const useDialogClassNames = (options: DialogClassNames) => {
    const [classNames, setClassNames] = React.useState<DialogClassNames>({
        description: '',
        heading: '',
        closeButton: '',
        dialog: '',
        content: '',
    });

    React.useEffect(() => {
        setClassNames(options);
    }, [options]);

    return { classNames };
};
