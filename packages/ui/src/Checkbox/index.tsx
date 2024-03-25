
export interface CheckboxProps {
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
 * Checkbox
 * @param {CheckboxProps} { label, checked, onChange, className }
 * @returns {JSX.Element}
 */
export default function Checkbox({ label, checked, onChange, className }: CheckboxProps): JSX.Element {
    return (
        <label className={`flex items-center ${className}`}>
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                className="form-checkbox h-5 w-5 text-green-500"
            />
            <span className="ml-2 text-sm text-gray-700">{label}</span>
        </label>
    );
}