import './styles.css';
import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { clsxMerge } from '@exsui/utils';
import { AiOutlineClose } from 'react-icons/ai';

export const itemVariants: Variants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export interface MotionMenuProps {
    items: MenuItemProps[];
    className?: string;
}

export interface MenuItemProps {
    label: string;
    setSelected: (label: string, isClosed: boolean) => void;
    className?: string;
}

export default function MotionMenu({
    items,
    className = 'flex items-center justify-center w-full p-3 rounded-md text-white',
}: MotionMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<string>('');

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            className="drop-shadow-[1px 1px 1px text-violet-500] m-2 w-36 rounded-md text-gray-100">
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                disabled={isOpen}
                className={clsxMerge(isOpen ? 'bg-gray-700 opacity-25' : 'bg-[#6600ff]', className)}>
                {selectedItem || 'Select an item'}
                <motion.div
                    // className="w-5 h-5"
                    animate={isOpen ? 'open' : 'closed'}
                    variants={{
                        open: { rotate: 180 },
                        closed: { rotate: 0 },
                    }}
                    transition={{ duration: 0.2 }}
                    style={{ originY: 0.55 }}></motion.div>
            </motion.button>
            {/* Container */}
            <motion.ul
                className="fixed z-50 w-36 flex-col gap-3 rounded-md bg-white p-3 shadow-md"
                variants={{
                    open: {
                        clipPath: 'inset(0% 0% 0% 0% round 10px)',
                        transition: {
                            type: 'spring',
                            bounce: 0,
                            duration: 0.7,
                            delayChildren: 0.3,
                            staggerChildren: 0.05,
                        },
                    },
                    closed: {
                        clipPath: 'inset(10% 50% 90% 50% round 10px)',
                        transition: {
                            type: 'spring',
                            bounce: 0,
                            duration: 0.3,
                        },
                    },
                }}
                style={{ pointerEvents: isOpen ? 'auto' : 'none' }}>
                {/* Close Button */}
                <motion.li
                    className="m-0 mb-3 mt-0"
                    variants={itemVariants}>
                    <motion.button
                        onClick={() => setIsOpen(false)}
                        className="absolute z-20 mx-24 inline-block rounded-full p-1 text-black hover:bg-gray-300">
                        <AiOutlineClose className="h-5 w-5" />
                    </motion.button>
                </motion.li>
                {/* Items */}
                {items.map((item, index) => (
                    <motion.li
                        key={index}
                        className="z-10 m-0 block cursor-pointer rounded p-2 text-[#6600ff] hover:bg-gray-200"
                        variants={itemVariants}
                        onClick={() => {
                            setSelectedItem(item.label);
                            item.setSelected(item.label, false);
                            setIsOpen(false);
                        }}>
                        {item.label}
                    </motion.li>
                ))}
            </motion.ul>
        </motion.nav>
    );
}
