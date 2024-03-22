'use client';
// import React from "react";
import { LuPlus } from 'react-icons/lu';
import { useFAB } from './use-fab';
import FABList from './FABList';
import { FABItemProps } from './types';

export default function FAB({ items }: { items: FABItemProps[] }) {
    const { toggle } = useFAB();

    return (
        <div className="fixed bottom-4 right-4">
            <button
                onClick={toggle}
                className="rounded-full bg-violet-500 p-4 text-white">
                <LuPlus />
            </button>
            <FABList items={items} />
        </div>
    );
}
