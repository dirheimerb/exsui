import React, { useState } from 'react';

const KeywordInput: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [keyword, setKeyword] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement> | React.FocusEvent<HTMLInputElement>) => {
        if (e.type === 'blur' || (e as React.KeyboardEvent).key === 'Enter') {
            setKeyword(inputValue);
            setInputValue(''); // Optionally clear the input after submission
        }
    };

    return (
        <>
            <input
                type="text"
                placeholder="Enter a keyword..."
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleSubmit}
                onBlur={handleSubmit}
                className="m-1 w-1/2 rounded-md border-none shadow-sm"
                autoFocus
            />
            <div className="m-1 text-gray-400 opacity-50">{keyword && <p>Entered Keyword: {keyword}</p>}</div>
        </>
    );
};

export default KeywordInput;
