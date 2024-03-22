import React from 'react';

export interface GridItem {
    id: string | number;
    content: any; // This can be anything, depending on what you want to display in each grid item.
}

export interface GridViewProps {
    items: GridItem[];
    columns?: number; // Optional: default to 3 if not provided
}

export interface BoardItem {
    id: string;
    title: string;
    content: string;
    status: string;
}

export interface BoardLane {
    id: string | number;
    title: string;
    items: BoardItem[];
}

export interface BoardViewProps {
    lanes: BoardLane[];
}

export interface ListItem {
    [key: string]: any;
}

export interface ListViewProps {
    items: ListItem[];
    renderItem: (item: ListItem) => React.ReactNode; // Function to render each item
}

export interface TableColumn {
    key: string;
    header: string;
    sortable?: boolean; // Indicates if the column is sortable
}

export interface TableViewProps {
    columns: { key: string; header: string; sortable?: boolean }[];
    data: { [key: string]: any }[];
}
export interface SortConfig {
    key: string;
    direction: 'ascending' | 'descending';
}
