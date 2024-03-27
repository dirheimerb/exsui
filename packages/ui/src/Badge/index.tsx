import { clsxMerge, colorVariant } from '@exsui/utils';
import React from 'react';

export interface Badge {
    /**
     * label
     * @type {string}
     */
    label: string;
    /**
     * textColor
     * @type {string}
     */
    textColor?: string;
    /**
     * backgroundColor
     * @type {string}
     */
    backgroundColor?: string;
}
/**
 *
 * @param {Badge} { label, textColor = 'green', backgroundColor = 'green' }
 * @returns {JSX.Element}
 */
export default function Badge({ label, textColor = 'green', backgroundColor = 'green' }: Badge): JSX.Element {
    const bg = colorVariant({ aspect: 'bg', colorName: backgroundColor, colorStrength: 100 });
    const text = colorVariant({ aspect: 'text', colorName: textColor, colorStrength: 700 });

    return (
        <span
            id="exsui-badge"
            role="status"
            data-testid="exsui-badge"
            className={clsxMerge(
                `inline-flex items-center rounded-full ${bg} py-0.1 px-2 text-xs font-medium ${text} ring-1 ring-inset ring-gray-700/10`,
            )}>
            {label}
        </span>
    );
}
