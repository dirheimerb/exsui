'use client';
import React from 'react';
import TabButton from './TabButton';
import { TabProvider } from './TabContext';
import TabItem from './TabItem';
import { TabData } from './types';
import { useTabContext } from '../hooks/use-tab';

const Tab = React.memo(function Tab({ items }: TabData) {
    return (
        <TabProvider initialItems={items}>
            <BasicTab />
        </TabProvider>
    );
});

Tab.displayName = 'Tab';

export default Tab;

export function BasicTab() {
    const { items, setActiveIndex, activeIndex } = useTabContext();

    return (
        <>
            <div className="flex border-b">
                {items.map((item, index) => (
                    <TabButton
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        isActive={activeIndex === index}>
                        {item.name}
                    </TabButton>
                ))}
            </div>
            {items.map((item, index) => (
                <TabItem
                    key={index}
                    isActive={activeIndex === index}>
                    {item.content}
                </TabItem>
            ))}
        </>
    );
}
