import React, { useState, useEffect, useRef, ReactNode } from 'react';

import { IndicatorItem } from './types';

export interface Position {
    x: number;
    y: number;
}

const DefaultCarouselOptions = {
    defaultPosition: 0,
    indicators: {
        items: [] as IndicatorItem[],
        activeClasses: 'bg-white dark:bg-gray-800',
        inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
    },
    interval: 3000,
    onNext: () => {},
    onPrev: () => {},
    onChange: () => {},
};

const CarouselComponent = ({ items = [] as IndicatorItem[], options = DefaultCarouselOptions }) => {
    const [activeItem, setActiveItem] = useState(options.defaultPosition);
    const carouselRef = useRef<HTMLDivElement | null>(null);
    let intervalInstance = useRef<any | null>(null);

    // Initialize or update options with defaults
    const mergedOptions = {
        ...DefaultCarouselOptions,
        ...options,
        indicators: { ...DefaultCarouselOptions.indicators, ...options.indicators },
    };

    // Method to handle sliding to a specific item
    const slideTo = (position: Position['x']) => {
        const nextItem = items[position];
        // Perform slide operation here, e.g., setting active item
        setActiveItem(position);
        // Invoke onChange callback
        mergedOptions.onChange();
        nextItem;
        // Additional logic to handle animation or transitions
    };

    // Cycle through items automatically
    const cycle = () => {
        if (intervalInstance.current) {
            clearInterval(intervalInstance.current); // Clear any existing interval
            intervalInstance.current = setInterval(() => {
                const nextPosition = (activeItem + 1) % items.length;
                slideTo(nextPosition);
            }, mergedOptions.interval);
        }
    };

    // Start cycling on mount and setup event listeners
    useEffect(() => {
        if (!carouselRef.current || !items.length) return;

        cycle();
        // Cleanup on component unmount
        return () => clearInterval(intervalInstance.current!);
    }, [activeItem, items.length, mergedOptions.interval]);

    // Handlers for next and previous buttons
    const next = () => slideTo((activeItem + 1) % items.length);
    const prev = () => slideTo((activeItem - 1 + items.length) % items.length);

    // Render carousel with items and controls
    return (
        <div
            ref={carouselRef}
            className="carousel">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`item ${index === activeItem ? 'active' : ''}`}>
                    <li
                        key={index}
                        data-carousel-item={index}
                        className={`indicator ${index === activeItem ? mergedOptions.indicators.activeClasses : mergedOptions.indicators.inactiveClasses}`}
                        onClick={() => slideTo(index)}>
                        {React.cloneElement(item.el as any, { key: index })}
                    </li>
                </div>
            ))}
            <button onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
        </div>
    );
};

CarouselComponent.displayName = 'CarouselComponent';

export default CarouselComponent;
