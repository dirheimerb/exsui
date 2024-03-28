import React, { createContext, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
export interface LinkContextProps {
    isExternal: boolean;
    isDisabled: boolean;
    link: string;
    setLink: (href: string) => void;
    setExternal: (isExternal: boolean) => void;
    setDisabled: (isDisabled: boolean) => void;
}

export const LinkContext = createContext<LinkContextProps | undefined>(undefined);

export interface LinkProviderProps {
    children: ReactNode;
}

export default function LinkContextProvider({ children }: LinkProviderProps) {
    const [link, setLink] = useState<string>('');
    const [isExternal, setExternal] = useState<boolean>(false);
    const [isDisabled, setDisabled] = useState<boolean>(false);

    const setLinks = useCallback(
        (href: string) => {
            setLink(href);
        },
        [setLink],
    );

    const setInternalExternal = useCallback(
        (isExternal: boolean) => {
            setExternal(isExternal);
        },
        [setExternal],
    );

    const setInternalDisabled = useCallback(
        (isDisabled: boolean) => {
            setDisabled(isDisabled);
        },
        [setDisabled],
    );

    const value = useMemo(() => {
        return {
            isExternal,
            isDisabled,
            link,
            setLink: setLinks,
            setExternal: setInternalExternal,
            setDisabled: setInternalDisabled,
        };
    }, [link, isDisabled, isExternal, setInternalDisabled, setInternalExternal, setLinks]);

    return <LinkContext.Provider value={value}>{children}</LinkContext.Provider>;
}
