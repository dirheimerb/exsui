import React from 'react';
export interface RadioProps {
    /**
     * label
     * @type {string}
     */
    label: string;
    /**
     * checked
     * @type {boolean}
     */
    checked: boolean;
    /**
     * onChange
     * @type {(checked: boolean) => void}
     */
    onChange: (checked: boolean) => void;
    /**
     * className
     * @type {string}
     */
    className?: string;
}

/**
 * Radio
 * @param {RadioProps} { label, checked, onChange, className }
 * @returns {JSX.Element}
 */
export default function Radio({ label, checked, onChange, className }: RadioProps): JSX.Element {
    return (
        <label className={`flex items-center ${className}`}>
            <input
                type="radio"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                className="form-radio h-5 w-5 text-green-500"
            />
            <span className="ml-2 text-sm text-gray-700">{label}</span>
        </label>
    );
}