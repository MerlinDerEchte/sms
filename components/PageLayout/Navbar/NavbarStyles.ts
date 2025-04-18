import { css, keyframes } from "@emotion/css"
import { colors } from "styles/colors"
import { PageLayoutConstants } from "../../../constants/PageLayoutConstants"

export const createNavbarStyles = (screenHeight:number) => {
    const slideIn = keyframes`
  0% {transform: translateY(100px)}
  100% {transform: translateY(0)}
`;

    return css({
        position: 'fixed',
        animation: `${slideIn} 0.5s 2.0s ease-in-out backwards`,
        top: screenHeight - 100,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: '100%',
        background: colors.DARK_BROWN,
        color: colors.WHITE,
        paddingLeft: 0,
        gap: 100,
        borderTop: `3px solid ${colors.LIGHT_BROWN}`,
        

        '.nav': {
            flex: '0 0 auto',
            display: 'flex',
            gap: 50,

            '.navigation-item:hover': {
                textDecoration: 'underline',
                cursor: 'pointer',
            },
        }



    })
}