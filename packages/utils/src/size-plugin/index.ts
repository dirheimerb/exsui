/* eslint-disable @typescript-eslint/naming-convention */
export type ComponentSizeKeys = 'sm' | 'md' | 'lg' | 'xl' | 'full';
export enum ComponentSize {
    sm = 'w-1/4',
    md = 'w-1/3',
    lg = 'w-1/2',
    xl = 'w-2/3',
    full = 'w-full',
}

export function getComponentSize(width: ComponentSizeKeys): ComponentSize {
    switch (width) {
        case 'sm':
            return ComponentSize.sm;
        case 'md':
            return ComponentSize.md;
        case 'lg':
            return ComponentSize.lg;
        case 'xl':
            return ComponentSize.xl;
        case 'full':
            return ComponentSize.full;
        default:
            return ComponentSize.md;
    }
}
