import { css } from "@emotion/css"
import { colors } from "../../../../styles/colors"

export const createClubEventBoxStyles = () => {


    return css({
        position: 'relative',
        display: 'flex', 
        flexDirection: 'column',
        height: 100,
        width: '100%',
        overflow:'hidden',
        gap: 20,
        padding: 10,

        
        '.club-event-header':{
            flex: '1 1',
            display:'flex',
                       
        },
        '.club-event-wrapper':{
            flex: '2 1',
            overflow: 'hidden',

            '.club-event-read-more-container':{

                position:'absolute',
                bottom: 0,
                width: '50%',
                right:0,
                height: 60,
                //background: `linear-gradient(170deg, transparent 40%, ${colors.DARK_BROWN} 80%)`,
                color: colors.WHITE,
                borderRadius: 5,
                display:"flex",
                justifyContent:'flex-end',
                alignItems: 'flex-end',
                flexDirection: 'column',
                paddingRight: 5,
            }
            
        },
        '&:hover':{
            '.club-event-wrapper':{
                '.club-event-read-more-container':{
                   color: colors.WHITE,
                }
            }
        }
    })
}