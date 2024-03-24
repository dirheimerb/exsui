'use client';
import { useListItem, useFloatingTree, useMergeRefs } from '@floating-ui/react';
import { GroupMenuItemProps } from './types';
import React, { forwardRef } from 'react';
import { MenuContext } from './MenuContext';

import './styles.css';
import { clsxMerge } from '@exsui/utils';

const MenuItem = forwardRef<HTMLButtonElement, GroupMenuItemProps & React.ButtonHTMLAttributes<HTMLButtonElement>>(
    (
        {
            label,
            disabled,
            itemClassName = 'text-gray-100 block w-full p-1 shadow px-4 py-2 text-sm text-left rounded-md',
            style,
            ...props
        },
        forwardedRef,
    ): JSX.Element => {
        const menu = React.useContext(MenuContext);
        const item = useListItem({ label: disabled ? null : label });
        const tree = useFloatingTree();
        const isActive = item.index === menu.activeIndex;

        return (
            <button
                id="esxui-menu-item"
                {...props}
                ref={useMergeRefs([item.ref, forwardedRef])}
                type="button"
                role="menuitem"
                className={clsxMerge(itemClassName)}
                style={style}
                tabIndex={isActive ? 0 : -1}
                disabled={disabled}
                {...menu.getItemProps({
                    onClick(event: React.MouseEvent<HTMLButtonElement>) {
                        props.onClick?.(event);
                        tree?.events.emit('click');
                    },
                    onFocus(event: React.FocusEvent<HTMLButtonElement>) {
                        props.onFocus?.(event);
                        menu.setHasFocusInside(true);
                    },
                })}>
                {label}
            </button>
        );
    },
);

MenuItem.displayName = 'MenuItem';

export default MenuItem;
