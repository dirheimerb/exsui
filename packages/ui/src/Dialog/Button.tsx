'use client';
import { useMergeRefs } from '@floating-ui/react';
import React from 'react';
import type { DialogTriggerProps } from './types';
import { useDialogContext } from './hooks/use-dialog-context';

/**
 * DialogTrigger
 * @param {React.HTMLProps<HTMLElement> & DialogTriggerProps} { children, asChild = false, ...props }
 * @returns {JSX.Element}
 */
export const DialogTrigger = React.forwardRef<HTMLElement, React.HTMLProps<HTMLElement> & DialogTriggerProps>(
    function DialogTrigger({ children, asChild = false, ...props }, propRef): JSX.Element {
        const context = useDialogContext();
        const childrenRef = (children as any).ref;
        const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

        // `asChild` allows the user to pass any element as the anchor
        if (asChild && React.isValidElement(children)) {
            return React.cloneElement(
                children,
                context.getReferenceProps({
                    ref,
                    ...props,
                    ...children.props,
                    'data-state': context.open ? 'open' : 'closed',
                }),
            );
        }

        return (
            <button
                ref={ref}
                // The user can style the trigger based on the state
                data-state={context.open ? 'open' : 'closed'}
                {...context.getReferenceProps(props)}>
                {children}
            </button>
        );
    },
);

DialogTrigger.displayName = 'DialogButton';
