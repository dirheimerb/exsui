'use client';
import React from 'react';
import { ReactNode } from 'react';

export interface FormProps {
    /**
     * children
     * @type {ReactNode}
     */
    children: ReactNode;
    /**
     * onSubmit
     * @type {() => void}
     */
    onSubmit: () => void;
    /**
     * className
     * @type {string}
     */
    className?: string;
}

/**
 * Form
 * @param {FormProps} { children, onSubmit, className }
 * @returns {JSX.Element}
 */

const Form = React.memo(function Form({ children, onSubmit, className }: FormProps): JSX.Element {
    return (
        <form
            onSubmit={onSubmit}
            className={className}>
            {children}
        </form>
    );
});

Form.displayName = 'Form';

export default Form;
export * from './FormItem';
