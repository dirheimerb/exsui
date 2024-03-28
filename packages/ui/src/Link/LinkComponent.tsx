'use client';
import React, { useEffect } from 'react';
import { useLink } from '../hooks/use-link';
import { clsxMerge } from '@exsui/utils';

export interface LinkProps {
    href: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
    children: React.ReactNode;
    isExternal?: boolean;
    isDisabled?: boolean;
    className?: string;
}

const LinkComponent = React.forwardRef<HTMLAnchorElement, LinkProps>(
    ({ href, target, children, isExternal = false, isDisabled = false, className }: LinkProps, ref) => {
        const { setLink, setDisabled, setExternal } = useLink();

        const handleClick = () => {
            setLink(href);
            setExternal(isExternal);
            setDisabled(isDisabled);
        };

        useEffect(() => {
            setLink(href);
            setExternal(isExternal);
            setDisabled(isDisabled);
        }, [isExternal, isDisabled, setLink, setExternal, setDisabled]);

        return (
            <>
                {isDisabled ? (
                    <span className="cursor-not-allowed text-gray-600 opacity-45">{children}</span>
                ) : (
                    <a
                        id={href}
                        ref={ref}
                        href={href}
                        target={target}
                        onClick={handleClick}
                        data-testid="link"
                        data-link={href}
                        className={clsxMerge(
                            className,
                            isDisabled ? 'cursor-not-allowed text-gray-600 opacity-45' : '',
                        )}>
                        {children}
                    </a>
                )}
            </>
        );
    },
);

LinkComponent.displayName = 'LinkComponent';

export default LinkComponent;
