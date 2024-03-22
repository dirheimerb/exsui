import { useInteractions } from '@floating-ui/react';
import React from 'react';

export interface SelectContextValue {
    activeIndex: number | null;
    selectedIndex: number | null;
    getItemProps: ReturnType<typeof useInteractions>['getItemProps'];
    handleSelect: (index: number | null) => void;
}

export interface OptionProps {
    label: string;
    className?: string;
}

export interface SelectProviderProps {
    children: React.ReactNode;
    selectedLabel: string;
    labelClassName?: string;
    placeholder?: string;
    selectWindowClassName?: string;
}

export interface SelectProps {
    children: React.ReactNode;
    selectedLabel: string;
    labelClassName?: string;
    placeholder?: string;
    selectWindowClassName?: string;
}
