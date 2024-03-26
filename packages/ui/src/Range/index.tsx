export interface RangeProps {
    /**
     * min
     * @type {number}
     */
    min: number;
    /**
     * max
     * @type {number}
     */
    max: number;
    /**
     * step
     * @type {number}
     */
    step?: number;
    /**
     * value
     * @type {number}
     */
    value: number;
    /**
     * onChange
     * @type {(value: number) => void}
     */
    onChange: (value: number) => void;
    /**
     * className
     * @type {string}
     */
    className?: string;
}

/**
 * Range
 * @param {RangeProps} { min, max, step = 1, value, onChange, className }
 * @returns {JSX.Element}
 */
export default function Range({ min, max, step = 1, value, onChange, className }: RangeProps): JSX.Element {
    return (
        <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            className={className}
            onChange={(e) => onChange(Number(e.target.value))}
        />
    );
}
