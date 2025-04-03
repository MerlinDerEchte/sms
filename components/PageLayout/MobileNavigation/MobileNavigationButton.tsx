import React, { useState } from 'react';
import { createMobileButtonStyles } from './createMobileButtonStyles';

export const MobileNavigationButton:React.FC<{showNavigationMenu: Boolean, isInitialRender:Boolean, toggleShowNavigationMenu: () => void}> = ({showNavigationMenu, isInitialRender, toggleShowNavigationMenu}) => {

    const mobileButtonStyles = createMobileButtonStyles(showNavigationMenu, isInitialRender) 
    return (
        <button
            className={mobileButtonStyles}
            onClick={toggleShowNavigationMenu}
        >
            <div id="top-bar"></div>
            <div id="mid-bar"></div>
            <div id="bottom-bar"></div>

        </button>
    )
}

export default MobileNavigationButton;