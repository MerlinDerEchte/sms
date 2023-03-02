import { css } from "@emotion/css"

export const createTeamsNavigationbarStyles = () => {


    return css({
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection:'column',

        '.teams-navigationbar-header':{
            flex: 0,
            height: 30,
            width: '100%',
        },
        '.teams-container':{
            marginTop: 10,
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            display:'flex',
            gap: 10,

            '.team-box-wrapper':{
                positin:'relative',
                flex: 0,
                width:'100%'
            }
        }
    })
}