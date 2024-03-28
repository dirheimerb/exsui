import React, { HTMLAttributes } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import Button from '../Button';
import { ColorKeys, colorOptions } from '../styles';
import { clsxMerge } from '@exsui/utils';

export interface ButtonGroupProps extends HTMLAttributes<HTMLButtonElement> {
    /**
     * children
     * @type {ReactNode}
     */
    leftChild?: React.ReactNode;
    /**
     * children
     * @type {ReactNode}
     */
    centerChild?: React.ReactNode;
    /**
     * children
     * @type {ReactNode}
     */
    rightChild?: React.ReactNode;
    /**
     * iconOnly
     * @type {boolean}
     */
    iconOnly?: boolean;
    /**
     * colorOptions
     * @type {string}
     */
    colorOptions?: ColorKeys;
    leftClick?: () => void;
    centerClick?: () => void;
    rightClick?: () => void;
    rounded?: boolean;
}
export default function ButtonGroup({
    leftChild,
    centerChild,
    rightChild,
    iconOnly = false,
    colorOptions = 'blue',
    leftClick,
    centerClick,
    rightClick,
    rounded = false,
    ...props
}: ButtonGroupProps): JSX.Element {
    return (
        <span className="isolate inline-flex rounded-md shadow-sm">
            <Button
                onClick={leftChild ? leftClick : undefined}
                type="button"
                role="group"
                aria-label="Previous"
                data-id="exsui-button-group-left"
                className={clsxMerge(
                    'relative inline-flex items-center rounded-l-md px-3 py-2 text-sm font-semibold',
                    colorOptions,
                    rounded ? 'rounded' : '',
                )}>
                {iconOnly ? <HiChevronLeft className="h-5 w-5" /> : <>{leftChild}</>}
            </Button>
            {!iconOnly && (
                <Button
                    type="button"
                    role="group"
                    aria-label="Center"
                    data-id="exsui-button-group-center"
                    onClick={centerChild ? centerClick : undefined}
                    className={clsxMerge(
                        'relative -ml-px inline-flex items-center px-3 py-2 text-sm font-semibold',
                        colorOptions,
                        rounded ? 'rounded' : '',
                    )}>
                    {centerChild}
                </Button>
            )}
            <Button
                type="button"
                role="group"
                aria-label="Next"
                data-id="exsui-button-group-right"
                onClick={rightChild ? rightClick : undefined}
                className={clsxMerge(
                    '-ml-px inline-flex items-center rounded-r-md px-3 py-2 text-sm font-semibold',
                    colorOptions,
                    rounded ? 'rounded' : '',
                )}>
                {iconOnly ? <HiChevronRight className="h-5 w-5" /> : <>{rightChild}</>}
            </Button>
        </span>
    );
}
