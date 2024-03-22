import React, { ReactNode } from 'react';

export interface MenuContextObj {
    getItemProps: (userProps?: React.HTMLProps<HTMLElement>) => Record<string, unknown>;
    activeIndex: number | null;
    setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
    setHasFocusInside: React.Dispatch<React.SetStateAction<boolean>>;
    isOpen: boolean;
}

export interface MenuItemProps {
    label: string;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    onFocus?: React.FocusEventHandler<HTMLButtonElement>;
    className?: string;
    style?: React.CSSProperties;
}

export interface MenuProps {
    label: string;
    children: ReactNode;
    nested?: boolean;
    rootClassName?: string;
    groupClassName?: string;
    itemClassName?: string;
}

export interface MenuGroupProps extends MenuProps {
    buttonClassName?: string;
    label: string;
    itemClassName?: string;
    groupClassName?: string;
    rootClassName?: string;
}

export interface GroupMenuItemProps extends MenuItemProps {
    itemClassName?: string;
}
