import { ReactNode, CSSProperties } from 'react';

export interface AccordionContextType {
    /**
     * openIndex
     * @type {number | null}
     */
    openIndex: number | null;
    /**
     * setOpenIndex
     * @param {number | null} index
     * @returns {void}
     */
    setOpenIndex: (index: number | null) => void;
}

export interface AccordionContextProviderProps {
    /**
     * children
     * @type {ReactNode}
     */
    children: ReactNode;
}

export interface AccordionStylesType {
    defaultProps: {
        icon: ReactNode;
        className?: string;
        animate?: {
            unmount: {
                [key: string]: string | number;
            };
            mount: {
                [key: string]: string | number;
            };
        };
        disabled: boolean;
    };
    styles: {
        base: AccordionBase;
    };
}

export interface AccordionHeader {
    initial?: Initial;
    active?: Active;
    icon?: Icon;
}

export type Container = {
    display: string;
    position: string;
    width: string;
};

export type Initial = {
    display: string;
    justifyContent: string;
    alignItems: string;
    width: string;
    py: string;
    borderWidth: string;
    color: string;
    fontSmoothing: string;
    fontFamily: string;
    fontSize: string;
    textAlign: string;
    fontWeight: string;
    lineHeight: string;
    userSelect: string;
    hover: string;
    transition: string;
};

export type Active = {
    color: string;
};

export type Icon = {
    marginLeft: string;
};

export interface AccordionBase {
    container: Container;
    header: AccordionHeader;
    body: CSSProperties;
    disabled: Disabled;
}

export type Disabled = {
    pointerEvents: string;
    opacity: string;
};
// src/components/Accordion/AccordionItem.tsx
export interface AccordionItemProps {
    title: string;
    content: React.ReactNode;
    className?: string;
    contentClassName?: string;
}

export interface AccordionProps extends React.ComponentProps<'div'> {
    open: boolean;
    icon?: ReactNode;
    animate?: {
        unmount: {
            height: string;
            transition: { duration: number; times: number[] };
        };
        mount: {
            height: string;
            transition: { duration: number; times: number[] };
        };
    };
    disabled?: boolean;
    className?: string;
    items: AccordionItemProps[];
}

export interface AccordionProps {
    items: AccordionItemProps[];
}
