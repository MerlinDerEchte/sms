import { css } from "@emotion/css";
import { colors } from "../../../styles/colors";
export const createSectionStyles = (isSecondary: Boolean = false) => {

    const getFontAndSvgColor = (isSecondary: Boolean): string => {

        if (isSecondary) {
            return colors.DARK_WHITE
        }
        return colors.DARK_BROWN
    }
    const getBackgroundColor = (isSecondary: Boolean) => {

        if (isSecondary) {
            return colors.DARK_BROWN
        }
        return colors.DARK_WHITE
    }

    const fontColor = getFontAndSvgColor(isSecondary);
    const svgColor = getFontAndSvgColor(isSecondary);
    const backgroundColor = getBackgroundColor(isSecondary);

    return css({
        width: '100%',
        position: 'relative',
        height: 'auto',
        background: backgroundColor,
        color: fontColor,
        svg: {
            fill: svgColor
        },
        p: {
            marginTop: 10,
        }
    })
}