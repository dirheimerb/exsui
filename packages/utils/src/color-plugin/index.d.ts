import type { ColorKey, ColorAspectKeys, ColorVariant } from './types';
export declare const ColorClasses: {
    none: string;
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    info: string;
    error: string;
    divider: string;
    text: string;
    disabled: string;
    contrast: string;
};
export declare const colorAspectKeys: {
    bg: string;
    text: string;
    hover: string;
    ring: string;
    border: string;
};
/**
 * Get the color class based on the color key and color aspect
 * @param key - 'none' | 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'error' | 'divider' | 'text' | 'disabled' | 'contrast'
 * @param colorAspect - 'bg' | 'text' | 'border'
 * @returns string
 */
export declare function getColorClass(key: ColorKey, colorAspect?: ColorAspectKeys): string;
export declare function colorVariant({ aspect, colorName, colorStrength, modifier }: ColorVariant): string;
export * from './types';
//# sourceMappingURL=index.d.ts.map