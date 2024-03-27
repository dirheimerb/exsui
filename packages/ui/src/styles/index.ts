export { useStyle } from '../hooks/use-styles';
export { useColor } from '../hooks/use-colors';
export { styleAPI } from './style-api';
export { textColors, backgroundColors, colors } from './colors';
export { ColorContext, ColorProvider } from './ColorContext';
export { ThemeContext, StyleProvider } from './context';

export { colorOptions } from './color-options';

export type {
    ColorOptions,
    WidthOption,
    RoundnessOption,
    TextSizeOption,
    ShadowOptions,
    StyleAPI,
    ColorShades,
    ColorKeys,
    TextColor,
    BackgroundColor,
    TextDecoration,
    WidthOptions,
    RoundnessOptions,
    TextSizeOptions,
    ColorType,
    ColorContextAPI,
    ColorProviderProps,
    StyleProviderProps,
} from './types';
