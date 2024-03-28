import type { ColorKey, ColorAspectKeys, ColorVariant } from './types';

export const ColorClasses = {
    none: '',
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500',
    error: 'bg-red-500',
    divider: 'border-gray-200',
    text: 'text-gray-800',
    disabled: 'bg-disabled',
    contrast: 'bg-contrast',
};
export const colorAspectKeys = {
    bg: 'bg',
    text: 'text',
    hover: 'hover',
    ring: 'ring',
    border: 'border',
};

const colorMapping = {
    bg: {
        none: '',
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        success: 'bg-green-500',
        warning: 'bg-yellow-500',
        info: 'bg-blue-500',
        error: 'bg-red-500',
        divider: 'bg-gray-200',
        text: 'bg-gray-800', // Typically not used, but included for completeness
        disabled: 'bg-disabled',
        contrast: 'bg-contrast',
    },
    text: {
        none: '',
        primary: 'text-primary',
        secondary: 'text-secondary',
        success: 'text-green-500',
        warning: 'text-yellow-500',
        info: 'text-blue-500',
        error: 'text-red-500',
        divider: 'text-gray-200',
        text: 'text-gray-800',
        disabled: 'text-disabled',
        contrast: 'text-contrast',
    },
    border: {
        none: '',
        primary: 'border-primary',
        secondary: 'border-secondary',
        success: 'border-green-500',
        warning: 'border-yellow-500',
        info: 'border-blue-500',
        error: 'border-red-500',
        divider: 'border-gray-200',
        text: 'border-gray-800', // Typically not used, but included for completeness
        disabled: 'border-disabled',
        contrast: 'border-contrast',
    },
    hover: {
        none: '',
        primary: 'hover:bg-primary-200',
        secondary: 'hover:bg-secondary-200',
        success: 'hover:bg-green-200',
        warning: 'hover:bg-yellow-200',
        info: 'hover:bg-blue-200',
        error: 'hover:bg-red-200',
        divider: 'hover:bg-gray-200',
        text: 'hover:bg-gray-200',
        disabled: 'hover:bg-disabled',
        contrast: 'hover:bg-contrast',
    },
    ring: {
        none: '',
        primary: 'ring-primary',
        secondary: 'ring-secondary',
        success: 'ring-green-500',
        warning: 'ring-yellow-500',
        info: 'ring-blue-500',
        error: 'ring-red-500',
        divider: 'ring-gray-200',
        text: 'ring-gray-800',
        disabled: 'ring-disabled',
        contrast: 'ring-contrast',
    },
    focus: {
        none: '',
        primary: 'focus:bg-primary-200',
        secondary: 'focus:bg-secondary-200',
        success: 'focus:bg-green-200',
        warning: 'focus:bg-yellow-200',
        info: 'focus:bg-blue-200',
        error: 'focus:bg-red-200',
        divider: 'focus:bg-gray-200',
        text: 'focus:bg-gray-200',
        disabled: 'focus:bg-disabled',
        contrast: 'focus:bg-contrast',
    },
    placeholder: {
        none: '',
        primary: 'placeholder:text-primary',
        secondary: 'placeholder:text-secondary',
        success: 'placeholder:text-green-500',
        warning: 'placeholder:text-yellow-500',
        info: 'placeholder:text-blue-500',
        error: 'placeholder:text-red-500',
        divider: 'placeholder:text-gray-200',
        text: 'placeholder:text-gray-800',
        disabled: 'placeholder:text-disabled',
        contrast: 'placeholder:text-contrast',
    },
};

/**
 * Get the color class based on the color key and color aspect
 * @param key - 'none' | 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'error' | 'divider' | 'text' | 'disabled' | 'contrast'
 * @param colorAspect - 'bg' | 'text' | 'border'
 * @returns string
 */
export function getColorClass(key: ColorKey, colorAspect: ColorAspectKeys = 'bg'): string {
    const aspectMapping = colorMapping[colorAspect];
    return aspectMapping[key];
}

export function colorVariant({ aspect, colorName, colorStrength, modifier = '' }: ColorVariant): string {
    return `${modifier}${aspect}-${colorName}-${colorStrength}`;
}

export * from './types';
