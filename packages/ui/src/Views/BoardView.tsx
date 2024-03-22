'use client';
import { useState, useRef, useEffect } from 'react';
import { BoardItem, BoardLane, BoardViewProps } from './types';
import { motion } from 'framer-motion';

export default function BoardView({ lanes }: BoardViewProps) {
    const [boardLanes, setBoardLanes] = useState<BoardLane[]>(lanes);
    const laneRefs = useRef<{ [key: string]: DOMRect }>({});

    useEffect(() => {
        laneRefs.current = {};
        document.querySelectorAll('[data-lane]').forEach((lane) => {
            const title = lane.getAttribute('data-lane');
            if (title) {
                laneRefs.current[title] = lane.getBoundingClientRect();
            }
        });
    }, [lanes]);

    const handleDragEnd = (event: any, item: BoardItem) => {
        const clientX = event.clientX;

        // Determine which lane the item was dropped in based on the pointer's final position
        const targetLaneTitle = Object.keys(laneRefs.current).find((laneTitle) => {
            const rect = laneRefs.current[laneTitle];
            return clientX >= rect.left && clientX <= rect.right;
        });

        if (targetLaneTitle) {
            const updatedLanes = boardLanes.map((lane) => {
                if (lane.title === targetLaneTitle) {
                    // Add the item to this lane if not already present
                    if (!lane.items.find((i) => i.id === item.id)) {
                        return { ...lane, items: [...lane.items, { ...item, status: lane.title }] };
                    }
                    return lane;
                } else {
                    // Remove the item from any other lane
                    return { ...lane, items: lane.items.filter((i) => i.id !== item.id) };
                }
            });
            setBoardLanes(updatedLanes);
        }
    };

    return (
        <div className="my-2 flex justify-center gap-5 overflow-x-auto border-none shadow">
            {boardLanes.map((lane) => (
                <div
                    key={lane.id}
                    className="flex min-w-[200px] flex-col rounded border bg-gray-800 p-2"
                    data-lane={lane.title}
                    ref={(el) => {
                        if (el) {
                            laneRefs.current[lane.title] = el.getBoundingClientRect();
                        }
                    }}>
                    <h2 className="mb-1 text-center font-medium text-gray-50">{lane.title}</h2>
                    <div className="flex-1">
                        {lane.items.map((item) => (
                            <motion.div
                                key={item.id}
                                className="mb-2 cursor-pointer select-none rounded border bg-gray-100 p-2"
                                drag="x"
                                onDragEnd={(e) => handleDragEnd(e, item)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.9 }}>
                                {item.content}
                            </motion.div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
