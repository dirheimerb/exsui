import { useRef } from 'react';
import { LuCheckCircle } from 'react-icons/lu';
import { AiOutlineClose } from 'react-icons/ai';
import { MdErrorOutline, MdInfoOutline, MdOutlineWarningAmber } from 'react-icons/md';
import { AnimatePresence, motion } from 'framer-motion';

export interface NotifcationProps {
    type?: 'success' | 'error' | 'warning' | 'info';
    show: boolean;
    setShow: (show: boolean) => void;
    title: string;
    message?: string;
}
export default function Notifcation({ type = 'success', show, setShow, title, message }: NotifcationProps) {
    const divRef = useRef<HTMLDivElement>(null);
    return (
        <>
            <div
                aria-live="assertive"
                className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
                ref={divRef}>
                {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
                <AnimatePresence>
                    <motion.div className="flex w-full flex-col items-center space-y-4 sm:items-end">
                        {show && (
                            <motion.div
                                className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 50 }}
                                transition={{ duration: 0.3 }}>
                                <div className="p-4">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0">
                                            {type === 'success' && (
                                                <LuCheckCircle
                                                    className="h-6 w-6 text-green-400"
                                                    aria-hidden="true"
                                                />
                                            )}
                                            {type === 'error' && (
                                                <MdErrorOutline
                                                    className="h-6 w-6 text-red-500"
                                                    aria-hidden="true"
                                                />
                                            )}
                                            {type === 'warning' && (
                                                <MdOutlineWarningAmber
                                                    className="h-6 w-6 text-yellow-400"
                                                    aria-hidden="true"
                                                />
                                            )}
                                            {type === 'info' && (
                                                <MdInfoOutline
                                                    className="h-6 w-6 text-blue-400"
                                                    aria-hidden="true"
                                                />
                                            )}
                                        </div>
                                        <div className="ml-3 w-0 flex-1 pt-0.5">
                                            <p className="text-sm font-medium text-gray-900">{title}</p>
                                            <p className="mt-1 text-sm text-gray-500">{message}</p>
                                        </div>
                                        <div className="ml-4 flex flex-shrink-0">
                                            <button
                                                type="button"
                                                className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                onClick={() => {
                                                    setShow(false);
                                                }}>
                                                <span className="sr-only">Close</span>
                                                <AiOutlineClose
                                                    className="h-5 w-5"
                                                    aria-hidden="true"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </>
    );
}
