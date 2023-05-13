import { css } from "@emotion/css"
import { colors } from "../../../styles/colors"

export const createSuedLogoStyles = () => {


    return css({
        width: '100%',
        height: '100%',
        display: 'flex',
        
        '.sued-logo-wrapper':{
            flex: 1,
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingRight: 30,
            
            'svg':{
                width:200,
                height: 200,
            }
        },
        '.sued-text-wrapper':{
           
            display: 'flex',
            borderLeft: `1px solid ${colors.DARK_BROWN}`,
            flex: 1,
            paddingLeft: 30,
            justifyContent: 'flex-start',
            alignItems: 'center',
            lineHeight: 1.5,
            fontSize: 24,
            fontWeight: 700,
        }
    })
}