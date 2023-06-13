import { css } from "@emotion/css"
import { colors } from "styles/colors"
import { PageLayoutConstants } from "../../../constants/PageLayoutConstants"

export const createFooterStyles = (isMobile: Boolean) => {

    return css({
        position: 'relative',
        diplay:'flex',
        flexDirection:'column',
        borderTop: `5px solid  ${colors.LIGHT_BROWN}`,
        background: colors.WHITE,
        '.footer-caption-wrapper':{
            
            flex: 0,
            marginTop: 10,
            marginBottom: 20,
            '.footer-caption-container':{
                width: isMobile ? '100%' : '33vw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }
        },
        '.footer-content-wrapper': {
            position: 'relative',
            width: '100%',
            color: colors.DARK_BROWN,
            //height: PageLayoutConstants.FOOTER_HEIGHT,
            height: 'auto',
         
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px 0px',
            gap: isMobile ? 20 : 50,
            
            '.footer-logo': {
                flex: 1,
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
                flex:  1,
                display: 'flex',
                alignItems: 'center',
                'ul': {
                    'li': {
                        marginBottom: 5,
                        listStyleType: 'none'
                    }
                }
            }
        }

    })
}