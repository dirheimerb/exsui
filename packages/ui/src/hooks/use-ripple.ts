'use client';
import { useEffect } from 'react';

export interface UseRippleEffectProps {
    elementRef: React.RefObject<HTMLElement>;
}
/**
 * @description This hook creates a ripple effect on the element that is clicked
 * @param {UseRippleEffectProps} elementRef
 * @returns {void}
 * @example
 * const buttonRef = useRef<HTMLButtonElement>(null);
 * useRipple({ elementRef: buttonRef });
 */
export function useRipple({ elementRef }: UseRippleEffectProps): void {
    useEffect(() => {
        const elem = elementRef.current;
        const rippleStyles = {
            color: 'rgba(0, 0, 0, 0.1)',
        };
        const rippleEffect = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            const rect = target.getBoundingClientRect();
            // Calculate the maximum distance from the click point to the corners of the element
            const maxDistCorner = Math.max(
                Math.hypot(event.clientX - rect.left, event.clientY - rect.top),
                Math.hypot(rect.right - event.clientX, event.clientY - rect.top),
                Math.hypot(event.clientX - rect.left, rect.bottom - event.clientY),
                Math.hypot(rect.right - event.clientX, rect.bottom - event.clientY),
            );
            const radius = maxDistCorner; // Use the distance to the furthest corner as the radius
            const element = document.createElement('div');
            element.classList.add('ripple');
            element.style.backgroundColor = rippleStyles.color;
            element.style.borderRadius = '50%';
            element.style.pointerEvents = 'none';
            element.style.position = 'fixed';
            element.style.overflowX = 'hidden';
            element.style.overflowY = 'hidden';
            element.style.zIndex = '9999';
            // Adjust position to start from the event click, but ensure it's centered by offsetting by the radius
            element.style.left = `${event.clientX - rect.left - radius}px`;
            element.style.top = `${event.clientY - rect.top - radius}px`;
            element.style.width = element.style.height = `${radius * 2}px`;
            // Append the ripple element to the target, not the body, to respect the element's overflow
            target.appendChild(element);
            element.animate(
                [
                    { transform: 'scale(0)', opacity: 1 },
                    { transform: 'scale(1.5)', opacity: 0 },
                ],
                { duration: 500, easing: 'linear' },
            );
            setTimeout(() => {
                element.remove();
            }, 500);
        };
        elem?.addEventListener('click', rippleEffect);
        return () => {
            elem?.removeEventListener('click', rippleEffect);
        };
    }, [elementRef]);
}
