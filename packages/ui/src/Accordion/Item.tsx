import { useState, FC } from 'react';
import { AccordionItemProps } from './types';
import { AnimatePresence, motion } from 'framer-motion';
import { useAccordion } from './use-accordion';

const AccordionItem: FC<AccordionItemProps> = ({
    title,
    content,
    className = 'flex justify-between items-center w-full px-4 py-2 text-left text-gray-800 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 my-1',
    contentClassName = 'flex px-4 py-2 text-gray-800 bg-gray-100',
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const { setOpenIndex } = useAccordion();
    return (
        <div>
            <button
                className={className}
                onClick={() => {
                    setIsOpen(!isOpen);
                    setOpenIndex(isOpen ? -1 : 1);
                }}>
                {title}
                <span>{isOpen ? '-' : '+'}</span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        layout
                        className={contentClassName}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ height: isOpen ? '100px' : '500px' }}>
                        {content}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AccordionItem;
