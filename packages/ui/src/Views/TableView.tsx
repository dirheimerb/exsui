import React, { useState } from 'react';
import { TableViewProps, SortConfig } from './types';

export default function TableView({ columns, data }: TableViewProps) {
    const [sortConfig, setSortConfig] = useState<SortConfig | null>(null);

    const sortedData = React.useMemo(() => {
        const sortableItems = [...data];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [data, sortConfig]);

    const requestSort = (key: string) => {
        let direction: SortConfig['direction'] = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return (
        <table className="min-w-full leading-normal">
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th
                            key={column.key}
                            className="cursor-pointer bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
                            onClick={() => column.sortable && requestSort(column.key)}>
                            {column.header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {sortedData.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.map((column) => (
                            <td
                                key={column.key}
                                className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                                {row[column.key]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
