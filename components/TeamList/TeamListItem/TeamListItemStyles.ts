import { css } from "@emotion/css"
import { colors } from "styles/colors"

export const createTeamLIstItemStyles = (isMobile: Boolean) => {

    return css({
        display: 'flex',
        gap: 10,
        width: '100%',
        flexDirection: 'column',
        position: 'relative',
        '.team-foto-container': {
            width: '100%',
            img: {
                width: '100%'
            }
        },
        '.team-info-wrapper': {
            position: 'relative',
            display: 'flex',
            width: '100%',
            justifyContent: 'start',
            flexDirection: isMobile ? 'column' : 'row',
            paddingBottom: 30,
            borderBottom: `3px solid ${colors.DARK_BROWN}`,
            gap: isMobile ? 30 : 0,

            '.team-info-general-wrapper': {

                position: 'relative',
                height: '100%',
                width: isMobile ? '100%' : '40%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                alignItems: 'start',
                '.team-name-container': {
                    textAlign: 'start',
                    verticalAlign: 'middle',
                    width: '100%',
                    marginBottom: isMobile ? 30 : 0,
                },
                '.team-foto-wrapper': {


                }
            },

            '.team-all-trainers-wrapper': {

                height: '100%',
                width: '60%',
                paddingLeft: 0,
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
        }
    })
}
