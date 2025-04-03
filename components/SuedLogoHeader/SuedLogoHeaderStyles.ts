import { css, keyframes } from "@emotion/css"
import { colors } from "styles/colors"


const fadeZoomIn = keyframes`
0% {
  opacity: 0;
  transform: scale(0.5);
}
100% {
  opacity: 1;
  transform: scale(1);
}
`;

  const fadeInText = keyframes`
0% {
  opacity: 0;
  transform: translateX(50px);
  
}
50% {
    opacity: 0
}
100% {
  opacity: 1;
  transform:  translateX(0px);
  
}
`;

export const createSuedLogoStyles = (isMobile:Boolean) => {

    return css({
        
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
                animation: ` ${fadeZoomIn} 0.8s 0.1s ease-out`,
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
            opacity: 0,
            fontSize: 24,
            fontWeight: 700,
            animation: `${fadeInText} 0.5s 0.4s  ease-out forwards`
        }
    })
}