import { css } from "@emotion/css";
import { colors } from "../../../../styles/colors";
import { PageLayoutConstants } from "../../../constants/PageLayoutConstants";

export interface IcreateContentBackgroundStyles {
    screenHeight: number,
    screenWidth: number,

}


export const createContentBackgroundStyles = (params: IcreateContentBackgroundStyles) => {
    const { screenHeight, screenWidth } = params;
    const containerWidth = screenWidth - PageLayoutConstants.CONTENT_BACKGROUND_HORIZONTAL_MARGIN * 2;
    const containerHeight = screenHeight - PageLayoutConstants.HEADER_HEIGHT;
    const svgContainerWidth = Math.min(containerWidth, containerHeight) * 0.8;
    const svgContainerHeight = Math.min(containerWidth, containerHeight) * 0.8;

    return (css({
        position: 'fixed',
        zIndex: 0,
        height: '100%',
        width: '100%',
       
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.3,
        backgroundImage: "url('suedHundert.jpg')",
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        '::before':{
            content:  '""',
            position:"absolute",
            left: 0,
            width: 100,
            height: '100%',
          
            background: `linear-gradient(90deg, ${colors.DARK_WHITE} 50%, transparent)`,
        },
        '::after':{
            content:  '""',
            position:"absolute",
            right: 0,
            width: 100,
            height: '100%',
            
            background: `linear-gradient(90deg, transparent 0%, ${colors.DARK_WHITE} 50%)`,
        }


    }))
}