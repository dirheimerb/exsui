'use client';
import FABItem from './FABItem';
import { FABItemProps } from './types';
import { useFAB } from '../hooks/use-fab';
import { motion, AnimatePresence } from 'framer-motion';

export default function FABList({ items }: { items: FABItemProps[] }) {
    const { isOpen } = useFAB();
    return (
        <AnimatePresence>
            <motion.div
                initial={{
                    y: 100,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                    scale: 1,
                }}
                exit={{
                    y: 100,
                    opacity: 0,
                    scale: 0.5,
                }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className={`fixed bottom-16 right-4 mb-2 w-1/6 space-y-2 rounded bg-white p-1 shadow-lg transition-all duration-300 ${isOpen ? 'grid' : 'hidden'}`}>
                {items.map((item, index) => (
                    <FABItem
                        key={index}
                        {...item}
                    />
                ))}
            </motion.div>
        </AnimatePresence>
    );
}
