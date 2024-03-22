import { clsxMerge } from '../utils/clsx-merge';
import React, { forwardRef } from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    ariaLabel?: string;
    children?: React.ReactNode;
}
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = 'primary',
            size = 'md',
            children,
            disabled,

            ariaLabel,
            ...props
        }: ButtonProps,
        ref,
    ): JSX.Element => {
        return (
            <button
                ref={ref}
                className={clsxMerge(
                    `inline-flex items-center gap-x-1.5 rounded-md px-3 py-2 font-semibold text-white shadow-sm  ${
                        variant === 'primary' ? 'bg-gray-900 text-white' : 'bg-gray-300 text-gray-900'
                    } ${size === 'sm' ? 'text-sm' : size === 'md' ? 'text-base' : 'text-lg'}`,
                )}
                disabled={disabled ? undefined : disabled}
                aria-disabled={disabled ? 'true' : undefined}
                aria-label={ariaLabel}
                aria-pressed={disabled ? 'false' : undefined}
                onClick={disabled ? undefined : props.onClick}
                {...props}>
                {children}
            </button>
        );
    },
);
Button.displayName = 'Button';
export default Button;
