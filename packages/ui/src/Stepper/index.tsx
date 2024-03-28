import StepperComponent from './StepperComponent';
import { StepperProvider } from './StepperContext';
import { StepperComponentProps } from './types';
import React from 'react';

export default function Stepper({ steps, color, title, stepperType }: StepperComponentProps) {
    return (
        <StepperProvider>
            <StepperComponent
                stepperType={stepperType}
                steps={steps}
                color={color}
                title={title}
            />
        </StepperProvider>
    );
}

export * from './types';
