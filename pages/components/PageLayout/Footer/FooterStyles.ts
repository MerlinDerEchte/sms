import { css } from "@emotion/css"
import { relative } from "path"
import { colors } from "../../../../styles/colors"
import { PageLayoutConstants } from "../../../constants/PageLayoutConstants"

export const createFooterStyles = (isMobile: Boolean) => {


    return css({
       
        position: 'relative',
        width: '100%',
        color: colors.DARK_BROWN,
        height: PageLayoutConstants.FOOTER_HEIGHT,
        background: colors.WHITE,
        borderTop: `5px solid  ${colors.LIGHT_BROWN}`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingY: 20,
        gap: isMobile ? 20 : 50,
        '.footer-logo': {
            flex:isMobile ? 2 : 1,
            display: 'flex',
            flexDirection: 'row-reverse',
            alignItems: 'center',
            'svg': {
                width: 80,
                height: 80,
                fill: colors.DARK_BROWN,
            }
        },
        '.footer-impressum': {
            flex: isMobile ? 3 : 1 ,
            display: 'flex',
            alignItems: 'center',
            'ul': {
                'li': {
                    listStyleType: 'none'
                }
            }
        }

    })
}