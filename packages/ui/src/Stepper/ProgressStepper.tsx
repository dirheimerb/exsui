import { HiCheck } from 'react-icons/hi2';
import { StepperProps } from './types';
import React from 'react';

export interface ProgressStepperProps extends StepperProps {
    title: string;
}
export default function ProgressStepper({ title, steps, color }: ProgressStepperProps) {
    return (
        <div>
            <h4 className="sr-only">{title}</h4>
            <p className="text-sm font-medium text-gray-900"></p>
            <div
                className="mt-6"
                aria-hidden="true">
                <div className="overflow-hidden rounded-full bg-gray-200">
                    <div
                        className={`h-2 rounded-full bg-${color}-600`}
                        style={{ width: '37.5%' }}
                    />
                </div>
                <div className="mt-6 hidden grid-cols-4 text-sm font-medium text-gray-600 sm:grid">
                    {steps.map((step) => (
                        <>
                            <div
                                key={step.id}
                                className="flex items-center justify-center">
                                <div className={`text-${color}-600`}>
                                    {step.status === 'complete' ? (
                                        <span
                                            className={`flex h-8 w-8 items-center justify-center bg-${color}-600 rounded-full`}>
                                            <HiCheck
                                                className="h-5 w-5 text-white"
                                                aria-hidden="true"
                                            />
                                        </span>
                                    ) : step.status === 'current' ? (
                                        <span
                                            className={`flex h-8 w-8 items-center justify-center border-2 border-${color}-600 rounded-full`}>
                                            <span className={`text-${color}-600`}>{step.id}</span>
                                        </span>
                                    ) : (
                                        <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300">
                                            <span className="text-gray-500">{step.id}</span>
                                        </span>
                                    )}
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
}
