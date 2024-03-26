import { useFloating, useClick, useDismiss, useRole, useInteractions } from '@floating-ui/react';
import { useState, useMemo } from 'react';
import type { DialogOptions } from '../Dialog/types';

/**
 * useDialog
 * @param {DialogOptions} { open, setOpen }
 * @returns {ReturnDialogOptions}
 */
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
