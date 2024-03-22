import {
    useFloating,
    useClick,
    useDismiss,
    useRole,
    useInteractions,
    Placement,
    Strategy,
    MiddlewareData,
    ReferenceElement,
} from '@floating-ui/react';
import { useState, useMemo } from 'react';
import type { DialogOptions } from '../types';

export function useDialog({ open, setOpen }: DialogOptions): any {
    const [labelId, setLabelId] = useState<string | undefined>();
    const [descriptionId, setDescriptionId] = useState<string | undefined>();

    const data = useFloating({
        open,
        onOpenChange: setOpen,
    });

    const context = data.context;

    const click = useClick(context, {
        enabled: open === null,
    });
    const dismiss = useDismiss(context, { outsidePressEvent: 'mousedown' });
    const role = useRole(context);

    const interactions = useInteractions([click, dismiss, role]);

    const value = useMemo(
        () => ({
            open,
            setOpen,
            ...interactions,
            ...data,
            labelId,
            descriptionId,
            setLabelId,
            setDescriptionId,
        }),
        [open, setOpen, interactions, data, labelId, descriptionId],
    );

    return value;
}

// interface ReturnDialogOptions {
//     open: boolean;
//     setOpen: (open: boolean) => void;
//     labelId: string | undefined;
//     descriptionId: string | undefined;
//     setLabelId: (id: string) => void;
//     setDescriptionId: (id: string) => void;
//     getReferenceProps: (userProps?: React.HTMLProps<Element> | undefined) => Record<string, unknown>;
//     getFloatingProps: (userProps?: React.HTMLProps<HTMLElement> | undefined) => Record<string, unknown>;
//     getItemProps: (userProps?: (Omit<React.HTMLProps<HTMLElement>, 'role'> & { role?: string }) | undefined) => Record<string, unknown>;
//     // data: {
//         placement: Placement;
//         strategy: Strategy;
//         x: number;
//         y: number;
//         middlewareData: MiddlewareData;
//         isPositioned: boolean;
//         update: () => void;
//         floatingStyles: React.CSSProperties;
//         refs: {
//             reference: React.MutableRefObject<ReferenceElement | null>;
//             floating: React.MutableRefObject<HTMLElement | null>;
//             domReference: React.MutableRefObject<Element | null>;
//             setReference(node: HTMLButtonElement | null): void;
//             setFloating(node: HTMLElement | null): void;
//             setPositionReference(node: ReferenceElement): void;
//         }
//         elements: {
//             reference: HTMLButtonElement | null;
//             floating: HTMLElement | null;
//           };
//           context: DialogFloatingContext;
//     // }

// }

// export interface DialogFloatingContext {
//         placement: Placement;
//         strategy: Strategy;
//         x: number;
//         y: number;
//         middlewareData: MiddlewareData;
//         isPositioned: boolean;
//         update: () => void;
//         floatingStyles: React.CSSProperties;
//         noteId: string | undefined;
//         floatingId: string;
//         open: boolean;
//         onOpenChange: (open: boolean) => void;
//         events: {
//             emith: (event: Event) => void;
//             on: (event: string, handler: (event: Event) => void) => void;
//             off: (event: string, handler: (event: Event) => void) => void;
//       }
// }
