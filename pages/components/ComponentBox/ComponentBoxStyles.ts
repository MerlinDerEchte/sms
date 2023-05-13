import { css } from "@emotion/css"
import { colors } from "../../../styles/colors"

export const createComponentBoxStyles = (isClickable:boolean=false) => {

    return (
        css({
            background: colors.DARK_BROWN,
            color: colors.DARK_WHITE,
            opacity: 0.9,
            // border: `1px solid ${colors.DARK_BROWN}`,
            //border: `1px solid ${colors.DARK_WHITE}`,
            borderRadius: 0,
            width: '100%',
            height: '100%',
            '&:hover': isClickable ? {
                cursor: 'pointer',
                background: colors.DARK_BROWN,
                color:colors.DARK_WHITE,
                borderRadius: 5,
            } : '',

        })
    )
}