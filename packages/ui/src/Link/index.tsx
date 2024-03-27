'use client';
import React from "react";
import LinkContextProvider from "./Context";
import { clsxMerge } from "@exsui/utils";
import LinkComponent from "./LinkComponent";

export interface LinkProps {
    link: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
    children: React.ReactNode;
    isExternal?: boolean;
    isDisabled?: boolean;
    className?: string;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
    ({ link, target, children, isExternal = false, isDisabled = false, className }: LinkProps, ref) => {

        return (
            <LinkContextProvider>
                <LinkComponent 
                    link={link}
                    target={target}
                    isExternal={isExternal}
                    isDisabled={isDisabled}
                    className={clsxMerge(className, isDisabled ? "cursor-not-allowed text-gray-600 opacity-45" : "")}
                    ref={ref}>

                    {children}
                </LinkComponent>
            </LinkContextProvider>
        );
    }
);

Link.displayName = "Link";

export default Link;
