import { clsxMerge } from '@exsui/utils';
import { GridViewProps } from './types';

export default function GridView({ items, columns = 3 }: GridViewProps) {
    // Calculate grid template columns based on the number of columns prop
    const gridTemplateColumns = `repeat(${columns}, minmax(0, 1fr))`;

    return (
        <div
            className={clsxMerge('mt-1 grid')}
            style={{
                gridTemplateColumns,
            }}>
            {items.map((item) => (
                <div
                    key={item.id}
                    className="grid-item m-1 rounded border bg-gray-100 p-4 text-violet-600 shadow">
                    {item.content}
                </div>
            ))}
        </div>
    );
}
