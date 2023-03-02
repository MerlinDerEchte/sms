import { css } from "@emotion/css"
import { colors } from "../../../styles/colors"

export const createComponentBoxStyles = (isClickable:boolean=false) => {

    return (
        css({
            background: colors.WHITE,
            opacity: 0.9,
            // border: `1px solid ${colors.DARK_BROWN}`,
            boxShadow: ` 2px 2px 3px 0px ${colors.LIGHT_BROWN}`,
            border: `1px solid ${colors.LIGHT_BROWN}`,
            borderRadius: 5,
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