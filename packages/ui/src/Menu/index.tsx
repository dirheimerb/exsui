import MenuTree from './MenuTree';
import MenuItem from './MenuItem';
import MenuGroup from './MenuContext';
import { MenuProps } from './types';

/**
 * Menu component
 * @param {MenuProps} props.label
 * @param {MenuProps} props.groupClassName
 * @param {MenuProps} param0.children
 * @param {MenuProps} param0....props
 * 
 * ```
 // default styles
 * styles: {
 *    rootClassName="p-4 border bg-transparent text-gray-100 m-2 rounded-md",
 *    itemClassName="p-1 bg-transparent rounded shadow outline-0",
 *    groupClassName="flex justify-between items-center w-full border-t border-gray-100 p-1 text-left leading-[1.8] min-w-[110px] m-0 border-[none] focus:text-sky-500",
 * }
 * ```
 * @example 
```tsx 
<Menu label={'My Menu'} groupClassName='text-violet-600' itemClassName='bg-sky-800'>
    <Menu.Item label={'Item 1'} />
    <Menu.Item label={'Item 2'} />
    <Menu.Item label={'Item 3'} />

    <Menu.Group label={'Group 1'} itemClassName='bg-sky-600'>
        <Menu.Item label={'Item 1'} />
        <Menu.Item label={'Item 2'} />
        <Menu.Item label={'Item 3'} />
    </Menu.Group>
</Menu>
```
 * @returns {JSX.Element}
 */
export default function Menu({ label, children, ...props }: MenuProps): JSX.Element {
    return (
        <MenuTree
            groupClassName={props.groupClassName}
            label={label}
            {...props}>
            {children}
        </MenuTree>
    );
}

Menu.Item = MenuItem;
Menu.Group = MenuGroup;
Menu.displayName = 'Menu';

export * from './MotionMenu';
