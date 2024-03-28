import React from 'react';

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
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
}

export interface EmailValidationProps {
    email: string;
    setEmail: (email: string) => void;
    isValid: boolean;
    errorMessage: string;
    className?: string;
    disabled?: boolean;
    textColor?: string;
    ringColor?: string;
    focusColor?: string;
    placeholderColor?: string;
}

export interface EditableTextFieldProps {
    initialValue: string;
    onSave: (value: string) => void; // Callback function to save the edited value
}
