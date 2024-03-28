'use client';
import React from 'react';
import { ReactNode } from 'react';
import FormItem from './FormComponent';
import Validator, { StandardRuleKey, config, ValidationRule } from './Validator';
import { useReducer } from "react";
import { FormAction, FormState, formReducer } from './formState';


export interface FormProps {
    /**
     * validationKey
     * @type {StandardRuleKey}
     */
    validationKey: StandardRuleKey;
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

const initialFormState: FormState = {
    config: config,
    errors: {
        type: '',
        message: '',
    },
};


/**
 * Form
 * @param {FormProps} { children, onSubmit, className }
 * @returns {JSX.Element}
 */
const Form = React.memo(function Form({ validationKey, children, onSubmit, className }: FormProps): JSX.Element {
    const [state, dispatch] = useReducer(formReducer, initialFormState);
    const [ruleConfig, setRuleConfig] = React.useState<ValidationRule[]>(config);
    const formItems = React.Children.toArray(children);
    const validator = new Validator();

    const formItemProps = formItems.map((child) => {
        if (!React.isValidElement(child)) {
            return null;
        }

        const { label, name, type, value, onChange, placeholder, config, className } = child.props;
        return { label, name, type, value, onChange, placeholder, config, className };
    });

    return (
        <form className={className} onSubmit={onSubmit}>
            {formItemProps.map((props) => (
                <FormItem 
                    {...props} 
                    validationKey={validationKey} 
                    rules={ruleConfig} 
                    value={props?.value} 
                    placeholder={props?.placeholder} 
                    type={props?.type}
                    onChange={props?.onChange}
                    label={props?.label}
                    className={props?.className}
                />
            ))}
        </form>
    );
});

Form.displayName = 'Form';

export default Form;

export * from './Validator';