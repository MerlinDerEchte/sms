import React, { useContext } from "react";
import { withClubEvents } from "../../hoc/ClubEventsHoc";
import { ClubEvent } from "../../types/clubEvent";
import { ClubEventBox } from "./ClubEventBox/ClubEventBox";
import { css } from "@emotion/css"
import { colors } from "../../../styles/colors"
import { GlobalContext } from "../../GlobalContext";

const ClubEventList: React.FC<{ clubEvents: ClubEvent[] }> = ({ clubEvents }) => {

    const { isMobile } = useContext(GlobalContext)
    const createClubEventListStyles = (isMobile:Boolean) => {
        return css({
            display: 'flex',
            flexDirection: 'column',
            width: isMobile ? '100%' :  600,
            gap: 30,
            color: colors.DARK_BROWN,
            alignItems: 'stretch',
            'a': {
                color: colors.DARK_BROWN,
                textDecoration: 'underline'
            },
        })
    }

    const clubEventListStyles = createClubEventListStyles(isMobile);
    return (
        <div className={clubEventListStyles}>
            {
                clubEvents.sort((a, b) => a.date - b.date)
                    .map((cE,index) =>
                        <ClubEventBox clubEvent={cE} key={index} />
                    )
            }
        </div>
    )
}

export default withClubEvents(ClubEventList)