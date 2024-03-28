import React from 'react';
import Button from '../Button';

export interface RatingProps {
    value: number;
    max?: number;
    className?: string;
    style?: React.CSSProperties;
}

export default function Rating({ value, max = 5, className, style }: RatingProps): React.ReactElement {
    const [score, setScore] = React.useState(value);
    const maxRating = max;
    const rating = Math.min(score, maxRating); // Use 'score' to reflect the current state
    const stars = Array.from({ length: maxRating }, (_, index) => (
        <Button
            type="button"
            variant="icon"
            key={index}
            onClick={() => setScore(index + 1)}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className={`h-6 w-6 fill-current ${
                    index < rating ? 'text-yellow-500 dark:text-yellow-500' : 'text-gray-200 dark:text-gray-600'
                }`}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2l2.4 6.6H21l-5.4 4.2 2.1 6.3L12 15.4 6.3 18.1l2.1-6.3L3 8.6h6.6L12 2z"
                />
            </svg>
        </Button>
    ));

    return (
        <div
            className={`flex items-center space-x-1 ${className || ''}`}
            style={style}>
            {stars}
        </div>
    );
}
