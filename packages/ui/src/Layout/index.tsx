import React from 'react';
import StaticSidebar from './StaticSidebar';

export interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <nav className="flex flex-1 flex-col">
                <StaticSidebar />
                {/* <Sidebar /> */}
            </nav>
            {/* <div className="flex"> */}

            <main className="py-10">
                <div className="px-4 sm:px-6 lg:px-8">{children}</div>
            </main>
        </>
    );
}
