import { css, keyframes } from "@emotion/css";
import { colors } from "styles/colors";

export const createMobileButtonStyles = (showMobileMenu: Boolean) => {



    const activeStles = css({

        top: 5,
        left: 150,
        animation: `${buttonActiveAnimation} 0.3s 0.1s ease-in-out backwards `,
        cursor: 'pointer',
        overflow: 'hidden',
        border: 'none',
        outline: 'none',
        width: 40,
        height: 40,
        zIndex: 300,
        position: 'fixed',
        background: 'none',


        '#top-bar': {
            // transform: rotateZ(45deg);
            top: 18,
            left: 2,
            transform: 'rotateZ(45deg)',
            animation: `${buttonTopBarActiveAnimation} 0.1s 0.2s ease-in-out backwards`,
            position: 'absolute',
            width: 36,
            height: 4,
            borderRadius: 4,
            background: colors.DARK_BROWN,
            boxShadow: `1px 1px 5px ${colors.DARK_WHITE}`,
        },
        '#mid-bar': {
            left: -100,
            top: 18,
            animation: `${buttonMidBarActiveAnimation} 0.2s 0.2s ease-in-out backwards`,
            position: 'absolute',
            width: 32,
            height: 4,
            borderRadius: 4,
            background: colors.DARK_BROWN,
            boxShadow: `1px 1px 5px ${colors.DARK_WHITE}`,
        },

        '#bottom-bar': {
            left: 2,
            top: 18,
            transform: 'rotateZ(-45deg)',
            animation: `${buttonBottomBarActiveAnimation}  0.1s 0.2s ease-in-out backwards`,
            position: 'absolute',
            width: 36,
            height: 4,
            borderRadius: 4,
            background: colors.DARK_BROWN,
            boxShadow: `1px 1px 5px ${colors.DARK_WHITE}`,
        }
    })

    const inActiveStyles = css({
        top: 5,
        left: 5,
        animation: `${buttonInactiveAnimation} 0.2s ease-in-out backwards`,
        cursor: 'pointer',
        overflow: 'hidden',
        border: 'none',
        outline: 'none',
        width: 40,
        height: 40,
        zIndex: 300,
        position: 'fixed',
        background: 'none',

        '#top-bar': {
            left: 2,
            top: 10,
            animation: `${buttonTopBarInactiveAnimation} 0.1s 0.2s ease-in-out backwards`,
            position: 'absolute',
            width: 36,
            height: 4,
            borderRadius: 4,
            background: colors.DARK_BROWN,
            boxShadow: `1px 1px 5px ${colors.DARK_WHITE}`,
        },
        '#mid-bar': {
            left: 4,
            top: 18,
            animation: `${buttonMidBarInactiveAnimation} 0.1s 0.2s ease-in-out backwards`,
            position: 'absolute',
            width: 32,
            height: 4,
            borderRadius: 4,
            background: colors.DARK_BROWN,
            boxShadow: `1px 1px 5px ${colors.DARK_WHITE}`,
        },
        '#bottom-bar': {
            left: 2,
            top: 26,
            animation: `${buttonBottomBarInactiveAnimation} 0.1s 0.2s ease-in-out backwards`,
            position: 'absolute',
            width: 36,
            height: 4,
            borderRadius: 4,
            background: colors.DARK_BROWN,
            boxShadow: `1px 1px 5px ${colors.DARK_WHITE}`,
        }
    });
    if (showMobileMenu) {
        return activeStles;
    }
    return inActiveStyles;
}


const buttonActiveAnimation = keyframes`
    0%{left: 5px; }
    100%{left: 150px;}
`

const buttonInactiveAnimation = keyframes`
    0% {left: 150px; }
    100%{left: 5px;}
`

const buttonTopBarActiveAnimation = keyframes`
    0%{ left:2px;
        top: 8px;
        transform: rotateZ(0deg)}
    100%{
        top: 18px;
        left:2px;
        transform: rotateZ(45deg)
    }
`
const buttonTopBarInactiveAnimation = keyframes`
    0%{
        top: 18px;
        left:2px;
        transform: rotateZ(45deg)
    }
    100%{ left:2px;
        top: 8px;
    }
}
`

const buttonBottomBarActiveAnimation = keyframes`
    0%{ left:2px;
        top: 26px;
        transform: rotateZ(0deg)}
    100%{
        top: 18px;
        left:2px;
        transform: rotateZ(-45deg)
    }
`

const buttonBottomBarInactiveAnimation = keyframes`
    0%{
        top: 18px;
        left:2px;
        transform: rotateZ(-45deg)
    }
    100%{ left:2px;
        top: 26px;
        transform: rotateZ(0deg)}
`


const buttonMidBarActiveAnimation = keyframes`
    0%{ left:2px;}
    100%{
        top: 18px;
        left: -50px;
        
    }
`
const buttonMidBarInactiveAnimation = keyframes`   
    0%{
        top: 18px;
        left: -50px;
    }
    100%{ left:2px;}
`