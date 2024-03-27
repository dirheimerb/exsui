'use client';
import React, { useEffect } from "react";
import { useLink } from "../hooks/use-link";
import { clsxMerge } from "@exsui/utils";

export interface LinkProps {
    link: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
    children: React.ReactNode;
    isExternal?: boolean;
    isDisabled?: boolean;
    className?: string;
}

const LinkComponent = React.forwardRef<HTMLAnchorElement, LinkProps>(
    ({ link, target, children, isExternal = false, isDisabled = false, className }: LinkProps, ref) => {
        const { href, setLink, setDisabled, setExternal } = useLink();

        const handleClick = () => {
            setLink(link);
            setExternal(isExternal);
            setDisabled(isDisabled);
        };

        useEffect(() => {
            setLink(link);
            setExternal(isExternal);
            setDisabled(isDisabled);
        }, [link, isExternal, isDisabled, setLink, setExternal, setDisabled]);

        return (
        <>
        {isDisabled ? (
        <span className="cursor-not-allowed text-gray-600 opacity-45">{children}</span> 
        ) : (
        <a
                    id={link}                    
                    ref={ref}
                    href={href}
                    target={target}
                    onClick={handleClick}
                    
                    className={clsxMerge(className, isDisabled ? "cursor-not-allowed text-gray-600 opacity-45" : "")}
                >
                    {children}
                </a>
        )}
        </>
        );
    }
);

LinkComponent.displayName = "LinkComponent";

export default LinkComponent;
