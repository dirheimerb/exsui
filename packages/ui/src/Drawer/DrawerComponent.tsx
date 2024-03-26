import React, { useEffect } from 'react';
import { useDrawer } from '../hooks/use-drawer'; // Adjust the path as necessary
import { DrawerAnchor, DrawerVariant } from './types';
import { AnimatePresence, motion } from 'framer-motion';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Button from '../Button';

export interface DrawerComponentProps {
    anchorValue: DrawerAnchor;
    widthValue: string;
    elevationValue: number;
    variantValue: DrawerVariant;
    transitionDurationValue: number;
    children: React.ReactNode;
}
/**
 * DrawerComponent
 * @param {DrawerComponentProps} {
 *      anchorValue,
 *      widthValue,
 *      elevationValue,
 *      variantValue,
 *      transitionDurationValue,
 *      children,
 * }
 * @returns {JSX.Element}
 */
export default function DrawerComponent({
    anchorValue,
    widthValue,
    elevationValue,
    variantValue,
    transitionDurationValue,
    children,
}: DrawerComponentProps): JSX.Element {
    const {
        open,
        onToggle,
        anchor,
        width,
        elevation,
        variant,
        transitionDuration,
        setAnchor,
        setElevation,
        setTransitionDuration,
        setWidth,
        setVariant,
    } = useDrawer();

    const drawerStyles: React.CSSProperties = {
        position: 'fixed',
        [anchor]: 0,
        width: width,
        height: '100vh',
        boxShadow: `0px 0px ${elevation}px rgba(0, 0, 0, 0.5)`,
        transition: `transform ${transitionDuration}ms ease-in-out`,
        transform: open ? 'translateX(0)' : `translateX(${anchor === 'left' ? '-100%' : '100%'})`,
        backgroundColor: 'white',
        zIndex: 1000,
        top: 0,
    };
    const toggleDrawer = (open: boolean) => {
        onToggle(open);
    };
    // Close drawer on background click for 'temporary' variant
    const handleBackdropClick = (open: boolean) => {
        if (variant === 'temporary') {
            onToggle(open);
        }
    };

    useEffect(() => {
        setAnchor(anchorValue);
        setWidth(widthValue);
        setElevation(elevationValue);
        setVariant(variantValue);
        setTransitionDuration(transitionDurationValue);
    }, [
        anchorValue,
        elevationValue,
        setAnchor,
        setElevation,
        setTransitionDuration,
        setVariant,
        setWidth,
        transitionDurationValue,
        variantValue,
        widthValue,
    ]);

    return (
        <>
            <Button
                onClick={() => toggleDrawer(!open)}
                className="rounded-md border-none bg-transparent p-3 text-gray-100 focus:outline-none">
                {open ? <AiOutlineClose className="invisible h-5 w-5" /> : <AiOutlineMenu className="h-5 w-5" />}
            </Button>
            <AnimatePresence>
                {open && variant === 'temporary' && (
                    <motion.div
                        onClick={() => handleBackdropClick(false)}
                        key="modal"
                        initial={{ x: 0, opacity: 0 }}
                        animate={{
                            x: 0,
                            opacity: 1,
                        }}
                        exit={{
                            x: width,
                            opacity: 0,
                        }}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            zIndex: 999,
                        }}
                        className="bg-gray-100"
                    />
                )}
                <div style={drawerStyles}>
                    <Button
                        className="absolute right-0 top-0 border-none bg-transparent p-3 focus:outline-none"
                        onClick={() => toggleDrawer(false)}>
                        <AiOutlineClose className="h-5 w-5 text-black" />
                    </Button>
                    {children}
                </div>
            </AnimatePresence>
        </>
    );
}
