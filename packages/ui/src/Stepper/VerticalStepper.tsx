import { HiCheck } from 'react-icons/hi2';
import { clsxMerge } from '@exsui/utils';
import { StepperProps } from './types';
import Link from '../Link';
import Divider from '../Divider';
import React from 'react';

export default function VerticalStepper({ steps, color }: StepperProps) {
    return (
        <div className="lg:border-b lg:border-t lg:border-gray-200">
            <nav
                className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
                aria-label="Progress">
                <ol
                    role="list"
                    className="overflow-hidden rounded-md lg:flex lg:rounded-none lg:border-l lg:border-r lg:border-gray-200">
                    {steps.map((step, stepIdx) => (
                        <li
                            key={step.id}
                            className="relative overflow-hidden lg:flex-1">
                            <div
                                className={clsxMerge(
                                    stepIdx === 0 ? 'rounded-t-md border-b-0' : '',
                                    stepIdx === steps.length - 1 ? 'rounded-b-md border-t-0' : '',
                                    'overflow-hidden border border-gray-200 lg:border-0',
                                )}>
                                {step.status === 'complete' ? (
                                    <Link
                                        href={step.href}
                                        className="group">
                                        <span
                                            className="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                                            aria-hidden="true"
                                        />
                                        <span
                                            className={clsxMerge(
                                                stepIdx !== 0 ? 'lg:pl-9' : '',
                                                'flex items-start px-6 py-5 text-sm font-medium',
                                            )}>
                                            <span className="flex-shrink-0">
                                                <span
                                                    className={clsxMerge(
                                                        `flex size-10 items-center justify-center rounded-full bg-${color}-600`,
                                                    )}>
                                                    <HiCheck
                                                        className="size-6 text-white"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            </span>
                                            <span className="ml-4 mt-0.5 flex min-w-0 flex-col">
                                                <span className="text-sm font-medium">{step.name}</span>
                                                <span className="text-sm font-medium text-gray-500">
                                                    {step.description}
                                                </span>
                                            </span>
                                        </span>
                                    </Link>
                                ) : step.status === 'current' ? (
                                    <Link
                                        href={step.href}
                                        aria-current="step">
                                        <span
                                            className={clsxMerge(
                                                `absolute left-0 top-0 h-full w-1 bg-${color}-600 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full`,
                                            )}
                                            aria-hidden="true"
                                        />
                                        <span
                                            className={clsxMerge(
                                                stepIdx !== 0 ? 'lg:pl-9' : '',
                                                'flex items-start px-6 py-5 text-sm font-medium',
                                            )}>
                                            <span className="flex-shrink-0">
                                                <span
                                                    className={clsxMerge(
                                                        `flex size-10 items-center justify-center rounded-full border-2 border-${color}-600`,
                                                    )}>
                                                    <span className={clsxMerge(`text-${color}-600`)}>{step.id}</span>
                                                </span>
                                            </span>
                                            <span className="ml-4 mt-0.5 flex min-w-0 flex-col">
                                                <span className={clsxMerge(`text-sm font-medium text-${color}-600`)}>
                                                    {step.name}
                                                </span>
                                                <span className="text-sm font-medium text-gray-500">
                                                    {step.description}
                                                </span>
                                            </span>
                                        </span>
                                    </Link>
                                ) : (
                                    <Link
                                        href={step.href}
                                        className="group">
                                        <span
                                            className="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                                            aria-hidden="true"
                                        />
                                        <span
                                            className={clsxMerge(
                                                stepIdx !== 0 ? 'lg:pl-9' : '',
                                                'flex items-start px-6 py-5 text-sm font-medium',
                                            )}>
                                            <span className="flex-shrink-0">
                                                <span className="flex size-10 items-center justify-center rounded-full border-2 border-gray-300">
                                                    <span className="text-gray-500">{step.id}</span>
                                                </span>
                                            </span>
                                            <span className="ml-4 mt-0.5 flex min-w-0 flex-col">
                                                <span className="text-sm font-medium text-gray-500">{step.name}</span>
                                                <span className="text-sm font-medium text-gray-500">
                                                    {step.description}
                                                </span>
                                            </span>
                                        </span>
                                    </Link>
                                )}

                                {stepIdx !== 0 ? <Divider /> : null}
                            </div>
                        </li>
                    ))}
                </ol>
            </nav>
        </div>
    );
}
