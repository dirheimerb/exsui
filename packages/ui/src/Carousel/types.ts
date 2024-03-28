export declare type CarouselItem = {
    position: number;
    el: HTMLElement;
};

export declare type IndicatorItem = {
    position: number;
    el: HTMLElement;
};

export declare type RotationItems = {
    left: CarouselItem;
    middle: CarouselItem;
    right: CarouselItem;
};

export declare type CarouselOptions = {
    defaultPosition?: number;
    indicators?: {
        items?: IndicatorItem[];
        activeClasses?: string;
        inactiveClasses?: string;
    };
    interval?: number;
    onNext?: (carousel: CarouselProps) => void;
    onPrev?: (carousel: CarouselProps) => void;
    onChange?: (carousel: CarouselProps) => void;
};

export declare interface CarouselProps {
    _items: CarouselItem[];
    _indicators: IndicatorItem[];
    _activeItem: CarouselItem;
    _intervalDuration: number;
    _intervalInstance: number;
    _options: CarouselOptions;

    init(): void;

    getItem(position: number): CarouselItem;
    getActiveItem(): CarouselItem;

    _setActiveItem(item: CarouselItem): void;

    slideTo(position: number): void;

    next(): void;
    prev(): void;

    _rotate(rotationItems: RotationItems): void;
    cycle(): void;
    pause(): void;

    destroy(): void;
    removeInstance(): void;
    destroyAndRemoveInstance(): void;
}
