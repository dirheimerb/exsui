'use client';
import React from 'react';
import Button from '../Button';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
// import web crypto to hash the password

export interface PasswordProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
}

export default function Password({ label = 'Password', value, onChange }: PasswordProps): JSX.Element {
    const [showPassword, setShowPassword] = React.useState(false);

    const hashPassword = async (password: string) => {
        const encoder = new TextEncoder();
        const data = encoder.encode(password);
        const hash = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hash));
        const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
        return hashHex;
    };

    return (
        <>
            <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900">
                {label}
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
                <input
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={value}
                    onChange={(e) => {
                        hashPassword(e.target.value).then((hash) => onChange(hash));
                    }}
                    className="block w-full cursor-text rounded-md border-0 py-1.5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <Button
                        id="password-toggle"
                        role="button"
                        data-testid="password-toggle"
                        data-status={showPassword ? 'show' : 'hide'}
                        variant="icon"
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3">
                        {showPassword ? (
                            <AiOutlineEyeInvisible
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        ) : (
                            <AiOutlineEye
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        )}
                    </Button>
                </div>
            </div>
        </>
    );
}
