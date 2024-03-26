import React from 'react';
import { autoUpdate, flip, offset, shift, useFloating, useInteractions, useRole } from '@floating-ui/react';
import { useClick } from '@floating-ui/react';
import { useDismiss } from '@floating-ui/react';
import { ModelContextProps } from '../Model/types';

export const useModel = ({
    initialOpen = false,
    placement = 'bottom',
    modal,
    isOpen,
    onOpenChange: setControlledOpen,
}: ModelContextProps): ModelContextProps => {
    const [open, setOpen] = React.useState(initialOpen);
    const [labelId, setLabelId] = React.useState<string | undefined>();
    const [descriptionId, setDescriptionId] = React.useState<string | undefined>();

    const isControlled = isOpen !== undefined;
    const finalOpen = isControlled ? isOpen : open;

    const onOpenChange = (newOpen: boolean) => {
        if (!isControlled) {
            setOpen(newOpen);
        }
        if (setControlledOpen) {
            setControlledOpen(newOpen);
        }
    };
    const data = useFloating({
        placement,
        open: finalOpen,
        onOpenChange: onOpenChange,
        whileElementsMounted: autoUpdate,
        middleware: [
            offset(5),
            flip({
                crossAxis: placement.includes('-'),
                fallbackAxisSideDirection: 'end',
                padding: 5,
            }),
            shift({ padding: 5 }),
        ],
    });

    const context = data.context;

    const click = useClick(context, {
        enabled: isOpen == null,
    });
    const dismiss = useDismiss(context);
    const role = useRole(context);

    const interactions = useInteractions([click, dismiss, role]);

    return React.useMemo(
        () => ({
            open,
            setOpen,
            ...interactions,
            ...data,
            modal,
            labelId,
            descriptionId,
            setLabelId,
            setDescriptionId,
        }),
        [open, setOpen, interactions, data, modal, labelId, descriptionId],
    );
};
