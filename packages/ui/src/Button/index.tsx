import { HTMLAttributes } from 'react';
import { ColorKeys } from '../styles/types';
import { forwardRef } from 'react';
import { clsxMerge } from '@exsui/utils';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    /**
     * variant
     * @type {'filled' | 'outlined' | 'text'}
     */
    variant?: 'filled' | 'outlined' | 'text';
    /**
     * size
     * @type {'sm' | 'md' | 'lg'}
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * color
     * @type {ColorKeys}
     */
    color?: ColorKeys;
    /**
     * fullWidth
     * @type {boolean}
     */
    fullWidth?: boolean;
    /**
     * loading
     * @type {boolean}
     */
    loading?: boolean;
    /**
     * disabled
     * @type {boolean}
     */
    disabled?: boolean;
    /**
     * rounded
     * @type {boolean}
     */
    rounded?: boolean;
    /**
     * pill
     * @type {boolean}
     */
    pill?: boolean;
}
/**
 * Button
 * @param {ButtonProps} { variant = 'filled', size = 'md', color = 'gray', fullWidth = false, loading = false, disabled = false, className, children, rounded, pill, ...rest }
 * @returns {JSX.Element}
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = 'filled',
            size = 'md',
            color = 'gray',
            fullWidth = false,
            loading = false,
            disabled = false,
            className,
            children,
            rounded,
            pill,
            ...rest
        },
        ref,
    ): JSX.Element => {
        return (
            <button
                ref={ref}
                className={clsxMerge(
                    `
                m-1 flex
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
            `,
                )}
                disabled={disabled || loading}
                {...rest}>
                {loading && (
                    <svg
                        className="... mr-3 h-5 w-5 animate-spin"
                        viewBox="0 0 24 24">
                        <circle
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"></circle>
                    </svg>
                )}
                {children}
            </button>
        );
    },
);

Button.displayName = 'Button';

export default Button;
