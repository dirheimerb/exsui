import { CarouselOptions } from './types';
import React from 'react';
import { useCarousel } from './use-carousel';

export const defaultProps: CarouselOptions = {
    defaultPosition: 0,
    indicators: {
        items: [],
        activeClasses: 'bg-white dark:bg-gray-800',
        inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
    },
    interval: 3000,
    onNext: () => {},
    onPrev: () => {},
    onChange: () => {},
};

export const carouselContext = React.createContext<CarouselOptions>(defaultProps);

export const DefaultInstanceOptions = {
    id: null,
    override: true,
};

export function CarouselProvider({ children }: { children: React.ReactNode }) {
    const [options, setOptions] = React.useState<CarouselOptions>(defaultProps);

    React.useEffect(() => {
        setOptions(defaultProps);
    }, []);

    return <carouselContext.Provider value={options}>{children}</carouselContext.Provider>;
}

export function withCarousel(Component: React.ComponentType<any>) {
    return function CarouselComponent(props: any) {
        return (
            <Component
                {...props}
                options={useCarousel()}
            />
        );
    };
}
