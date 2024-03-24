import { forwardRef } from 'react';
import { InputFieldProps } from './types';

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
    ({ label, id, value, onChange, error, ...props }: InputFieldProps) => {
        return (
            <div className="flex flex-col">
                <label
                    htmlFor={id}
                    className="m-2 text-sm font-medium capitalize text-gray-300">
                    {label}
                </label>
                <input
                    {...props}
                    id={id}
                    value={value}
                    onChange={onChange}
                    className={`m-1 w-1/2 rounded-md border-none shadow-sm ${error ? 'border-red-500' : ''}`}
                />
                {error && <p className="text-sm text-red-500">{error}</p>}
            </div>
        );
    },
);

InputField.displayName = 'InputField';

export default InputField;
