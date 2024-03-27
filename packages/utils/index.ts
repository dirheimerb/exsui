export { clsxMerge } from './src/clsx-merge';
export { default as combineMerge } from './src/combineMerge';
export { default as findElementOrDefault } from './src/findMatch';
export { default as objectsToArray } from './src/objectsToArray';
export { default as objectsToString } from './src/objectsToString';
export { ColorClasses, colorAspectKeys, getColorClass, colorVariant } from './src/color-plugin';
export { getRadiusClass } from './src/radius-plugin';
export { getShadowClass } from './src/shadow-plugin';
export { getComponentSize } from './src/size-plugin';

export type { MergeOptions, ArrayItem } from './src/combineMerge';

export type { ColorKey, ColorAspectKeys, ColorNameKeys, ColorVariant } from './src/color-plugin/types';

export type { RadiusKey } from './src/radius-plugin';
export type { ShadowKey } from './src/shadow-plugin';
export type { ComponentSize, ComponentSizeKeys } from './src/size-plugin';

export * from './src/color-plugin';
export * from './src/radius-plugin';
export * from './src/shadow-plugin';
export * from './src/size-plugin';