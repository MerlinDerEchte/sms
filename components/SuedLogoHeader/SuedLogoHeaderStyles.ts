import { css, keyframes } from "@emotion/css"
import { colors } from "styles/colors"


const fadeZoomIn = keyframes`
0% {
  opacity: 0;
  transform: scale(0.9);
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



export const createSuedLogoStyles = (isMobile: Boolean) => {

  return css({

    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    gap: isMobile ? 50 : 0,
    '.sued-logo-wrapper': {
      flex: 1,
      display: 'flex',

      justifyContent: isMobile ? 'center' : 'flex-end',
      alignItems: 'center',
      paddingRight: isMobile ? 0 : 30,

      'svg': {
        width: 200,
        height: 200,
        opacity: 0,
        animation: ` ${fadeZoomIn} 0.5s 2s ease-out forwards`,
      }
    },
    '.sued-text-wrapper': {

      display: 'flex',
      flexDirection: 'column',
      
      flex: 1,
      paddingLeft: isMobile ? 0 : 30,
      justifyContent: 'center',
      alignItems: isMobile ? 'center' : 'flex-start',
      gap: isMobile ? 15 : 10,
      fontSize: 24,
      fontWeight: 700,
      

      '.first-text': {
        opacity: 0,
        animation: `${fadeInText} 0.5s 0.4s  ease-out forwards `,
        whiteSpace: 'nowrap',
      },
      '.second-text': {
        opacity: 0,
        animation: `${fadeInText} 0.5s 1.1s  ease-out forwards `,
        whiteSpace: 'nowrap',
      }
    }
  })
}