import { useListItem } from '@floating-ui/react';
import { SelectContext } from './SelectContext';
import React from 'react';
import { OptionProps } from './types';

export function Option({ label, className }: OptionProps): JSX.Element {
    const { activeIndex, selectedIndex, getItemProps, handleSelect } = React.useContext(SelectContext);

    const { ref, index } = useListItem({ label });

    const isActive = activeIndex === index;
    const isSelected = selectedIndex === index;

    return (
        <button
            id="exsui-select-option"
            ref={ref}
            role="option"
            className={className}
            aria-selected={isActive && isSelected}
            tabIndex={isActive ? 0 : -1}
            {...getItemProps({
                onClick: () => handleSelect(index),
            })}>
            {label}
        </button>
    );
}
