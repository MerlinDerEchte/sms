import { css } from "@emotion/css"
import { colors } from "../../../../styles/colors"

export const createTeamBoxStyles = (isClickable:boolean = false) => {


    return css({
        flex: 0,
        position: 'relative',
        fontSize: 20,
        height: 50,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 20,

        
    })
}