'use client';
import {
    useFloating,
    autoUpdate,
    flip,
    size,
    useRole,
    useDismiss,
    useListNavigation,
    useInteractions,
    FloatingPortal,
    FloatingFocusManager,
} from '@floating-ui/react';
import React, { useState, useRef } from 'react';
import Item from './Item';
import { data } from './example';
/**
 * AutoComplete
 * @returns {JSX.Element}
 */
export default function AutoComplete(): JSX.Element {
    const [open, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const listRef = useRef<Array<HTMLElement | null>>([]);

    const { refs, floatingStyles, context } = useFloating<HTMLInputElement>({
        whileElementsMounted: autoUpdate,
        open,
        onOpenChange: setOpen,
        middleware: [
            flip({ padding: 10 }),
            size({
                apply({ rects, availableHeight, elements }) {
                    Object.assign(elements.floating.style, {
                        width: `${rects.reference.width}px`,
                        maxHeight: `${availableHeight}px`,
                    });
                },
                padding: 10,
            }),
        ],
    });

    const role = useRole(context, { role: 'listbox' });
    const dismiss = useDismiss(context);
    const listNav = useListNavigation(context, {
        listRef,
        activeIndex,
        onNavigate: setActiveIndex,
        virtual: true,
        loop: true,
    });

    const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([role, dismiss, listNav]);

    function onChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setInputValue(value);

        if (value) {
            setOpen(true);
            setActiveIndex(0);
        } else {
            setOpen(false);
        }
    }

    const items = data.filter((item) => item.toLowerCase().startsWith(inputValue.toLowerCase()));

    return (
        <>
            <input
                data-value={inputValue}
                role="combobox"
                aria-expanded={open}
                aria-owns={open ? context.nodeId : undefined}
                aria-controls={open ? context.nodeId : undefined}
                aria-haspopup="listbox"
                aria-autocomplete="list"
                aria-activedescendant={activeIndex != null ? listRef.current[activeIndex]?.id : undefined}
                {...getReferenceProps({
                    ref: refs.setReference,
                    onChange,
                    value: inputValue,
                    placeholder: 'Enter fruit',
                    'aria-autocomplete': 'list',
                    onKeyDown(event) {
                        if (event.key === 'Enter' && activeIndex != null && items[activeIndex]) {
                            setInputValue(items[activeIndex]);
                            setActiveIndex(null);
                            setOpen(false);
                        }
                    },
                })}
            />
            <FloatingPortal>
                {open && (
                    <FloatingFocusManager
                        context={context}
                        initialFocus={-1}
                        visuallyHiddenDismiss>
                        <div
                            {...getFloatingProps({
                                ref: refs.setFloating,
                                style: {
                                    ...floatingStyles,
                                    background: '#eee',
                                    color: 'black',
                                    overflowY: 'auto',
                                },
                            })}>
                            {items.map((item, index) => (
                                <Item
                                    {...getItemProps({
                                        key: item,
                                        ref(node) {
                                            listRef.current[index] = node;
                                        },
                                        onClick() {
                                            setInputValue(item);
                                            setOpen(false);
                                            refs.domReference.current?.focus();
                                        },
                                    })}
                                    active={activeIndex === index}>
                                    {item}
                                </Item>
                            ))}
                        </div>
                    </FloatingFocusManager>
                )}
            </FloatingPortal>
        </>
    );
}
