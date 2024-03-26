'use client';
import React from 'react';
import { useImperativeHandle, useRef } from 'react';
import { InputFieldProps } from './types';
/**
 * InputField component
 * @param {InputFieldProps} props
 * @returns {JSX.Element}
 */
const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
    ({ label, id, value, onChange, error, ...props }: InputFieldProps, ref): JSX.Element => {
        const inputRef = useRef<HTMLInputElement | null>(null);
        useImperativeHandle<any, any>(
            ref,
            () => {
                return {
                    focus() {
                        inputRef.current?.focus();
                    },
                    scrollIntoView() {
                        inputRef.current?.scrollIntoView();
                    },
                };
            },
            [],
        );
        return (
            <div className="flex flex-col">
                <label
                    htmlFor={id}
                    className="m-2 text-sm font-medium capitalize text-gray-300">
                    {label}
                </label>
                <input
                    {...props}
                    type={props.type}
                    id={id}
                    value={value}
                    onChange={onChange}
                    className={`m-1 w-1/2 rounded-md border-none shadow-sm ${error ? 'border-red-500' : ''}`}
                    ref={inputRef}
                    aria-label={label}
                    name={id}
                    data-type={props.type}
                />
                {error && <p className="text-sm text-red-500">{error}</p>}
            </div>
        );
    },
);

InputField.displayName = 'InputField';

export default InputField;
