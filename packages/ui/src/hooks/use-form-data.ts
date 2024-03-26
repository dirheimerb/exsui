import { useState, useCallback } from 'react';

export interface UseFormDataReturn<T> {
    /**
     * The current form data state.
     */
    formData: FormData;

    /**
     * A method to handle changes in form data. It updates the form data state with the new value of a given field.
     */
    handleChange: (key: keyof T, value: T[keyof T]) => void;
}

/**
 * A custom hook to manage form data.
 *
 * @returns An object with the current form data and a method to update it.
 */
export function useFormData<T extends Record<string, any>>(): UseFormDataReturn<T> {
    const [formData, setFormData] = useState<FormData>(new FormData());

    const handleChange = useCallback((key: keyof T, value: T[keyof T]) => {
        setFormData((prevFormData) => {
            const updatedFormData = new FormData();
            // Copy over the existing entries
            prevFormData.forEach((val, key) => {
                updatedFormData.append(key, val);
            });
            // Convert value to string if it is an object, to ensure compatibility with FormData
            const valueToAppend = typeof value === 'object' ? JSON.stringify(value) : value;
            // Update the form data with the new value
            updatedFormData.set(key as string, valueToAppend);
            return updatedFormData;
        });
    }, []);

    return {
        formData,
        handleChange,
    };
}
