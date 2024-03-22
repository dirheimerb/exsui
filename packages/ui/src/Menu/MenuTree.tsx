import React, { forwardRef } from 'react';
import { MenuProps } from './types';
import { useFloatingParentNodeId, FloatingTree } from '@floating-ui/react';
import MenuGroup from './MenuContext';

const MenuTree = forwardRef<HTMLButtonElement, MenuProps & React.HTMLProps<HTMLButtonElement>>(
    (props, ref): JSX.Element => {
        const parentId = useFloatingParentNodeId();

        if (parentId === null) {
            return (
                <FloatingTree>
                    <MenuGroup
                        {...props}
                        ref={ref}
                        groupClassName={props.groupClassName}
                    />
                </FloatingTree>
            );
        }

        return (
            <MenuGroup
                {...props}
                ref={ref}
                groupClassName={props.groupClassName}
            />
        );
    },
);

MenuTree.displayName = 'MenuTree';

export default MenuTree;
