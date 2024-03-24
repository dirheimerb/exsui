export type ShadowKey = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inner';

export function getShadowClass(
    shadow: ShadowKey,
): 'shadow-none' | 'shadow-sm' | 'shadow-md' | 'shadow-lg' | 'shadow-xl' | 'shadow-2xl' | 'shadow-inner' {
    switch (shadow) {
        case 'none':
            return 'shadow-none';
        case 'sm':
            return 'shadow-sm';
        case 'md':
            return 'shadow-md';
        case 'lg':
            return 'shadow-lg';
        case 'xl':
            return 'shadow-xl';
        case '2xl':
            return 'shadow-2xl';
        case 'inner':
            return 'shadow-inner';
        default:
            return 'shadow-md';
    }
}
