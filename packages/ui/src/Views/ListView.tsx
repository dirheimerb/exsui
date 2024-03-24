'use client';
import { clsxMerge } from '@exsui/utils';
import { ListItem, ListViewProps } from './types';
import { useState } from 'react';

export default function ListView({ items, renderItem }: ListViewProps) {
    const [activeItem, setActiveItem] = useState<ListItem | null>(null);

    const handleActiveItem = (id: string) => {
        const item = items.find((item) => item.id === id);
        if (item) {
            setActiveItem(item);
        }
    };

    return (
        <div className="my-2 flex flex-col bg-gray-100">
            {items.map((item) => (
                <div
                    className={clsxMerge(
                        'm-0 flex flex-row items-center border-b bg-white p-4',
                        activeItem?.id === item.id && 'bg-blue-100',
                    )}
                    key={item.id}>
                    <input
                        type="checkbox"
                        name="item"
                        value={item.id}
                        className="h-4 w-4 rounded-full"
                        id={item.id}
                        onClick={() => handleActiveItem(item.id)}
                    />
                    <label
                        htmlFor={item.id}
                        className="mx-4">
                        {renderItem(item)}
                    </label>
                </div>
            ))}
        </div>
    );
}
