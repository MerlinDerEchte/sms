import { css } from "@emotion/css"
import { colors } from "../../../styles/colors"

export const createSuedLogoStyles = (isMobile:Boolean) => {


    return css({
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? 50 : 0,
        '.sued-logo-wrapper':{
            flex: 1,
            display: 'flex',
            justifyContent: isMobile ? 'center' : 'flex-end',
            alignItems: 'center',
            paddingRight: isMobile? 0 : 30,
            
            'svg':{
                width:200,
                height: 200,
            }
        },
        '.sued-text-wrapper':{
           
            display: 'flex',
            borderLeft: isMobile ? 'none' : `1px solid ${colors.DARK_BROWN}`,
            flex: 1,
            paddingLeft: isMobile ? 0 : 30,
            justifyContent: isMobile ? 'center' : 'flex-start',
            textAlign: isMobile ? 'center' : 'inherit', 
            alignItems: 'center',
            lineHeight: 1.5,
            fontSize: 24,
            fontWeight: 700,
        }
    })
}