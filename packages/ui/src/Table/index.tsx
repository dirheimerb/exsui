import TableData from './TableData';
import TableHeader from './TableHeader';

export interface TableData {
    label: string;
    actionLabel: string;
    onClick: () => void;
    header: {
        [key: string]: string;
    }[];
    data: {
        [key: string]: string;
    }[];
}

export default function Table({ label, actionLabel, onClick, header, data }: TableData) {
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">{label}</h1>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <button
                        type="button"
                        className="block rounded-md bg-sky-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                        onClick={onClick}>
                        {actionLabel}
                    </button>
                </div>
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <TableHeader header={header} />
                            <TableData data={data} />
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
