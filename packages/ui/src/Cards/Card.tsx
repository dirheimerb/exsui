import React from 'react';

export interface CardProps {
    /**
     * children
     * @type {React.ReactNode}
     */
    children: React.ReactNode;
}
/**
 * Card
 * @param {CardProps} { children }
 * @returns {JSX.Element}
 */
export default function Card({ children }: CardProps): JSX.Element {
    return <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">{children}</div>;
}
/**
 * Header
 * @param {CardProps} { children }
 * @returns {JSX.Element}
 */
export function Header({ children }: CardProps): JSX.Element {
    return <div className="px-4 py-5 sm:px-6">{children}</div>;
}
/**
 * Content
 * @param {CardProps} { children }
 * @returns {JSX.Element}
 */
export function Content({ children }: CardProps): JSX.Element {
    return <div className="px-4 py-5 sm:p-6">{children}</div>;
}
/**
 * Footer
 * @param {CardProps} { children }
 * @returns {JSX.Element}
 */
export function Footer({ children }: CardProps): JSX.Element {
    return <div className="px-4 py-4 sm:px-6">{children}</div>;
}

Card.Header = Header;
Card.Content = Content;
Card.Footer = Footer;
