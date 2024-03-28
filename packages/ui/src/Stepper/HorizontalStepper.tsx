import { clsxMerge } from '@exsui/utils';
import { StepperProps } from './types';
import Link from '../Link';
import React from 'react';
import Button from '../Button';
import { useStepper } from '../hooks/use-stepper';

export default function HorizontalStepper({ steps, 
    color='blue'
}: StepperProps) {
    const { setSteps } = useStepper();
    return (
        <nav aria-label="Progress">
            <ol
                role="list"
                className="space-y-4 md:flex md:space-x-8 md:space-y-0">
                {steps.map((step) => (
                    <li
                        key={step.name}
                        className="md:flex-1">
                        {step.status === 'complete' ? (
                            <Button
                                variant='text'
                                onClick={() => setSteps(step.id, step)}
                                className={clsxMerge(
                                    `group flex flex-col border-l-4 border-${color}-600 py-2 pl-4 hover:border-${color}-800 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4`,
                                )}>
                                <span
                                    className={clsxMerge(
                                        `text-sm font-medium text-${color}-600 group-hover:text-${color}-800`,
                                    )}>
                                    {step.id}
                                </span>
                                <span className="text-sm font-medium">{step.name}</span>
                            </Button>
                        ) : step.status === 'current' ? (
                            <Button
                                variant='text'
                                onClick={() => setSteps(step.id, step)}
                                className={clsxMerge(
                                    `flex flex-col border-l-4 border-${color}-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4`,
                                )}
                                aria-current="step">
                                <span className={clsxMerge(`text-${color}-600 text-sm font-medium`)}>{step.id}</span>
                                <span className="text-sm font-medium">{step.name}</span>
                            </Button>
                        ) : (
                            <Button
                                variant='text'
                                onClick={() => setSteps(step.id, step)}
                                className="group flex flex-col border-l-4 border-gray-200 py-2 pl-4 hover:border-gray-300 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                                <span className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                                    {step.id}
                                </span>
                                <span className="text-sm font-medium">{step.name}</span>
                            </Button>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
