import React, { HTMLAttributes, useRef } from "react";
import {StandardRuleKey, ValidationRule } from "./Validator";
import { clsxMerge, colorVariant } from "@exsui/utils";
import { FormItemType } from "./types";
import {useValidator} from "../hooks/use-validation";

/**
 * FormItem
 * @description FormItem component - This component validates the input field and is the child to the Form component
 * @param {FormItemProps extends HTMLAttributes<HTMLInputElement>} { children, label, name, type, value, onChange, placeholder, rules, className }
 * @returns {JSX.Element}
 */
export interface FormItemProps extends HTMLAttributes<HTMLInputElement> {
    /**
     * label
     * @type {string}
     */
    label?: string;
    /**
     * name
     * @type {string}
     */
    validationKey: StandardRuleKey;
    /**
     * type
     * @type {string}
     */
    type?: FormItemType;
    /**
     * value
     * @type {string}
     */
    value: string;
    /**
     * onChange
     * @type {(e: React.ChangeEvent<HTMLInputElement>) => void}
     */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * placeholder
     * @type {string}
     */
    placeholder?: string;
    /**
     * config
     * @type {RuleList}
     */
    rules?: ValidationRule[];
    /**
     * className
     * @type {string}
     */
    className?: string;
}

/**
 * FormItem
 * @param {FormItemProps} { children, label, name, type, value, onChange, placeholder, rules, className }
 * @returns {JSX.Element}
 */
const FormItem = React.memo(function FormItem({
    label,
    validationKey = 'string',
    type = 'text',
    value,
    onChange,
    placeholder,
    rules,
    className,
}: FormItemProps): JSX.Element {

    if (!rules) {
        throw new Error('Rules are required for FormItem');
    }
    const [valueChange, setValueChange] = React.useState<string>(value);
    const [isValid, setIsValid] = React.useState<boolean>(false);
    const {validation} = useValidator();
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div className="mb-4">
            <label
                htmlFor={validationKey}
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
            >
                {label}
            </label>
            <input
                ref={inputRef}
                type={type}
                name={validationKey}
                id={validationKey}
                data-status={isValid ? 'valid' : 'invalid'}
                className={clsxMerge(
                    'has-[:invalid]:text-red-900',
                    className,
                    isValid
                        ? `bg-white ${colorVariant({ aspect: 'text', colorName: 'white', colorStrength: 500 })} ${colorVariant({ aspect: 'focus', colorName: 'gray', colorStrength: 500 })} ${colorVariant({ aspect: 'ring', colorName: 'gray', colorStrength: 500 })} ${colorVariant({ aspect: 'placeholder', colorName: 'gray', colorStrength: 500 })}`
                        : 'text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500',
                )}
                placeholder={placeholder}
                value={valueChange}
                spellCheck="false"
                autoComplete="off"
                autoCapitalize="off"
                onChange={(e) => {
                    setValueChange(e.target.value);
                    setIsValid(validation.validate(e.target.value, validationKey) as boolean);
                    onChange && onChange(e);
                }}
                aria-invalid={!isValid}
            />
            {!isValid && (
                <span className="block mt-2 text-sm text-red-600 dark:text-red-300">
                    {validation.getRuleErrorMessage(validationKey)}
                </span>
            )}
        </div>
    );
});

FormItem.displayName = 'FormItem';

export default FormItem;

