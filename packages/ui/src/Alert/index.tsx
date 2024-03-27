import { clsxMerge } from "@exsui/utils";
import { ColorKeys, colorOptions } from "../styles";
import React, { ReactNode } from "react";

export interface AlertProps {
    color?: ColorKeys;
    rounded?: boolean;
    pill?: boolean;
    link?: ReactNode;
    children: React.ReactNode;
}

export default function Alert({ 
    color='blue', 
    rounded=false,
    pill=false,
    link,
    children 
}: AlertProps) {
    
    return (
        <div className={clsxMerge(colorOptions[color], 'p-4 rounded-lg mb-4 text-sm', rounded && 'rounded', pill && 'rounded-full'
        )} role="alert">
            <span className="font-medium">{children}</span>
        </div>
    )
}