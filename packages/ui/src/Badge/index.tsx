import { clsxMerge, colorVariant } from '../utils';

export interface Badge {
    label: string;
    textColor?: string;
    backgroundColor?: string;
}

export default function Badge({ label, textColor = 'green', backgroundColor = 'green' }: Badge) {
    const bg = colorVariant({ aspect: 'bg', colorName: backgroundColor, colorStrength: 100 });
    const text = colorVariant({ aspect: 'text', colorName: textColor, colorStrength: 700 });

    return (
        <span
            className={clsxMerge(
                `inline-flex items-center rounded-full ${bg} py-0.1 px-2 text-xs font-medium ${text} ring-1 ring-inset ring-gray-700/10`,
            )}>
            {label}
        </span>
    );
}
