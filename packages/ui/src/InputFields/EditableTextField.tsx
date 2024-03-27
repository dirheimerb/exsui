'use client';
import { BiPencil } from 'react-icons/bi';
import React, { useState } from 'react';
import { EditableTextFieldProps } from './types';

const EditableTextField: React.FC<EditableTextFieldProps> = ({ initialValue, onSave }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(initialValue);

    const handleEdit = () => setIsEditing(true);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

    const handleSave = () => {
        onSave(value);
        setIsEditing(false);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSave();
        }
    };

    return (
        <div data-editable-text-field={isEditing} role='textbox'>
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={value}
                        onChange={handleChange}
                        onKeyDown={handleKeyPress}
                        onBlur={handleSave}
                        className="m-1 w-1/2 rounded border-none shadow-sm"
                        autoFocus
                    />
                </div>
            ) : (
                <div
                    onClick={handleEdit}
                    className="m-1 w-1/2 rounded border-none p-1 shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                    style={{ cursor: 'pointer' }}>
                    {value}
                    <button onClick={handleEdit}>
                        <BiPencil className="m-1 h-5 w-5  text-gray-400 opacity-25" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default EditableTextField;
