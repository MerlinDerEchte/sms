import React from "react";
import { createComponentBoxStyles } from "./ComponentBoxStyles"

export interface BoxComponentProps {
    boxContent: React.ReactNode
    isClickable: boolean,
}


export const ComponentBox: React.FC<{ boxProps: BoxComponentProps }> = ({ boxProps }) => {

    const { boxContent, isClickable } = boxProps;
    const componentBoxStyles = createComponentBoxStyles(isClickable);
    return (
        <div className={componentBoxStyles}>
            {boxContent}
        </div>
    )
}