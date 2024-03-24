export interface TableHeader {
    header: {
        [key: string]: string;
    }[];
}

export default function TableHeader({ header }: TableHeader) {
    return (
        <thead>
            <tr>
                {header.map((header, index) => (
                    <th
                        key={index}
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                        {header.label}
                    </th>
                ))}
            </tr>
        </thead>
    );
}
