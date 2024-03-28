import { HiCheck } from 'react-icons/hi2';
import { StepperProps } from './types';
import Link from '../Link';
import React from 'react';

export default function PanelStepper({ steps, color }: StepperProps) {
    return (
        <nav aria-label="Progress">
            <ol
                role="list"
                className="divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0">
                {steps.map((step, stepIdx) => (
                    <li
                        key={step.name}
                        className="relative md:flex md:flex-1">
                        {step.status === 'complete' ? (
                            <Link
                                href={step.href}
                                className="group flex w-full items-center">
                                <span className="flex items-center px-6 py-4 text-sm font-medium">
                                    <span
                                        className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-${color}-600 group-hover:bg-${color}-800`}>
                                        <HiCheck
                                            className="h-6 w-6 text-white"
                                            aria-hidden="true"
                                        />
                                    </span>
                                    <span className="ml-4 text-sm font-medium text-gray-900">{step.name}</span>
                                </span>
                            </Link>
                        ) : step.status === 'current' ? (
                            <Link
                                href={step.href}
                                className="flex items-center px-6 py-4 text-sm font-medium"
                                aria-current="step">
                                <span
                                    className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-${color}-600`}>
                                    <span className={`text-${color}-600`}>{step.id}</span>
                                </span>
                                <span className="text-${color}-600 ml-4 text-sm font-medium">{step.name}</span>
                            </Link>
                        ) : (
                            <Link
                                href={step.href}
                                className="group flex items-center">
                                <span className="flex items-center px-6 py-4 text-sm font-medium">
                                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400">
                                        <span className="text-gray-500 group-hover:text-gray-900">{step.id}</span>
                                    </span>
                                    <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">
                                        {step.name}
                                    </span>
                                </span>
                            </Link>
                        )}

                        {stepIdx !== steps.length - 1 ? (
                            <>
                                {/* Arrow separator for lg screens and up */}
                                <div
                                    className="absolute right-0 top-0 hidden h-full w-5 md:block"
                                    aria-hidden="true">
                                    <svg
                                        className="h-full w-full text-gray-300"
                                        viewBox="0 0 22 80"
                                        fill="none"
                                        preserveAspectRatio="none">
                                        <path
                                            d="M0 -2L20 40L0 82"
                                            vectorEffect="non-scaling-stroke"
                                            stroke="currentcolor"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </>
                        ) : null}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
