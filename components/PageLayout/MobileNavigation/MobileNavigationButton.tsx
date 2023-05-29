import React, { useState } from 'react';
import { createMobileButtonStyles } from './createMobileButtonStyles';

export const MobileNavigationButton:React.FC<{showNavigationMenu: Boolean, toggleShowNavigationMenu: () => void}> = ({showNavigationMenu, toggleShowNavigationMenu}) => {

    const [isFirstRender, setFirstRender] = useState(true);
    const mobileButtonStyles = createMobileButtonStyles(showNavigationMenu) 
    return (
        <button
            className={mobileButtonStyles}
            onClick={e => toggleShowNavigationMenu()}
        >

            <div id="top-bar"></div>
            <div id="mid-bar"></div>
            <div id="bottom-bar"></div>

        </button>
    )
}

export default MobileNavigationButton;