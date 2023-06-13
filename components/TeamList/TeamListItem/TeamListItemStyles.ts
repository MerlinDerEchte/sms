import { css } from "@emotion/css"
import { colors } from "styles/colors"

export const createTeamLIstItemStyles = (isMobile:Boolean) => {

    return css({
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: isMobile ? 'column' : 'row',
        paddingBottom: 30,
        borderBottom: `3px solid ${colors.DARK_BROWN}`,
        gap: isMobile ? 30 : 0,

        '.team-info-wrapper': {
            flex: 1,
            height: '100%',
            width: '100%',
            paddingLeft: isMobile ? 0 : 20,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'flex-start',
            '.team-name-container': {
                textAlign: 'center',
                width: '100%',
                marginBottom: isMobile ? 30 : 0,
            }
        },

        '.team-all-trainers-wrapper': {
            flex: 1,
            height: '100%',
            width: '50%',
            paddingLeft: isMobile ? 0 : 20,
            display: 'flex',
            gap: 20,
            flexDirection: 'column',
            '.team-trainer-wrapper': {
                flex: 0,
                paddingLeft: isMobile ? 0 : 20,
                display: 'flex',
                gap: 20,
                flexDirection: 'row', 
                alignItems: 'stretch',

                '.team-trainer-foto-wrapper': {
                    flex: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    'img': {
                        width: 100,
                        borderRadius: '10%',
                       

                    }
                },
                '.team-trainer-info-wrapper': {
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: "flex-start",
                    justifyContent: 'center'
                }
            }
        }
    })
}