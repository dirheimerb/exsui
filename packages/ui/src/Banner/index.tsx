import { AiOutlineClose } from 'react-icons/ai';
import Button from '../Button';
import { clsxMerge } from '@exsui/utils';
import React from 'react';
/**
 * BannerProps
 * @type {string} title
 * @type {string} gradient
 * @type {string} from
 * @type {string} to
 * @type {string} callToAction
 * @type {string} label
 * @type {string} href
 * @type {string} dismissLabel
 * @type {() => void} onDismiss
 */
export interface BannerProps {
    title?: string;
    gradient?: {
        from: string;
        to: string;
    };
    callToAction?: {
        label: string;
        href: string;
    };
    dismissLabel?: string;
    onDismiss?: () => void;
}
/**
 * Banner
 * @returns {JSX.Element}
 */
export default function Banner({
    title = 'Join us for our annual conference',
    callToAction,
    gradient = {
        from: 'from-[#ff80b5]',
        to: 'to-[#9089fc]',
    },
    dismissLabel = 'Dismiss',
    onDismiss,
}: BannerProps): JSX.Element {
    const gradientClasses = clsxMerge(
        'absolute inset-0 bg-gradient-to-r opacity-30 blur-xl',
        `${gradient.from}`,
        `${gradient.to}`,
    );
    return (
        <div className="relative overflow-hidden rounded-lg bg-white shadow-md">
            <div
                className={gradientClasses}
                aria-hidden="true"></div>
            <div className="relative flex items-center justify-between p-4 sm:p-6">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                {callToAction && (
                    <a
                        href={callToAction.href}
                        className="ml-4 inline-block rounded-lg bg-blue-600 px-4 py-2 font-bold text-white transition-colors duration-200 hover:bg-blue-700">
                        {callToAction.label}
                    </a>
                )}
                {onDismiss && (
                    <Button
                        type="button"
                        className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
                        aria-label={dismissLabel}
                        onClick={onDismiss}>
                        <AiOutlineClose
                            className="h-6 w-6"
                            aria-hidden="true"
                        />
                    </Button>
                )}
            </div>
        </div>
    );
}
