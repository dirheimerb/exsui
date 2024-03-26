import React, { createContext } from 'react';
import { ModelContextProps } from './types';
import { useModel } from '../hooks/use-model';

// PopoverOptions

export interface ModelProviderProps extends ModelContextProps {
    children: React.ReactNode;
}

export const ModelContext = createContext<ModelContextProps>({
    initialOpen: false,
    placement: 'bottom',
    modal: true,
    isOpen: false,
    onOpenChange: () => {},
});

export function ModelProvider({ children, modal = false, ...restOptions }: ModelProviderProps) {
    // This can accept any props as options, e.g. `placement`,
    // or other positioning options.
    const popover = useModel({ modal, ...restOptions });
    return <ModelContext.Provider value={popover}>{children}</ModelContext.Provider>;
}
