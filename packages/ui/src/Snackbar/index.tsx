import { ReactNode, useEffect, useRef } from 'react';
import { clsxMerge } from '@exsui/utils';
import { AnimatePresence, motion } from 'framer-motion';

export interface SnackbarProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    colors?: 'success' | 'error' | 'warning' | 'info' | 'default';
    size?: 'sm' | 'md' | 'lg';
    animation?: 'fade' | 'slide' | 'grow';
    width?: 'sm' | 'md' | 'lg';
    timeout: number;
    message: ReactNode;
    classNames?: string;
}

const snackbarColors = {
    default: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
    success: 'bg-green-500 text-gray-100 hover:bg-green-600',
    error: 'bg-red-500 text-gray-100 hover:bg-red-600',
    warning: 'bg-yellow-500 text-gray-100 hover:bg-yellow-600',
    info: 'bg-blue-500 text-gray-100 hover:bg-blue-600',
};
const snackbarSizes = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-3 py-2 text-base',
    lg: 'px-4 py-3 text-lg',
};

const snackbarPositions = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
};
const snackbarAnimations = {
    fade: 'fade',
    slide: 'slide',
    grow: 'grow',
};

const snackbarWidth = {
    sm: 'w-1/4',
    md: 'w-1/2',
    lg: 'w-3/4',
};
export default function Snackbar({
    open,
    setOpen,
    colors = 'default',
    position = 'bottom-right',
    timeout = 3000,
    message,
    classNames = 'fade',
    size = 'md',
    animation = 'fade',
    width = 'md',
}: SnackbarProps) {
    const nodeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (open) {
            const timer = setTimeout(() => {
                setOpen(false);
            }, timeout);
            return () => clearTimeout(timer);
        }
    }, [open, setOpen, timeout]);

    const animationVariants = {
        fade: { opacity: 0 },
        slide: { x: '-100%' },
        slideIn: {
            initial: {
                opacity: 0,
                y: -20,
            },
            animate: {
                opacity: 1,
                y: 0,
            },
            exit: {
                opacity: 0,
                y: 20,
            },
            transition: {
                type: 'spring',
                damping: 20,
                stiffness: 300,
            },
        },
        grow: { scale: 0 },
    };

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    role="presentation"
                    ref={nodeRef}
                    initial={animationVariants[animation]}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={animationVariants[animation]}
                    transition={{ duration: 0.5 }}
                    className={clsxMerge(
                        'fixed w-1/2 rounded border-none p-4 shadow-lg',
                        colors === 'default' && snackbarColors['default'],
                        colors === 'success' && snackbarColors['success'],
                        colors === 'error' && snackbarColors['error'],
                        colors === 'warning' && snackbarColors['warning'],
                        colors === 'info' && snackbarColors['info'],
                        position === 'top-left' && snackbarPositions['top-left'],
                        position === 'top-right' && snackbarPositions['top-right'],
                        position === 'bottom-left' && snackbarPositions['bottom-left'],
                        position === 'bottom-right' && snackbarPositions['bottom-right'],
                        size === 'sm' && snackbarSizes['sm'],
                        size === 'md' && snackbarSizes['md'],
                        size === 'lg' && snackbarSizes['lg'],
                        width === 'sm' && snackbarWidth['sm'],
                        width === 'md' && snackbarWidth['md'],
                        width === 'lg' && snackbarWidth['lg'],
                        animation === 'fade' && snackbarAnimations['fade'],
                        animation === 'slide' && snackbarAnimations['slide'],
                        animation === 'grow' && snackbarAnimations['grow'],
                        classNames,
                    )}>
                    <div
                        role="alert"
                        className="snackbar-content">
                        {' '}
                        {message}{' '}
                    </div>

                    <button
                        className="absolute right-2 top-2"
                        onClick={() => setOpen(false)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
