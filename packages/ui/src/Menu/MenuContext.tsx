'use client';
import React, { forwardRef } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { MenuContextObj, MenuGroupProps } from './types';
import {
    useFloatingTree,
    useFloatingNodeId,
    useFloatingParentNodeId,
    useListItem,
    useFloating,
    offset,
    flip,
    shift,
    autoUpdate,
    useHover,
    safePolygon,
    useClick,
    useRole,
    useDismiss,
    useListNavigation,
    useTypeahead,
    useInteractions,
    FloatingNode,
    useMergeRefs,
    FloatingList,
    FloatingPortal,
    FloatingFocusManager,
} from '@floating-ui/react';

export const MenuContext = React.createContext<MenuContextObj>({
    getItemProps: () => ({}),
    activeIndex: null,
    setActiveIndex: () => {},
    setHasFocusInside: () => {},
    isOpen: false,
});
// "flex justify-between items-center w-full rounded text-base text-left leading-[1.8] min-w-[110px] m-0 border-[none] focus:text-[white];" : "p-4 border bg-transparent text-gray-100 m-2 rounded-md "

/**
 * MenuGroup component
 * @param {MenuGroupProps} props
 * @param {React.HTMLProps<HTMLButtonElement>} forwardedRef
 * @returns {JSX.Element}
 *
 * ```
 // default styles
 * styles: {
 *    rootClassName="p-4 border bg-transparent text-gray-100 m-2 rounded-md",
 *    itemClassName="p-1 bg-transparent rounded shadow outline-0",
 *    groupClassName="flex justify-between items-center w-full border-t border-gray-100 p-1 text-left leading-[1.8] min-w-[110px] m-0 border-[none] focus:text-sky-500",
 * }
 * ```
 */
const MenuGroup = forwardRef<HTMLButtonElement, MenuGroupProps & React.HTMLProps<HTMLButtonElement>>(
    (
        {
            children,
            label,
            rootClassName = 'p-4 border bg-transparent text-gray-100 m-2 rounded-md',
            itemClassName = 'p-1 bg-transparent rounded shadow outline-0',
            groupClassName = 'flex justify-between items-center w-full border-t border-gray-100 p-1 text-left leading-[1.8] min-w-[110px] m-0 border-[none] focus:text-sky-500',
            ...props
        },
        forwardedRef,
    ): JSX.Element => {
        const [isOpen, setIsOpen] = React.useState(false);
        const [hasFocusInside, setHasFocusInside] = React.useState(false);
        const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

        const elementsRef = React.useRef<Array<HTMLButtonElement | null>>([]);
        const labelsRef = React.useRef<Array<string | null>>([]);
        const parent = React.useContext(MenuContext);

        const tree = useFloatingTree();
        const nodeId = useFloatingNodeId();
        const parentId = useFloatingParentNodeId();
        const item = useListItem();

        const isNested = parentId != null;

        const { floatingStyles, refs, context } = useFloating<HTMLButtonElement>({
            nodeId,
            open: isOpen,
            onOpenChange: setIsOpen,
            placement: isNested ? 'right-start' : 'bottom-start',
            middleware: [offset({ mainAxis: isNested ? 0 : 4, alignmentAxis: isNested ? -4 : 0 }), flip(), shift()],
            whileElementsMounted: autoUpdate,
        });

        const hover = useHover(context, {
            enabled: isNested,
            delay: { open: 75 },
            handleClose: safePolygon({ blockPointerEvents: true }),
        });
        const click = useClick(context, {
            event: 'mousedown',
            toggle: !isNested,
            ignoreMouse: isNested,
        });
        const role = useRole(context, { role: 'menu' });
        const dismiss = useDismiss(context, { bubbles: true });
        const listNavigation = useListNavigation(context, {
            listRef: elementsRef,
            activeIndex,
            nested: isNested,
            onNavigate: setActiveIndex,
        });
        const typeahead = useTypeahead(context, {
            listRef: labelsRef,
            onMatch: isOpen ? setActiveIndex : undefined,
            activeIndex,
        });

        const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
            hover,
            click,
            role,
            dismiss,
            listNavigation,
            typeahead,
        ]);

        // Event emitter allows you to communicate across tree components.
        // This effect closes all menus when an item gets clicked anywhere
        // in the tree.
        React.useEffect(() => {
            if (!tree) return;

            function handleTreeClick() {
                setIsOpen(false);
            }

            function onSubMenuOpen(event: { nodeId: string; parentId: string }) {
                if (event.nodeId !== nodeId && event.parentId === parentId) {
                    setIsOpen(false);
                }
            }

            tree.events.on('click', handleTreeClick);
            tree.events.on('menuopen', onSubMenuOpen);

            return () => {
                tree.events.off('click', handleTreeClick);
                tree.events.off('menuopen', onSubMenuOpen);
            };
        }, [tree, nodeId, parentId]);

        React.useEffect(() => {
            if (isOpen && tree) {
                tree.events.emit('menuopen', { parentId, nodeId });
            }
        }, [tree, isOpen, nodeId, parentId]);

        return (
            <FloatingNode id={nodeId}>
                <button
                    ref={useMergeRefs([refs.setReference, item.ref, forwardedRef])}
                    tabIndex={!isNested ? undefined : parent.activeIndex === item.index ? 0 : -1}
                    role={isNested ? 'menuitem-1' : undefined}
                    data-open={isOpen ? '' : undefined}
                    data-nested={isNested ? '' : undefined}
                    data-focus-inside={hasFocusInside ? '' : undefined}
                    className={isNested ? groupClassName : rootClassName}
                    {...getReferenceProps(
                        parent.getItemProps({
                            ...props,
                            onFocus(event: React.FocusEvent<HTMLButtonElement>) {
                                props.onFocus?.(event);
                                setHasFocusInside(false);
                                parent.setHasFocusInside(true);
                            },
                        }),
                    )}>
                    {label}
                    {isNested && (
                        <span
                            aria-hidden
                            style={{ marginLeft: 10, fontSize: 10 }}>
                            <MdKeyboardArrowRight />
                        </span>
                    )}
                </button>
                <MenuContext.Provider
                    value={{
                        activeIndex,
                        setActiveIndex,
                        getItemProps,
                        setHasFocusInside,
                        isOpen,
                    }}>
                    <FloatingList
                        elementsRef={elementsRef}
                        labelsRef={labelsRef}>
                        {isOpen && (
                            <FloatingPortal>
                                <FloatingFocusManager
                                    context={context}
                                    modal={false}
                                    initialFocus={isNested ? -1 : 0}
                                    returnFocus={!isNested}>
                                    <div
                                        ref={refs.setFloating}
                                        className={itemClassName}
                                        style={floatingStyles}
                                        {...getFloatingProps()}>
                                        {children}
                                    </div>
                                </FloatingFocusManager>
                            </FloatingPortal>
                        )}
                    </FloatingList>
                </MenuContext.Provider>
            </FloatingNode>
        );
    },
);

MenuGroup.displayName = 'MenuGroup';

export default MenuGroup;
