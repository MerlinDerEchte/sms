import { css } from "@emotion/css"

export const createClubEventsNavigationbarStyles = () => {
    return css({

        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: 20,

        '.club-events-header': {
            flex: 0,
            height: 30,
            width: '100%',
        },
        '.club-events-container': {
            marginTop: 10,
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            display: 'flex',
            gap: 10,
        }
    })

}