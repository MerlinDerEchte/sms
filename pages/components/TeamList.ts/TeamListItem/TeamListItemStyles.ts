import { css } from "@emotion/css"
import { colors } from "../../../../styles/colors"


export const createTeamLIstItemStyles = () => {


    return css({
        position: 'relative',
        width: '100%',
        height: 150,
        display: 'flex',
        justifyContent:'center',

        '.team-info-wrapper':{
            flex: 1,
            height: '100%',
            width: '100%',
            paddingLeft: 20,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',

            'a':{
                color:colors.DARK_BROWN,
                textDecoration: 'underline',
            }
        },
        '.team-trainer-wrapper':{
            flex: 1, 
            height: '100%',
            width: '50%' ,
            paddingLeft: 20, 
            display: 'flex',
            gap: 20, 

            '.team-trainer-foto-wrapper': {
                flex: 0,
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                'img':{
                    width: 80,
                    borderRadius: '50%',
                    height: 80,
                    
                }
            },
            '.team-trainer-info-wrapper':{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: "flex-start",
                justifyContent: 'center'
            }
        }
    })
}