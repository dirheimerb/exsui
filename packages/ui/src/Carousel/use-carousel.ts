import { carouselContext } from './CarouselContext';
import React from 'react';

export function useCarousel() {
    const context = React.useContext(carouselContext);

    if (!context) {
        throw new Error('useCarousel must be used within a CarouselProvider');
    }

    return context;
}
