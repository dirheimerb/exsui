import React, { HTMLAttributes, useImperativeHandle } from 'react';
import { ColorKeys } from '../styles/types';
import { forwardRef } from 'react';
import { clsxMerge } from '@exsui/utils';
import { AnimatePresence, motion } from 'framer-motion';
import Spinner from '../Spinner';
import { useRipple } from '../hooks';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    variant?: 'filled' | 'outlined' | 'text' | 'icon';
    size?: 'sm' | 'md' | 'lg';
    color?: ColorKeys;
    fullWidth?: boolean;
    loading?: boolean;
    disabled?: boolean;
    rounded?: boolean;
    pill?: boolean;
    type?: 'button' | 'submit' | 'reset';
    id?: string;
    Motion?: boolean;
    exit?: {
        scale?: number;
        x?: number;
        y?: number;
        opacity?: number;
    };
    transition?: {
        duration: number;
    };
    initial?: {
        x?: number;
        y?: number;
        opacity?: number;
        scale?: number;
    };
    animate?: {
        x?: number;
        y?: number;
        opacity?: number;
        scale: number;
    };
}

// const Button = forwardRef<HTMLButtonElement, ButtonProps>(
function Button({
    variant = 'filled',
    type = 'button',
    size = 'md',
    color = 'gray',
    fullWidth = false,
    loading = false,
    disabled = false,
    className,
    children,
    rounded,
    pill,
    id,
    Motion = false,
    initial,
    animate,
    exit,
    transition,
    ...rest
}: ButtonProps) {
    const buttonRef = React.createRef<HTMLButtonElement>();


    // useImperativeHandle(ref, () => buttonRef.current as HTMLButtonElement);

    return (
        <>
            {Motion ? (
                <AnimatePresence>
                    <motion.button
                        ref={buttonRef}
                        type={type}
                        id={id}
                        initial={initial}
                        animate={animate}
                        exit={exit}
                        transition={transition}
                        onClick={rest.onClick}
                        role={rest.role}
                        tabIndex={rest.tabIndex}
                        name={rest.itemID}
                        aria-label={rest['aria-label']}
                        aria-controls={rest['aria-controls']}
                        aria-expanded={rest['aria-expanded']}
                        nonce="nonce"
                        data-button-type={variant}
                        className={clsxMerge(
                            `
                m-1 flex space-x-1
                ${variant === 'icon' ? 'p-2' : ''}
                ${variant === 'filled' ? 'bg-' + color + '-500 text-white' : ''}
                ${variant === 'outlined' ? 'border- border' + color + '-500 text-' + color + '-500' : ''}
                ${variant === 'text' ? 'text-' + color + '-500' : ''}
                ${size === 'sm' ? 'px-4 py-2 text-sm' : ''}
                ${size === 'md' ? 'px-6 py-3 text-base' : ''}
                ${size === 'lg' ? 'px-8 py-4 text-lg' : ''}
                ${fullWidth ? 'w-full' : ''}
                ${className?.length ? className : ''}
                ${rounded ? 'rounded-md' : ''}
                ${pill ? 'rounded-full' : ''}
                ${loading ? 'p-2' : ''}
            `,
                        )}
                        disabled={disabled || loading}>
                        {loading && (
                            <svg
                                aria-hidden="true"
                                className={clsxMerge(
                                    'mr-2 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600',
                                    'h-6 w-6 fill-current',
                                )}
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill={'blue'}
                                />
                            </svg>
                        )}
                        <span className="mx-2">{children}</span>
                    </motion.button>
                </AnimatePresence>
            ) : (
                <button
                    ref={buttonRef}
                    type={type}
                    id={id}
                    data-button-type={variant}
                    className={clsxMerge(
                        `
                m-1 flex space-x-1
                ${variant === 'icon' ? 'p-2' : ''}
                ${variant === 'filled' ? 'bg-' + color + '-500 text-white' : ''}
                ${variant === 'outlined' ? 'border- border' + color + '-500 text-' + color + '-500' : ''}
                ${variant === 'text' ? 'text-' + color + '-500' : ''}
                ${size === 'sm' ? 'px-4 py-2 text-sm' : ''}
                ${size === 'md' ? 'px-6 py-3 text-base' : ''}
                ${size === 'lg' ? 'px-8 py-4 text-lg' : ''}
                ${fullWidth ? 'w-full' : ''}
                ${className?.length ? className : ''}
                ${rounded ? 'rounded-md' : ''}
                ${pill ? 'rounded-full' : ''}
                ${loading ? 'p-2' : ''}
            `,
                    )}
                    disabled={disabled || loading}
                    {...rest}>
                    {loading && (
                        <svg
                            aria-hidden="true"
                            className={clsxMerge(
                                'mr-2 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600',
                                'h-6 w-6 fill-current',
                            )}
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"
                            />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill={'blue'}
                            />
                        </svg>
                    )}
                    <span className="mx-2">{children}</span>
                </button>
            )}
        </>
    );
}
// );

Button.displayName = 'Button';

export default Button;
