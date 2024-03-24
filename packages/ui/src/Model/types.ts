import { Placement } from '@floating-ui/react';

export interface ModelContextProps {
    initialOpen?: boolean;
    placement?: Placement;
    modal?: boolean;
    isOpen?: boolean;
    onOpenChange?: (isOpen: boolean) => void;
}
