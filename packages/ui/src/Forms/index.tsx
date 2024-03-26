import { ReactNode } from 'react';
import FormItem from './FormItem';

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
export default function Form({ children, onSubmit, className }: FormProps): JSX.Element {
    return (
        <form onSubmit={onSubmit} className={className}>
                {children}
        </form>
    );
}

Form.Item = FormItem;