import { css } from "@emotion/css"
import { colors } from "styles/colors"

export const createTeamListStyles = (isMobile:Boolean) => {

    return css({
        display: 'flex',
        flexDirection: 'column',
        width: isMobile ? '100%' : 600,
        gap: isMobile ? 80 : 30,
        color: colors.DARK_BROWN,
        alignItems: 'stretch',
        'a':{
            color: colors.DARK_BROWN,
            textDecoration: 'underline'
        },
        '.team-list-item-wrapper':{
            
        }
    })
}