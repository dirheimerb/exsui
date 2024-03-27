'use client';
import { HTMLAttributes } from "react";
import { ColorKeys } from "../styles";
import React from "react";
import { clsxMerge } from "@exsui/utils";

export interface TextFieldProps extends HTMLAttributes<HTMLParagraphElement> {
    variant?: 'filled' | 'outlined' | 'text' | 'underlined';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    rounded?: boolean;
    pill?: boolean;
    className?: string;
    disabled?: boolean;
    backgroundColor?: ColorKeys;
    textColor?: ColorKeys;
    ringColor?: ColorKeys;
    focusColor?: ColorKeys;
    children: React.ReactNode;
}
/**
 * TextField component is used to get text input from the user.
 * @param {string} variant - 'filled' | 'outlined' | 'text'
 * @param {string} size - 'sm' | 'md' | 'lg'
 * @param {boolean} fullWidth - true | false
 * @param {boolean} rounded - true | false
 * @param {boolean} pill - true | false
 * @param {string} className - Additional classes
 * @param {boolean} disabled - true | false
 * @param {string} backgroundColor - 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink'
 * @param {string} textColor - 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink'
 * @param {string} ringColor - 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink'
 * @param {string} focusColor - 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink'
 * @returns {React.ReactElement}
 */
const TextField = React.forwardRef<HTMLParagraphElement, TextFieldProps>(
    function TextField(
        {
            variant = 'filled',
            size = 'md',
            fullWidth = false,
            rounded,
            pill,
            className,
            disabled,
            backgroundColor = 'gray',
            textColor = 'white',
            ringColor = 'gray',
            focusColor = 'focus:ring-gray-500',
            children,
            ...props
        },
        ref,
    ) {
        return (
            <p
                id={props.id}
                data-label='exsui-text-field'
                role='textbox'
                aria-label={props['aria-label']}                
                aria-describedby={props['aria-describedby']}
                ref={ref}
                className={clsxMerge(
                    'flex items-center justify-center font-medium focus:outline-none',
                    disabled && 'opacity-50 cursor-not-allowed',
                    className,
                    variant === 'filled' &&
                        `${clsxMerge(
                            `bg-${backgroundColor}-500 text-${textColor}-500 focus:ring-${focusColor}-500 ring-${ringColor}-500`,
                            {
                                'w-full': fullWidth,
                                'rounded-full': pill,
                                'rounded-md': rounded,
                            },
                        )}`,
                    variant === 'outlined' &&
                        `${clsxMerge(
                            `border- border${backgroundColor}-500 text-${backgroundColor}-500 focus:ring-${focusColor}-500 ring-${ringColor}-500`,
                            {
                                'w-full': fullWidth,
                                'rounded-full': pill,
                                'rounded-md': rounded,
                            },
                        )}`,
                    variant === 'text' &&
                        `${clsxMerge(
                            `text-${backgroundColor}-500 focus:ring-${focusColor}-500 ring-${ringColor}-500`,
                            {
                                'w-full': fullWidth,
                                'rounded-full': pill,
                                'rounded-md': rounded,
                            },
                        )}`,
                    variant === 'underlined' &&
                        `${clsxMerge(
                            `border-b border-${backgroundColor}-500 text-${backgroundColor}-500 focus:ring-${focusColor}-500 ring-${ringColor}-500`,
                            {
                                'w-full': fullWidth,
                                'rounded-full': pill,
                                'rounded-md': rounded,
                            },
                        )}`,
                    size === 'sm' && `px-4 py-2 text-sm`,
                    size === 'md' && `px-6 py-3 text-base`,
                    size === 'lg' && `px-8 py-4 text-lg`,                    
            )}
                {...props}
            >
                {children}
            </p>
        );
    },
);

TextField.displayName = 'TextField';

export default TextField;