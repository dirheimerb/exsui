import React, { forwardRef } from 'react';
import { useFormItem } from '../hooks/use-form-item';
import InputField from '../InputFields/InputField';
import { clsxMerge } from '@exsui/utils';

export interface FormItemProps {
    label: string;
    type:
        | 'text'
        | 'password'
        | 'email'
        | 'number'
        | 'tel'
        | 'url'
        | 'date'
        | 'time'
        | 'datetime-local'
        | 'month'
        | 'week'
        | 'search'
        | 'color'
        | 'file'
        | 'range'
        | 'hidden'
        | 'checkbox'
        | 'radio'
        | 'submit'
        | 'reset'
        | 'button';
    initialValue?: string;
    value?: string;
    onChange?: (value: string) => void;
    className?: string;
    required?: boolean;
}

const FormItem = forwardRef<HTMLInputElement, FormItemProps>(function FormItem(
    { label, type, initialValue = '', value, onChange, className, required = false }: FormItemProps,
    ref,
): JSX.Element {
    const { value: internalValue, handleChange: internalOnChange } = useFormItem(initialValue);
    const handleValueChange = onChange
        ? (e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)
        : internalOnChange;
    const inputValue = value ?? internalValue;

    return (
        <InputField
            ref={ref}
            label={label}
            id={label}
            type={type}
            value={inputValue}
            onChange={handleValueChange}
            className={clsxMerge(className, 'form-input')}
            required={required}
        />
    );
});

FormItem.displayName = 'FormItem';

export default FormItem;
