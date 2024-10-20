import { css, keyframes } from "@emotion/css"
import { colors } from "styles/colors"

export const createTeamDesktopStyles = () => {
    const maxHeight: number = 2000;


    const expandContentAnimation = keyframes`
    0%{max-height: 0px }
    100%{max-height: ${maxHeight}px }
`

    return css({
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        width: '100%',
        position: 'relative',

        '.team-name-container': {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 50,
            borderBottom: `3px solid ${colors.DARK_BROWN}`,
        },

        '.team-content-container': {
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            animation: `${expandContentAnimation} 0.4s ease-in-out backwards`,

            '.team-foto-container': {
                borderRadius: 25,
                overflow: 'hidden',
                width: '100%',
                img: {
                    width: '100%'
                }
            },
            '.team-info-wrapper': {

                position: 'relative',
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                flexDirection: 'row',
                paddingBottom: 20,
                gap: 20,

                '.team-info-general-wrapper': {

                    position: 'relative',
                    height: '100%',
                    width: '40%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start',
                    alignItems: 'start',
                    gap: 20,

                    '.team-foto-wrapper': {
                    },
                    '.team-desktop-trainings-wrapper': {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 10,
                    },
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
                        paddingLeft: 20,
                        display: 'flex',
                        gap: 20,
                        width: '100%',
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
        }


    })
}
