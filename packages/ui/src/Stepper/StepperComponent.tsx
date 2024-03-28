'use client';
import { useEffect } from 'react';
import BulletTextStepper from './BulletTextStepper';
import CircleStepper from './CircleSteper';
import CircleTextStepper from './CircleTextStepper';
import DotStepper from './DotStepper';
import DotTextStepper from './DotTextStepper';
import HorizontalStepper from './HorizontalStepper';
import PannelStepper from './PanelStepper';
import ProgressStepper from './ProgressStepper';
import VerticalStepper from './VerticalStepper';
import { StepperComponentProps } from './types';
import { useStepper } from '../hooks/use-stepper';
import React from 'react';

export default function StepperComponent({ stepperType, steps, color, title }: StepperComponentProps) {
    const { setStepperType, setColor, setSteps } = useStepper();

    useEffect(() => {
        //  needs id and step
        steps.forEach((step) => {
            setSteps(step.id, step);
        });
        setColor(color);
        setStepperType(stepperType);
    }, [steps, color, stepperType, setSteps, setColor, setStepperType]);
    return (
        <>
            {stepperType === 'bullet-text' && (
                <BulletTextStepper
                    steps={steps}
                    color={color}
                />
            )}
            {stepperType === 'circle' && (
                <CircleStepper
                    steps={steps}
                    color={color}
                />
            )}
            {stepperType === 'dot' && (
                <DotStepper
                    steps={steps}
                    color={color}
                />
            )}
            {stepperType === 'dot-text' && (
                <DotTextStepper
                    steps={steps}
                    color={color}
                />
            )}
            {stepperType === 'panel' && (
                <PannelStepper
                    steps={steps}
                    color={color}
                />
            )}
            {stepperType === 'verticle' && (
                <VerticalStepper
                    steps={steps}
                    color={color}
                />
            )}
            {stepperType === 'horizontal' && (
                <HorizontalStepper
                    steps={steps}
                    color={color}
                />
            )}
            {stepperType === 'circle-text' && (
                <CircleTextStepper
                    steps={steps}
                    color={color}
                />
            )}
            {stepperType === 'progress' && (
                <ProgressStepper
                    title={title || ''}
                    steps={steps}
                    color={color}
                />
            )}
        </>
    );
}
