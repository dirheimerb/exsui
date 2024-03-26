// import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { clsxMerge } from '@exsui/utils';

export interface SwitchProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Switch = ({ id, label, checked, onChange }: SwitchProps) => {
    
    const toggleSwitch = () => {
        onChange(!checked);
    };
  
const spring = {
  type: "spring",
  stiffness: 700,
  damping: 50
};
  return (    
    <div className="inline-flex items-center">
    <button id={id} className={clsxMerge("flex items-center w-12 h-6 m-2 rounded-full p-1 cursor-pointer", checked ? 'justify-end bg-sky-400' : 'justify-start bg-gray-300')} data-isOn={checked} onClick={toggleSwitch}>
        <motion.div className="h-5 w-5 rounded-full bg-white" layout transition={spring} />
    </button>
    <span className="text-gray-100">{label}</span>
    </div>

  );
};

Switch.displayName = 'Switch';

export default Switch;
