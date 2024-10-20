import { css, keyframes } from "@emotion/css"
import { colors } from "styles/colors"

const maxHeight:number = 1000;


const expandContentAnimation = keyframes`
    0%{max-height: 0px }
    100%{max-height: ${maxHeight}px }
`


export const createTeamMobileStyles = (isSelected:boolean) => {
    
    return css({
        display: 'flex',
        gap: 0,
        width: '100%',
        flexDirection: 'column',
        position: 'relative',

        '.team-name-wrapper':{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 50,
            borderBottom: `3px solid ${colors.DARK_BROWN}`,
        },
        '.team-info-wrapper': {
            paddingTop:20,
            paddingBottom: 20,
            paddingLeft: 1,
            paddingRight: 1,
            position: 'relative',
            display: 'flex',
            width: '100%',
            justifyContent: 'start',
            flexDirection:'column',
            overflowY: 'hidden',
            maxHeight: 1000,
            animation: `${expandContentAnimation} 0.4s ease-in-out backwards`,

            '.team-foto-container': {
                borderRadius: 25,
                overflow:'hidden',
                width: '100%',
                img: {
                    width: '100%'
                }
            },

            '.team-info-general-wrapper': {

                position: 'relative',
                height: '100%',
                width:  '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                alignItems: 'start',
                gap: 20,

                '.team-name-container': {
                    textAlign: 'start',
                    verticalAlign: 'middle',
                    width: '100%',
                    marginBottom: 30,
                },
                '.bfv-link-wrapper':{
                    display: "flex",
                    width: "100%",
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: "center"
                },

                '.team-trainings-wrapper':{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 10
                }
            },

            '.team-all-trainers-wrapper': {
                paddingTop: 20,
                height: '100%',
                width: '100%',
                paddingLeft: 0,
                display: 'flex',
                gap: 20,
                flexDirection: 'column',
                '.team-trainer-wrapper': {
                    flex: 0,
                    paddingLeft: 0,
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
    })
}
