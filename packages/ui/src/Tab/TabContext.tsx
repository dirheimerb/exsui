import React, { createContext, useCallback, useMemo } from "react";
import { TabContextProps, TabData } from "./types";


export const TabContext = createContext<TabContextProps | undefined>(undefined);

export interface TabProviderProps {
    children: React.ReactNode;
}

export function TabProvider({ children, initialItems = [] }: TabProviderProps & { initialItems?: TabData['items'] }): JSX.Element {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [items, setItems] = React.useState<TabData['items']>(initialItems);

    const handleSetItems = useCallback((newItems: TabData['items']) => {
        setItems(newItems);
    }, []);

    const handleSetActiveIndex = useCallback((index: number) => {
        setActiveIndex(index);
    }, []);

    const contextValue = useMemo(() => ({
        activeIndex,
        setActiveIndex: handleSetActiveIndex,
        items,
        handleSetItems
    }), [activeIndex, handleSetActiveIndex, handleSetItems, items]);

    return (
        <TabContext.Provider value={contextValue}>
            {children}
        </TabContext.Provider>
    );
}