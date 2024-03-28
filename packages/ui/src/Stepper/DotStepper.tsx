import { clsxMerge } from '@exsui/utils';
import Link from '../Link';
import { StepperProps } from './types';
import React from 'react';

export default function DotStepper({ steps, color }: StepperProps) {
    return (
        <nav
            className="flex items-center justify-center"
            aria-label="Progress">
            <p className="text-sm font-medium">
                Step {steps.findIndex((step) => step.status === 'current') + 1} of {steps.length}
            </p>
            <ol
                role="list"
                className="ml-8 flex items-center space-x-5">
                {steps.map((step) => (
                    <li key={step.name}>
                        {step.status === 'complete' ? (
                            <Link
                                href={step.href}
                                className={clsxMerge(
                                    `block size-2.5 rounded-full bg-${color}-600 hover:bg-${color}-900`,
                                )}>
                                <span className="sr-only">{step.name}</span>
                            </Link>
                        ) : step.status === 'current' ? (
                            <Link
                                href={step.href}
                                className="relative flex items-center justify-center"
                                aria-current="step">
                                <span
                                    className="absolute flex size-5 p-px"
                                    aria-hidden="true">
                                    <span className={clsxMerge(`size-full rounded-full bg-${color}-200`)} />
                                </span>
                                <span
                                    className={clsxMerge(`relative block size-2.5 rounded-full bg-${color}-600`)}
                                    aria-hidden="true"
                                />
                                <span className="sr-only">{step.name}</span>
                            </Link>
                        ) : (
                            <Link
                                href={step.href}
                                className="block size-2.5 rounded-full bg-gray-200 hover:bg-gray-400">
                                <span className="sr-only">{step.name}</span>
                            </Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
