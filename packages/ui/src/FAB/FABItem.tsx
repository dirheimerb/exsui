import { FABItemProps } from './types';

export default function FABItem({ label, onClick, icon }: FABItemProps) {
    return (
        <button
            onClick={onClick}
            className="inline-flex items-center justify-center rounded border-none bg-violet-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 sm:justify-evenly">
            <span
                className="-ml-0.5 h-5 w-5"
                aria-hidden="true">
                {' '}
                {icon}{' '}
            </span>
            <span className="hidden sm:block"> {label} </span>
        </button>
    );
}
