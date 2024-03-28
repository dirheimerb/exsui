import { HiCheck } from 'react-icons/hi2';
import { StepperProps } from './types';
import { clsxMerge } from '@exsui/utils';
import Link from '../Link';
import React from 'react';

export default function CircleStepper({ steps, color }: StepperProps) {
    return (
        <nav aria-label="Progress">
            <ol
                role="list"
                className="flex items-center">
                {steps.map((step, stepIdx) => (
                    <li
                        key={step.name}
                        className={clsxMerge(stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : '', 'relative')}>
                        {step.status === 'complete' ? (
                            <>
                                <div
                                    className="absolute inset-0 flex items-center"
                                    aria-hidden="true">
                                    <div className={clsxMerge(`h-0.5 w-full bg-${color}-600`)} />
                                </div>
                                <Link
                                    href={step.href}
                                    className={clsxMerge(
                                        `relative flex size-8 items-center justify-center rounded-full bg-${color}-600 hover:bg-indigo-900`,
                                    )}>
                                    <HiCheck
                                        className="size-5 text-white"
                                        aria-hidden="true"
                                    />
                                    <span className="sr-only">{step.name}</span>
                                </Link>
                            </>
                        ) : step.status === 'current' ? (
                            <>
                                <div
                                    className="absolute inset-0 flex items-center"
                                    aria-hidden="true">
                                    <div className="h-0.5 w-full bg-gray-200" />
                                </div>
                                <Link
                                    href={step.href}
                                    className={clsxMerge(
                                        `relative flex size-8 items-center justify-center rounded-full border-2 border-${color}-600 bg-white`,
                                    )}
                                    aria-current="step">
                                    <span
                                        className={clsxMerge(`size-2.5 rounded-full bg-${color}-600`)}
                                        aria-hidden="true"
                                    />
                                    <span className="sr-only">{step.name}</span>
                                </Link>
                            </>
                        ) : (
                            <>
                                <div
                                    className="absolute inset-0 flex items-center"
                                    aria-hidden="true">
                                    <div className="h-0.5 w-full bg-gray-200" />
                                </div>
                                <Link
                                    href={step.href}
                                    className="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400">
                                    <span
                                        className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"
                                        aria-hidden="true"
                                    />
                                    <span className="sr-only">{step.name}</span>
                                </Link>
                            </>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
