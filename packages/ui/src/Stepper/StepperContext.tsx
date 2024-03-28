'use client';
import React, { createContext, useCallback, useMemo, useState } from 'react';
import { StepperContextProps, StageProps, StepperProviderProps } from './types';

export const StepperContext = createContext<StepperContextProps | undefined>(undefined);

export const StepperProvider = ({ children }: StepperProviderProps) => {
    const [steps, setSteps] = useState<StepperContextProps['steps']>([]);
    const [color, setColor] = useState<StepperContextProps['color']>('gray');
    const [steperType, setStepperType] = useState<StepperContextProps['steperType']>('progress');

    const addStep = useCallback((step: StageProps) => {
        setSteps((prev) => [...prev, step]);
    }, []);

    const removeStep = useCallback((id: number) => {
        setSteps((prev) => prev.filter((step) => step.id !== id));
    }, []);

    const updateStep = useCallback((id: number, step: StageProps) => {
        setSteps((prev) => prev.map((s) => (s.id === id ? step : s)));
    }, []);

    const updateColor = useCallback((color: StepperContextProps['color']) => {
        setColor(color);
    }, []);

    const updateStepperType = useCallback((type: StepperContextProps['steperType']) => {
        setStepperType(type);
    }, []);

    const value = useMemo(
        () => ({
            steps,
            color,
            steperType,
            addStep,
            removeStep,
            setSteps: updateStep,
            setColor: updateColor,
            setStepperType: updateStepperType,
        }),
        [steps, color, steperType],
    );

    return <StepperContext.Provider value={value}>{children}</StepperContext.Provider>;
};
