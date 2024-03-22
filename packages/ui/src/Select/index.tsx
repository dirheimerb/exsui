import React from 'react';
import { SelectProvider } from './SelectContext';
import { Option } from './Option';
import './styles.css';
import { SelectProps } from './types';

export * from './SelectContext';
export * from './types';

/**
 * The select component
 * @param children - The children of the select component
 * @returns JSX.Element
 * @example
```tsx
<Select>
    <Select.Option label='General' />
    <Select.Option label='Notifications' />
    <Select.Option label='Priority' />
    <Select.Option label='More' />
</Select>
```
 */
export default function Select({
    children,
    selectedLabel,
    labelClassName,
    placeholder,
    selectWindowClassName,
}: SelectProps): JSX.Element {
    return (
        <SelectProvider
            selectedLabel={selectedLabel}
            labelClassName={labelClassName}
            placeholder={placeholder}
            selectWindowClassName={selectWindowClassName}>
            {children}
        </SelectProvider>
    );
}

Select.Option = Option;
