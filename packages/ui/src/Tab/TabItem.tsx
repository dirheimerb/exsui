'use client';
import React, { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export interface TabItemProps {
    children: ReactNode;
    isActive: boolean;
    className?: string;
}
const TabItem = React.memo(function TabItem({
    children,
    isActive,
    className = 'p-4 bg-gray-100 m-1 rounded',
}: TabItemProps) {
    if (!isActive) return null;

    return (
        <AnimatePresence>
            <motion.div
                className={className}
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                exit={{
                    opacity: 0,
                }}
                transition={{
                    ease: 'linear',
                    duration: 0.2,
                }}>
                {children}
            </motion.div>
        </AnimatePresence>
    );
});

TabItem.displayName = 'TabItem';

export default TabItem;
