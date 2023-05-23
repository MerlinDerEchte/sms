import { css } from "@emotion/css"
import { colors } from "../../../styles/colors"

export const createTeamListStyles = () => {


    return css({
        display: 'flex',
        flexDirection: 'column',
        width: 600,
        gap: 30,
        color: colors.DARK_WHITE,
        alignItems: 'stretch',
        'a':{
            color: colors.DARK_WHITE,
            textDecoration: 'underline'
        },
        '.team-list-item-wrapper':{
            
        }
    })
}