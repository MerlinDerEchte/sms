import { css } from '@emotion/css'
import { colors } from 'styles/colors';
import { PageLayoutConstants } from 'constants/PageLayoutConstants';

export interface IcreatePageLayoutStyles {
    screenHeight: number,
    screenWidth: number,
    isMobile: Boolean
}

export const createPageLayoutStyles = (params: IcreatePageLayoutStyles) => {
    const { screenHeight, screenWidth, isMobile } = params;

    const contentHeight: number = isMobile ? screenHeight : screenHeight;

    return css({
        width: screenWidth,
        overflowX: 'hidden',
        overflowY: 'hidden',
        height: screenHeight,
        scrollbarWidth: 'thin',
        scrollbarColor: colors.LIGHT_BROWN,
        '*::-webkit-scrollbar': {
            width: 8,
        },
        '*::-webkit-scrollbar-track': {
            background: isMobile ? 'transparent' : colors.DARK_WHITE,
        },
        '*::-webkit-scrollbar-thumb': {
            background: colors.LIGHT_BROWN,
            borderRadius: 20,
         
        },

        '.header-wrapper': {
            position: 'absolute',
            height: PageLayoutConstants.HEADER_HEIGHT,
            top:0,
            left:0,
            width: '100%',
            zIndex: 1,
        },
        '#page-content-wrapper': {
            position: 'relative',
            height: contentHeight,
            scrollMargin: 10,
            width: '100%',
            justifyContent: 'center',
            top: 0,
            overflowY: 'auto',
            overflowX: 'hidden',
        },
      
    })

}