import React, { useEffect } from 'react';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { colorVariant, clsxMerge } from '@exsui/utils';
import { EmailValidationProps } from './types';
import { z } from 'zod';

const emailValidationRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function EmailValidation({
    email,
    setEmail,
    isValid = false,
    errorMessage = 'Not a valid email address.',
    className = 'block w-full rounded-md border-0 py-1.5 pr-10 ring-1 ring-inset focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6',
    disabled = false,
    textColor = 'white',
    ringColor = 'gray',
    focusColor = 'focus:ring-gray-500',
    placeholderColor = 'placeholder-gray-800',
}: EmailValidationProps): JSX.Element {
    const emailSchema = z.string().email();
    const emailRef = React.useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (emailRef.current) {
            emailRef.current.focus();
        }
    }, []);

    useEffect(() => {
        if (emailValidationRegex.test(email)) {
            console.log('email is valid', email);
        } else {
            isValid = false;
        }
    }, [email]);

    return (
        <>
            <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                Email
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
                <input
                    type="email"
                    name="email"
                    id="email"
                    data-status={isValid ? 'valid' : 'invalid'}
                    className={clsxMerge(
                        'has-[:invalid]:text-red-900',
                        className,
                        isValid
                            ? `bg-white ${colorVariant({ aspect: 'text', colorName: textColor, colorStrength: 500 })} ${colorVariant({ aspect: 'focus', colorName: focusColor, colorStrength: 500 })} ${colorVariant({ aspect: 'ring', colorName: ringColor, colorStrength: 500 })} ${colorVariant({ aspect: 'placeholder', colorName: placeholderColor, colorStrength: 500 })}`
                            : 'text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500',
                    )}
                    placeholder="Email"
                    value={email}
                    spellCheck="false"
                    autoComplete="email"
                    autoCapitalize="off"
                    onChange={(e) => {
                        setEmail(e.target.value);
                        emailSchema.safeParse(e.target.value).success ? (isValid = true) : (isValid = false);
                    }}
                    aria-invalid={!isValid}
                    aria-describedby="email-error"
                    ref={emailRef}
                    disabled={disabled}
                />
                {!isValid && (
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                        <AiOutlineExclamationCircle
                            className="h-5 w-5 text-red-500"
                            aria-hidden="true"
                        />
                    </div>
                )}
            </div>
            {!isValid && (
                <p
                    className="mt-2 text-sm text-red-600"
                    id="email-error">
                    {errorMessage}
                </p>
            )}
        </>
    );
}

EmailValidation.displayName = 'EmailValidation';

export default EmailValidation;
