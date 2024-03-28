import React, { useState, useEffect, useRef, useImperativeHandle } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface CarouselProps {
    items: CarouselItemProps[];
    autoPlayDelay?: number;
}

export interface CarouselItemProps {
    path: string;
    alt: string;
    caption?: string;
    className?: string;
}

const CarouselComponent = React.forwardRef<HTMLDivElement, CarouselProps>(
    ({ items, autoPlayDelay = 5000 }: CarouselProps, ref): JSX.Element => {
        const [currentIndex, setCurrentIndex] = useState<number>(0);
        const [isPlaying, setIsPlaying] = useState<boolean>(true);
        const intervalRef = useRef<NodeJS.Timeout | null>(null);
        const scrollRef = useRef<HTMLDivElement | null>(null);
        const handleNext = () => setCurrentIndex((prev) => (prev + 1) % items.length);
        const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
        const switchToSlide = (index: number) => setCurrentIndex(index);

        useImperativeHandle(ref, () => scrollRef.current as HTMLDivElement);

        const startAutoPlay = () => {
            intervalRef.current = setInterval(handleNext, autoPlayDelay);
        };

        const stopAutoPlay = () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };

        useEffect(() => {
            if (isPlaying) {
                startAutoPlay();
            } else {
                stopAutoPlay();
            }
            return () => stopAutoPlay();
        }, [isPlaying]);

        return (
            <div
                className="min-h-[300px]: relative flex h-full w-full max-w-lg cursor-pointer items-center justify-center rounded-lg shadow"
                onMouseEnter={() => setIsPlaying(false)}
                onMouseLeave={() => setIsPlaying(true)}
                ref={scrollRef}
                role="tablist"
                aria-label="Carousel">
                <AnimatePresence initial={false}>
                    <motion.div
                        key={currentIndex}
                        initial={{
                            x: 300,
                            opacity: 0,
                        }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                        transition={{
                            type: 'tween',
                            duration: 0.3,
                        }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ root: scrollRef }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragEnd={(e, { offset, velocity }) => {
                            if (offset.x > 300 || velocity.x > 300) {
                                handlePrev();
                            } else if (offset.x < -300 || velocity.x < -300) {
                                handleNext();
                            }
                        }}
                        className="m-2 flex flex-col items-center justify-center p-1"
                        role="tabpanel"
                        aria-roledescription="slide"
                        aria-label={`Slide ${currentIndex + 1} of ${items.length}`}>
                        <img
                            src={items[currentIndex].path}
                            alt={items[currentIndex].alt}
                            className="flex-shrink-0 object-cover"
                        />
                    </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 flex items-center justify-between">
                    <button
                        onClick={handlePrev}
                        aria-label="Previous slide">
                        &#10094;
                    </button>
                    <button
                        onClick={handleNext}
                        aria-label="Next slide">
                        &#10095;
                    </button>
                </div>
                <div className="flex flex-col items-center justify-center">
                    {items.map((_, index) => (
                        <button
                            key={index}
                            className={`${
                                index === currentIndex ? 'bg-black' : 'bg-gray-300'
                            } mx-1 h-2 w-2 rounded-full`}
                            onClick={() => switchToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        );
    },
);

CarouselComponent.displayName = 'CarouselComponent';

export default CarouselComponent;
