import { css } from "@emotion/css";
import { colors } from "../../../styles/colors";
export const createSectionStyles = (isSecondary: Boolean = false) => {

    return css({
        width: '100%',
        position: 'relative',
        paddingTop: 50,
        paddingBottom: 50,
        height: 'auto',
        background: isSecondary ? colors.DARK_WHITE : colors.DARK_BROWN,
        color: isSecondary ? colors.DARK_BROWN : colors.DARK_WHITE,
        svg: {
            fill: isSecondary ? colors.DARK_BROWN : colors.DARK_WHITE
        },
        p:{
            marginTop: 10,
        }
    })
}