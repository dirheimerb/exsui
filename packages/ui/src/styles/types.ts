export interface WidthOptions {
    quarter: string;
    half: string;
    threeQuarters: string;
    full: string;
}

export interface RoundnessOptions {
    none: string;
    sm: string;
    md: string;
    lg: string;
    full: string;
}

export interface TextSizeOptions {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
    '6xl': string;
    '7xl': string;
    '8xl': string;
    '9xl': string;
}

export interface ShadowOptions {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    inner: string;
    outline: string;
    none: string;
}

export interface StyleAPI {
    width: WidthOptions;
    round: RoundnessOptions;
    textSize: TextSizeOptions;
    color: {
        text: TextColor;
        backgroundColor: BackgroundColor;
    };
    shadow: ShadowOptions;
    disabled: string;
    textDecoration: {
        underline: string;
        overline: string;
        lineThrough: string;
    };
}

export type ColorShades = {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
};
export interface TextColor {
    white: string;
    black: string;
    gray: ColorShades;
    red: ColorShades;
    yellow: ColorShades;
    green: ColorShades;
    blue: ColorShades;
    indigo: ColorShades;
    purple: ColorShades;
    pink: ColorShades;
    fuscia: ColorShades;
    slate: ColorShades;
    zinc: ColorShades;
    neutral: ColorShades;
    stone: ColorShades;
    orange: ColorShades;
    amber: ColorShades;
    lime: ColorShades;
    emerald: ColorShades;
    teal: ColorShades;
    cyan: ColorShades;
    sky: ColorShades;
}

export type ColorKeys = keyof TextColor | keyof BackgroundColor;

export interface BackgroundColor {
    white: string;
    black: string;
    gray: ColorShades;
    red: ColorShades;
    yellow: ColorShades;
    green: ColorShades;
    blue: ColorShades;
    indigo: ColorShades;
    purple: ColorShades;
    pink: ColorShades;
    fuscia: ColorShades;
    slate: ColorShades;
    zinc: ColorShades;
    neutral: ColorShades;
    stone: ColorShades;
    orange: ColorShades;
    amber: ColorShades;
    lime: ColorShades;
    emerald: ColorShades;
    teal: ColorShades;
    cyan: ColorShades;
    sky: ColorShades;
}

export type TextDecoration = 'underline' | 'overline' | 'lineThrough';
export type WidthOption = 'quarter' | 'half' | 'threeQuarters' | 'full';
export type RoundnessOption = 'none' | 'sm' | 'md' | 'lg' | 'full';
export type TextSizeOption =
    | 'xs'
    | 'sm'
    | 'base'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl';
export type ColorType = 'text' | 'background';

export interface ColorContextAPI {
    textColors: TextColor;
    backgroundColors: BackgroundColor;
    setColors: (color: ColorContextAPI) => void;
}

export interface ColorProviderProps {
    children: React.ReactNode;
}

export interface StyleProviderProps {
    children: React.ReactNode;
}

export interface ColorOptions {
    black: string;
    white: string;
    gray: string;
    red: string;
    yellow: string;
    green: string;
    blue: string;
    indigo: string;
    purple: string;
    pink: string;
    cyan: string;
    lime: string;
    orange: string;
    teal: string;
    fuscia: string;
    slate: string;
    zinc: string;
    neutral: string;
    stone: string;
    amber: string;
    emerald: string;
    sky: string;
}