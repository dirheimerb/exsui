import { forwardRef } from 'react';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { colorVariant, clsxMerge } from '../utils';
import { EmailValidationProps } from './types';

const EmailValidation = forwardRef<HTMLInputElement, EmailValidationProps>(function EmailValidation(
    {
        email,
        setEmail,
        isValid,
        errorMessage = 'Not a valid email address.',
        className = 'block w-full rounded-md border-0 py-1.5 pr-10 ring-1 ring-inset focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6',
        disabled = false,
        backgroundColor = 'gray',
        textColor = 'gray',
        ringColor = 'gray',
        focusColor = 'focus:ring-gray-500',
        placeholderColor = 'placeholder-gray-500',
    },
    ref,
) {
    return (
        <>
            <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900">
                Email
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
                <input
                    type="email"
                    name="email"
                    id="email"
                    className={clsxMerge(
                        className,
                        isValid
                            ? `${colorVariant({ aspect: 'bg', colorName: backgroundColor, colorStrength: 500 })} ${colorVariant({ aspect: 'text', colorName: textColor, colorStrength: 500 })} ${colorVariant({ aspect: 'focus', colorName: focusColor, colorStrength: 500 })} ${colorVariant({ aspect: 'ring', colorName: ringColor, colorStrength: 500 })} ${colorVariant({ aspect: 'placeholder', colorName: placeholderColor, colorStrength: 500 })}`
                            : 'text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500',
                    )}
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-invalid={!isValid}
                    aria-describedby="email-error"
                    ref={ref}
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
});
EmailValidation.displayName = 'EmailValidation';
export default EmailValidation;
