import React from 'react';
import { clsxMerge } from '@exsui/utils';
import { HiCheckCircle } from 'react-icons/hi2';
import { StepperProps } from './types';
import Link from '../Link';

export default function DotTextStepper({ steps, color }: StepperProps) {
    return (
        <div className="px-4 py-12 sm:px-6 lg:px-8">
            <nav
                className="flex justify-center"
                aria-label="Progress">
                <ol
                    role="list"
                    className="space-y-6">
                    {steps.map((step) => (
                        <li key={step.name}>
                            {step.status === 'complete' ? (
                                <Link
                                    href={step.href}
                                    className="group">
                                    <span className="flex items-start">
                                        <span className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center">
                                            <HiCheckCircle
                                                className={clsxMerge(
                                                    `h-full w-full text-${color}-600 group-hover:text-${color}-800`,
                                                )}
                                                aria-hidden="true"
                                            />
                                        </span>
                                        <span className="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900">
                                            {step.name}
                                        </span>
                                    </span>
                                </Link>
                            ) : step.status === 'current' ? (
                                <Link
                                    href={step.href}
                                    className="flex items-start"
                                    aria-current="step">
                                    <span
                                        className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center"
                                        aria-hidden="true">
                                        <span className={clsxMerge(`absolute h-4 w-4 rounded-full bg-${color}-200`)} />
                                        <span
                                            className={clsxMerge(`relative block h-2 w-2 rounded-full bg-${color}-600`)}
                                        />
                                    </span>
                                    <span className={clsxMerge(`ml-3 text-sm font-medium text-${color}-600`)}>
                                        {step.name}
                                    </span>
                                </Link>
                            ) : (
                                <Link
                                    href={step.href}
                                    className="group">
                                    <div className="flex items-start">
                                        <div
                                            className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center"
                                            aria-hidden="true">
                                            <div className="h-2 w-2 rounded-full bg-gray-300 group-hover:bg-gray-400" />
                                        </div>
                                        <p className="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900">
                                            {step.name}
                                        </p>
                                    </div>
                                </Link>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </div>
    );
}
