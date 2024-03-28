import React from 'react';

export type StepperStatus = 'complete' | 'current' | 'next' | 'disabled';
export type StepperType =
    | 'circle'
    | 'dot'
    | 'dot-text'
    | 'bullet-text'
    | 'panel'
    | 'verticle'
    | 'horizontal'
    | 'circle-text'
    | 'progress';
export type StepperColorOptions = 'green' | 'blue' | 'gray' | 'red' | 'yellow' | 'indigo' | 'purple' | 'pink';

export interface StepperProps {
    steps: StageProps[];
    color?: StepperColorOptions;
}
export interface StageProps {
    status: StepperStatus;
    name: string;
    href: string;
    id: number;
    stage: number;
    description?: string;
}

export interface StepperContextProps {
    steps: StageProps[];
    color?: StepperColorOptions;
    steperType: StepperType;
    setSteps: (id: number, step: StageProps) => void;
    setColor: (color: StepperContextProps['color']) => void;
    setStepperType: (type: StepperContextProps['steperType']) => void;
}

export interface StepperProviderProps {
    children: React.ReactNode;
}

export interface StepperComponentProps {
    stepperType: StepperType;
    steps: StageProps[];
    color: StepperColorOptions;
    title?: string;
}
