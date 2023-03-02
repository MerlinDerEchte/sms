import { css } from "@emotion/css"
import { relative } from "path"
import { colors } from "../../../../styles/colors"
import { PageLayoutConstants } from "../../../constants/PageLayoutConstants"

export const createFooterStyles = () => {

    return css({
       
        position: 'relative',
        width: '100%',
        color: colors.DARK_BROWN,
        height: PageLayoutConstants.FOOTER_HEIGHT,
        background: colors.WHITE,
        borderTop: `5px solid  ${colors.LIGHT_BROWN}`,
        display: 'flex',
        justifyContent: 'center',
        aligntItems: 'center',
        paddingY: 20,
        gap: 50,
        '.footer-logo': {
            flex:1,
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
            flex:1,
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