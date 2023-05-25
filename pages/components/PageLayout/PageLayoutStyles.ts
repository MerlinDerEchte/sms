import { css } from '@emotion/css'
import { callbackify } from 'util';
import { colors } from '../../../styles/colors';
import { PageLayoutConstants } from '../../constants/PageLayoutConstants';

export interface IcreatePageLayoutStyles {
    screenHeight: number,
    screenWidth: number,
    isMobile: Boolean
}

export const createPageLayoutStyles = (params: IcreatePageLayoutStyles) => {
    const { screenHeight, screenWidth, isMobile } = params;

    const contentHeight: number = isMobile ? screenHeight : screenHeight - PageLayoutConstants.HEADER_HEIGHT  ;


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
            background: colors.DARK_WHITE,
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
        '.content-wrapper': {
            position: 'relative',
            height: contentHeight,
            scrollMargin: 10,
            width: '100%',
            justifyContent: 'center',
            top: isMobile ? 0 :PageLayoutConstants.HEADER_HEIGHT,
            overflowY: 'auto',
            overflowX: 'hidden',
           
        },
      
    })

}