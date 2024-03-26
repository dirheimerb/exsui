import { AiOutlineClose } from 'react-icons/ai';
import React from 'react';

export interface CheckboxProps {
    id: string;
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

const Checkbox = ({ id, label, checked, onChange }: CheckboxProps) => {
    return (
        <div className="relative m-1 flex items-start">
            <div className="flex h-6 items-center">
                <div className="inline-block select-none">
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={(e) => onChange(e.target.checked)}
                        className="absolute h-8 w-8 opacity-0"
                        id={id} // Ensure the id is passed here to correctly associate the label
                    />
                    <label
                        htmlFor={id} // Use the passed id for the htmlFor attribute
                        className={`flex h-6 w-6 cursor-pointer items-center justify-center rounded-md border-2 bg-white ${checked ? 'border-blue-500 bg-blue-500' : 'border-gray-400'}`}>
                        <AiOutlineClose className={`h-5 w-5 ${checked ? '' : 'text-transparent'}`} />
                    </label>
                </div>
            </div>
            <span className="ml-2 font-semibold text-gray-100">{label}</span>
        </div>
    );
};

export default Checkbox;
