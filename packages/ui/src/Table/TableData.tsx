export interface TableData {
    data: {
        [key: string]: string;
    }[];
}

export default function TableData({ data }: TableData) {
    return (
        <tbody className="bg-white">
            {data.map((item) => (
                <tr
                    key={item.id}
                    className="even:bg-gray-50">
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                        {item.value}
                    </td>
                </tr>
            ))}
        </tbody>
    );
}
