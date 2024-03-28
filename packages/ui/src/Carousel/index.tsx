'use client';
import React from 'react';
import CarouselComponent, { CarouselItemProps } from './MotionCarousel';
import { CarouselProvider } from './CarouselContext';

export interface CarouselProps {
    items: CarouselItemProps[];
    autoPlayDelay?: number;
}

export default function Carousel({ items, autoPlayDelay = 5000 }: CarouselProps): JSX.Element {
    return (
        <CarouselProvider>
            <CarouselComponent
                items={items}
                autoPlayDelay={autoPlayDelay}
            />
        </CarouselProvider>
    );
}
