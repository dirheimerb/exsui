import React from 'react';
import { clsxMerge } from '@exsui/utils';
import { HiChevronRight, HiHome, HiArrowRight } from 'react-icons/hi2';

export interface BreadcrumbsProps {
    /**
     * items
     * @type {Array<BreadcrumbItem>}
     */
    items: Array<BreadcrumbItem>;
    /**
     * separator
     * @type {string}
     */
    separator?: 'slash' | 'chevron' | 'arrow';
    /**
     * fullWidth
     * @type {boolean}
     */
    fullWidth?: boolean;
}

export interface BreadcrumbItem {
    /**
     * label
     * @type {string}
     */
    label: string;
    /**
     * href
     * @type {string}
     */
    href?: string;
}
/**
 *
 * @param {BreadcrumbsProps} { items, separator = '/' }
 * @returns {JSX.Element}
 */
export default function Breadcrumbs({ items, separator = 'slash', fullWidth = false }: BreadcrumbsProps): JSX.Element {
    return (
        <nav
            data-testid="breadcrumbs"
            id="breadcrumbs"
            role="navigation"
            className={clsxMerge(fullWidth ? 'flex border-b border-gray-200 bg-white' : 'flex')}
            aria-label="Breadcrumb">
            <ol
                role="list"
                className={clsxMerge(
                    fullWidth
                        ? 'mx-auto flex w-full max-w-screen-xl space-x-4 px-4 sm:px-6 lg:px-8'
                        : 'flex items-center space-x-4',
                )}>
                <li className={clsxMerge(fullWidth ? 'flex' : '')}>
                    <div className="flex items-center">
                        <a
                            href="#"
                            role="listitem"
                            className="text-gray-400 hover:text-gray-500">
                            <HiHome
                                className="h-5 w-5 flex-shrink-0"
                                aria-hidden="true"
                            />

                            <span className="sr-only">Home</span>
                        </a>
                    </div>
                </li>
                {items.map((item, index) => (
                    <li
                        key={index}
                        className="flex">
                        <div className="flex items-center">
                            {separator === 'slash' ? (
                                <svg
                                    className="h-5 w-5 flex-shrink-0 text-gray-300"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    aria-hidden="true">
                                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                                </svg>
                            ) : separator === 'chevron' ? (
                                <svg
                                    className="h-full w-6 flex-shrink-0 text-gray-200"
                                    viewBox="0 0 24 44"
                                    preserveAspectRatio="none"
                                    fill="currentColor"
                                    aria-hidden="true">
                                    <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                                </svg>
                            ) : (
                                <HiArrowRight
                                    className="ml-2 h-5 w-5 flex-shrink-0 text-gray-300"
                                    aria-hidden="true"
                                />
                            )}
                            <a
                                href={item.href}
                                role="listitem"
                                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                                aria-current={item.label === 'Current' ? 'page' : undefined}>
                                {item.label}
                            </a>
                        </div>
                    </li>
                ))}
            </ol>
        </nav>
    );
}
