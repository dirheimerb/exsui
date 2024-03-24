import {
    FloatingFocusManager,
    FloatingList,
    autoUpdate,
    flip,
    useClick,
    useDismiss,
    useFloating,
    useInteractions,
    useListNavigation,
    useRole,
    useTypeahead,
} from '@floating-ui/react';
import React from 'react';
import { SelectContextValue, SelectProviderProps } from './types';
import { clsxMerge } from '@exsui/utils';

export const SelectContext = React.createContext<SelectContextValue>({} as SelectContextValue);

export function SelectProvider({
    children,
    selectedLabel,
    labelClassName,
    placeholder,
    selectWindowClassName = 'bg-gray-100 border border-gray-300 rounded-md shadow-lg p-2 w-48 h-48 overflow-y-auto',
}: SelectProviderProps): JSX.Element {
    const [isOpen, setIsOpen] = React.useState(false);
    const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
    const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);

    const { refs, floatingStyles, context } = useFloating({
        placement: 'bottom-start',
        open: isOpen,
        onOpenChange: setIsOpen,
        whileElementsMounted: autoUpdate,
        middleware: [flip()],
    });

    const elementsRef = React.useRef<Array<HTMLElement | null>>([]);
    const labelsRef = React.useRef<Array<string | null>>([]);

    const handleSelect = React.useCallback((index: number | null) => {
        setSelectedIndex(index);
        setIsOpen(false);
    }, []);

    function handleTypeaheadMatch(index: number | null) {
        if (isOpen) {
            setActiveIndex(index);
        } else {
            handleSelect(index);
        }
    }

    const listNav = useListNavigation(context, {
        listRef: elementsRef,
        activeIndex,
        selectedIndex,
        onNavigate: setActiveIndex,
    });
    const typeahead = useTypeahead(context, {
        listRef: labelsRef,
        activeIndex,
        selectedIndex,
        onMatch: handleTypeaheadMatch,
    });
    const click = useClick(context);
    const dismiss = useDismiss(context);
    const role = useRole(context, { role: 'listbox' });

    const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
        listNav,
        typeahead,
        click,
        dismiss,
        role,
    ]);

    const selectContext = React.useMemo(
        () => ({
            activeIndex,
            selectedIndex,
            getItemProps,
            handleSelect,
        }),
        [activeIndex, selectedIndex, getItemProps, handleSelect],
    );

    return (
        <>
            <div
                id="exsui-select-selected-label"
                className={clsxMerge(labelClassName, 'm-2')}
                ref={refs.setReference}
                tabIndex={0}
                {...getReferenceProps()}>
                {selectedLabel ?? placeholder}
            </div>
            <SelectContext.Provider value={selectContext}>
                {isOpen && (
                    <FloatingFocusManager
                        context={context}
                        modal={false}>
                        <div
                            id="exsui-select-floating-list"
                            ref={refs.setFloating}
                            style={floatingStyles}
                            className={selectWindowClassName}
                            {...getFloatingProps()}>
                            <FloatingList
                                elementsRef={elementsRef}
                                labelsRef={labelsRef}>
                                {children}
                            </FloatingList>
                        </div>
                    </FloatingFocusManager>
                )}
            </SelectContext.Provider>
        </>
    );
}
