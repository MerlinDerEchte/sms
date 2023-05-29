import { PageLayoutConstants } from "constants/PageLayoutConstants"

export const getPageContentHeight = (screenHeight:number):number => {
    return screenHeight - PageLayoutConstants.HEADER_HEIGHT - PageLayoutConstants.FOOTER_HEIGHT;
}