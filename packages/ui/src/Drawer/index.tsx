import { DrawerOptions } from './types';
import { DrawerProvider } from './Context';
import DrawerComponent from './DrawerComponent';
/**
 * Drawer
 * @param {DrawerOptions} {
 *      children,
 *      anchor = 'left',
 *      width = '240px',
 *      elevation = 16,
 *      variant = 'temporary',
 *      transitionDuration = 200,
 * }
 * @returns {JSX.Element}
 */
export function Drawer({
    children,
    anchor = 'left',
    width = '240px',
    elevation = 16,
    variant = 'temporary',
    transitionDuration = 200,
}: DrawerOptions): JSX.Element {
    return (
        <DrawerProvider>
            <DrawerComponent
                anchorValue={anchor}
                widthValue={width}
                elevationValue={elevation}
                variantValue={variant}
                transitionDurationValue={transitionDuration}>
                {children}
            </DrawerComponent>
        </DrawerProvider>
    );
}

export * from './types';
export * from './DrawerComponent';
export * from './Context';
export * from './use-drawer';
