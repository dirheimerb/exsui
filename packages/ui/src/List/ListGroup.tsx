import React from 'react';

export interface ListGroupProps extends React.HTMLAttributes<HTMLUListElement> {
    items: ListGroupItemProps[];
    className?: string;
    style?: React.CSSProperties;
}
export interface ListGroupItemProps extends React.HTMLAttributes<HTMLLIElement> {
    label: string;
    value: string;
    className?: string;
}

export default function ListGroup({
    items,
    className = 'w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white',
    style,
    ...props
}: ListGroupProps): React.ReactElement {
    return (
        <ul
            {...props}
            className={className}
            style={style}>
            {items.map((item, index) => (
                <li
                    {...item}
                    key={index}
                    className={`w-full rounded-t-lg border-b border-gray-200 px-4 py-2 hover:bg-gray-200 dark:border-gray-600 ${item.className}`}>
                    {item.label}
                </li>
            ))}
        </ul>
    );
}
