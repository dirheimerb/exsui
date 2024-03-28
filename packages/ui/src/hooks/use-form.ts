import React from 'react';

export interface FormFieldProps {
    fieldName: string;
    dataType: string;
}
export interface UseFormReturn {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    formData: FormData;
    checkedDataType: any;
}

export type DataType = 'string' | 'number' | 'boolean' | 'object' | 'undefined' | 'function' | 'null' | 'default';
/**
 * getDataType
 * @description Get the data type of a field
 * @param {D} fieldName
 * @returns {DataType}
 */
export function getDataType<D>(fieldName: D): DataType {
    switch (typeof fieldName) {
        case 'string':
            return 'string';
        case 'number':
            return 'number';
        case 'boolean':
            return 'boolean';
        case 'object':
            return 'object';
        case undefined:
            return 'undefined';
        case 'function':
            return 'function';
        case null:
            return 'null';
        default:
            return 'default';
    }
}

export function useForm({ fieldName, dataType }: FormFieldProps): UseFormReturn {
    const [checkedDataType, setCheckedDataType] = React.useState<any>(null);

    React.useEffect(() => {
        setCheckedDataType(getDataType(dataType));
    }, [dataType]);

    const formData = new FormData();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        formData.set(fieldName, e.target.value);
    };

    return { handleChange, formData, checkedDataType };
}
