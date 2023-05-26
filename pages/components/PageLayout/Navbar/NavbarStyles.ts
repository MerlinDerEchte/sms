import { css } from "@emotion/css"
import { colors } from "../../../../styles/colors"
import { PageLayoutConstants } from "../../../constants/PageLayoutConstants"

export const createNavbarStyles = () => {

    return css({
        position: 'fixed',
        top:0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: PageLayoutConstants.HEADER_HEIGHT,
        width: '100%',
        background: colors.DARK_BROWN,
        color: colors.WHITE,
        paddingLeft: 0,
        gap: 100,
        borderBottom: `3px solid ${colors.LIGHT_BROWN}`,

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