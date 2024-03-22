'use client';
import { useMergeRefs, FloatingPortal, FloatingOverlay, FloatingFocusManager } from '@floating-ui/react';
import React from 'react';
import { useDialogContext } from './hooks/use-dialog-context';

export const DialogContent = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
    function DialogContent(props, propRef) {
        const { context: floatingContext, ...context } = useDialogContext();
        const ref = useMergeRefs([context.refs.setFloating, propRef]);

        if (!floatingContext.open) return null;

        return (
            <FloatingPortal>
                <FloatingOverlay
                    className="grid place-items-center bg-[rgba(0,0,0,0.8)]"
                    lockScroll>
                    <FloatingFocusManager context={floatingContext}>
                        <div
                            aria-describedby={context.descriptionId}
                            aria-labelledby={context.labelId}
                            className={props.className}
                            ref={ref}
                            {...context.getFloatingProps(props)}>
                            {props.children}
                        </div>
                    </FloatingFocusManager>
                </FloatingOverlay>
            </FloatingPortal>
        );
    },
);
