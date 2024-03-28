export type ColorKey =
    | 'none'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'info'
    | 'error'
    | 'divider'
    | 'text'
    | 'disabled'
    | 'contrast';
export type ColorAspectKeys = 'bg' | 'text' | 'border' | 'hover' | 'ring' | 'focus' | 'placeholder';
export type ColorNameKeys =
    | 'black'
    | 'white'
    | 'gray'
    | 'red'
    | 'yellow'
    | 'green'
    | 'blue'
    | 'indigo'
    | 'purple'
    | 'pink'
    | 'primary'
    | 'secondary'
    | 'contrast'
    | 'disabled'
    | 'transparent'
    | 'current'
    | 'inherit'
    | 'sky'
    | 'vilot';
export interface ColorVariant {
    aspect: ColorAspectKeys;
    colorName: string;
    colorStrength: number;
    modifier?: string;
}
//# sourceMappingURL=types.d.ts.map
