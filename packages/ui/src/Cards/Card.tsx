'use client';
import React from 'react';
/**
 * children
 * @type {React.ReactNode}
 */
export interface CardProps {
    children: React.ReactNode;
    className?: string;
}
/**
 * Card
 * @param {CardProps} { children }
 * @returns {JSX.Element}
 */
const Card: React.FC<CardProps> & {
    Header: React.FC<CardProps>;
    Content: React.FC<CardProps>;
    Footer: React.FC<CardProps>;
} = ({ children, className = '' }: CardProps): JSX.Element => {
    return <div className={`overflow-hidden rounded-lg bg-white shadow ${className}`}>{children}</div>;
};
/**
 * Header
 * @param {CardProps} { children }
 * @returns {JSX.Element}
 */
const Header: React.FC<CardProps> = ({ children, className = '' }: CardProps): JSX.Element => {
    return <div className={`overflow-hidden rounded-lg bg-white shadow-md ${className}`}>{children}</div>;
};
/**
 * Content
 * @param {CardProps} { children }
 * @returns {JSX.Element}
 */
const Content: React.FC<CardProps> = ({ children, className = '' }: CardProps): JSX.Element => {
    return <div className={`px-4 py-2.5 ${className}`}>{children}</div>;
};
/**
 * Footer
 * @param {CardProps} { children }
 * @returns {JSX.Element}
 */
const Footer: React.FC<CardProps> = ({ children, className = '' }: CardProps): JSX.Element => {
    return <div className={`border-t border-gray-200 px-4 py-2.5 text-sm ${className}`}>{children}</div>;
};

Card.Header = Header;
Card.Content = Content;
Card.Footer = Footer;

export default Card;
