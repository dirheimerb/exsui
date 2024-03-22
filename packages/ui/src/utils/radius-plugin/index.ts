export type RadiusKey = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';

export function getRadiusClass(
    radius: RadiusKey,
):
    | 'rounded-none'
    | 'rounded-sm'
    | 'rounded-md'
    | 'rounded-lg'
    | 'rounded-xl'
    | 'rounded-2xl'
    | 'rounded-3xl'
    | 'rounded-full' {
    switch (radius) {
        case 'none':
            return 'rounded-none';
        case 'sm':
            return 'rounded-sm';
        case 'md':
            return 'rounded-md';
        case 'lg':
            return 'rounded-lg';
        case 'xl':
            return 'rounded-xl';
        case '2xl':
            return 'rounded-2xl';
        case '3xl':
            return 'rounded-3xl';
        case 'full':
            return 'rounded-full';
        default:
            return 'rounded-md';
    }
}
