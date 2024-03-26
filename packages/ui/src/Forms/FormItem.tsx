import React from 'react';
import useFormItem from '../hooks/use-form-item';

export interface FormItemProps {
  label: string;
  type: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'date' | 'time' | 'datetime-local' | 'month' | 'week' | 'search' | 'color' | 'file' | 'range' | 'hidden' | 'checkbox' | 'radio' | 'submit' | 'reset' | 'button';
  initialValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export default function FormItem({ label, type, initialValue = '', value, onChange, className }: FormItemProps): JSX.Element {
  const { value: internalValue, handleChange: internalOnChange } = useFormItem(initialValue);

  const handleValueChange = onChange ? (e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value) : internalOnChange;
  const inputValue = value ?? internalValue;

  return (
    <label className={`block ${className}`}>
      <span className="text-gray-700">{label}</span>
      <input
        type={type}
        value={inputValue}
        onChange={handleValueChange}
        className="form-input mt-1 block w-full"
      />
    </label>
  );
}
