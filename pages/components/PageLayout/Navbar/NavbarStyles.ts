import { css } from "@emotion/css"
import { colors } from "../../../../styles/colors"
import { PageLayoutConstants } from "../../../constants/PageLayoutConstants"

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

        '.logo-wrapper': {

            display: 'block',
            position: 'absolute',
            left: 20,
            top: (PageLayoutConstants.HEADER_HEIGHT - PageLayoutConstants.HEADER_HEIGHT * 0.8) / 2,
            marginLeft: 20,
            width: PageLayoutConstants.HEADER_HEIGHT * 0.8,
            height: PageLayoutConstants.HEADER_HEIGHT * 0.8,
            'svg': {
                width: '100%',
                height: '100%',
                fill: colors.DARK_WHITE,
                stroke: colors.DARK_WHITE,
            },
        },
        '.nav': {
            flex: '0 0 auto',
           
            display: 'flex',
            gap: 75,

            'a:hover': {
                textDecoration: 'underline',
            },
        }



    })
}