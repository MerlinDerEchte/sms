import { css } from "@emotion/css"
import { colors } from "../../../styles/colors"
import { PageLayoutConstants } from "../../constants/PageLayoutConstants"

export interface IcreateNavbarStyles {

}

export const createNavbarStyles = () => {


    return css({

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        background: colors.DARK_BROWN,
        color: colors.WHITE,
        paddingLeft: 0,
        gap: 100,
        borderBottom: `2px solid ${colors.LIGHT_BROWN}`,

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