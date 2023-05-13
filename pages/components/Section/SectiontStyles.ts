import { css } from "@emotion/css";
import { colors } from "../../../styles/colors";
export const createSectionStyles = (isSecondary: Boolean = false) => {

    return css({
        width: '100%',
        height: '100%',
        paddingTop: 50,
        paddingBottom: 50,

        background: isSecondary ? colors.DARK_WHITE : colors.DARK_BROWN,
        color: isSecondary ? colors.DARK_BROWN : colors.DARK_WHITE,
        svg: {
            fill: isSecondary ? colors.DARK_BROWN : colors.DARK_WHITE
        }
    })
}