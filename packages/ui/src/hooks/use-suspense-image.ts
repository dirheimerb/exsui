'use client';
import { useState, useEffect, useCallback } from 'react';

export function useSuspenseImage(src: string) {
    const [imageCache, setImageCache] = useState(new Set<string>());

    const loadImage = useCallback(
        async (src: string, imageCache: Set<string>, setImageCache: (imageCache: Set<string>) => void) => {
            if (!imageCache.has(src)) {
                const img = new Image();
                img.src = src;
                await new Promise((resolve) => {
                    img.onload = () => {
                        imageCache.add(src);
                        setImageCache(new Set(imageCache));
                        resolve(null);
                    };
                });
            }
        },
        [],
    );

    useEffect(() => {
        if (!imageCache.has(src)) {
            throw new Promise((resolve) => {
                const img = new Image();
                img.src = src;
                img.onload = () => {
                    imageCache.add(src);
                    resolve(null);
                };
            });
        }

        loadImage(src, imageCache, setImageCache);
    }, [src, imageCache, loadImage]);

    return imageCache.has(src);
}
