import React from 'react';

export interface CardProps {
    children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
    return <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">{children}</div>;
}

export function Header({ children }: CardProps) {
    return <div className="px-4 py-5 sm:px-6">{children}</div>;
}

export function Content({ children }: CardProps) {
    return <div className="px-4 py-5 sm:p-6">{children}</div>;
}

export function Footer({ children }: CardProps) {
    return <div className="px-4 py-4 sm:px-6">{children}</div>;
}

Card.Header = Header;
Card.Content = Content;
Card.Footer = Footer;
