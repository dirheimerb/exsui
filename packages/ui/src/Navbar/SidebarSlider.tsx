import { motion, AnimatePresence, color } from 'framer-motion';
import React from 'react';
import { MdHome, MdOutlinePersonOutline, MdOutlineFolder, MdOutlineCalendarToday } from 'react-icons/md';
import { IoDuplicateOutline, IoPieChart } from 'react-icons/io5';
import { clsxMerge, colorVariant } from '@exsui/utils';
export interface SidebarProps {
    open: boolean;
}

const navigation = [
    { name: 'Dashboard', href: '#', icon: MdHome, count: '5', current: true },
    { name: 'Team', href: '#', icon: MdOutlinePersonOutline, current: false },
    { name: 'Projects', href: '#', icon: MdOutlineFolder, count: '12', current: false },
    { name: 'Calendar', href: '#', icon: MdOutlineCalendarToday, count: '20+', current: false },
    { name: 'Documents', href: '#', icon: IoDuplicateOutline, current: false },
    { name: 'Reports', href: '#', icon: IoPieChart, current: false },
];

export default function SidebarSlider({ open }: SidebarProps) {
    const sidebarRef = React.useRef<HTMLDivElement>(null);

    // Open the sidebar with a slide-in animation
    React.useEffect(() => {
        const sidebar = sidebarRef.current;
        if (sidebar) {
            sidebar.classList.remove('slideOutDown');
            sidebar.classList.add('slideInUp');
        }
    }, []);
    const bg = colorVariant({ aspect: 'bg', colorName: 'gray', colorStrength: 800 });
    const text = colorVariant({ aspect: 'text', colorName: 'gray', colorStrength: 100 });

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className={clsxMerge(`fixed h-svh w-1/4 grow flex-col gap-y-5 overflow-hidden ${bg} px-6`)}
                    ref={sidebarRef}
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -100, opacity: 0 }}
                    transition={{ duration: 0.3 }}>
                    <nav className="flex-1 flex-col">
                        <ul
                            role="list"
                            className="flex flex-1 flex-col gap-y-7">
                            <li>
                                <ul
                                    role="list"
                                    className="-mx-2 mt-2 space-y-2">
                                    {navigation.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className={clsxMerge(
                                                    `group flex items-center rounded-md px-2 py-2 text-sm font-medium ${text} hover:text-gray-500`,
                                                )}>
                                                <item.icon
                                                    className="mr-4 h-6 w-6"
                                                    aria-hidden="true"
                                                />
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
