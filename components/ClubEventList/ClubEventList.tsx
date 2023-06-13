import React, { useContext, useEffect, useState } from "react";
import { ClubEvent } from "types/clubEvent";
import { ClubEventBox } from "./ClubEventBox/ClubEventBox";
import { css } from "@emotion/css"
import { colors } from "styles/colors"
import { GlobalContext } from "GlobalContext";
import { CLUB_EVENTS_QUERY, mapContentfulEvents } from "contentful/conentfulEvent";
import { useQuery } from "@apollo/client";

const ClubEventList: React.FC = () => {

    const { isMobile } = useContext(GlobalContext)
    const [clubEvents, setClubEvents] = useState<ClubEvent[]>([]);

    const { data } = useQuery(CLUB_EVENTS_QUERY);

    useEffect(() => {
        if (data?.eventCollection?.items) {
            const newClubEvents = mapContentfulEvents(data.eventCollection.items);
            setClubEvents(newClubEvents);
        }
    }, [data])

    const createClubEventListStyles = (isMobile: Boolean) => {
        return css({
            display: 'flex',
            flexDirection: 'column',
            width: isMobile ? '100%' : 600,
            gap: 30,
            color: colors.DARK_WHITE,
            alignItems: 'stretch',
            'a': {
                color: colors.DARK_WHITE,
                textDecoration: 'underline'
            },
        })
    }

    const clubEventListStyles = createClubEventListStyles(isMobile);
    return (
        <div className={clubEventListStyles}>
            {
                clubEvents.sort((a, b) => a.date.getTime() - b.date.getTime())
                    .map((cE, index) =>
                        <ClubEventBox clubEvent={cE} key={index} />
                    )
            }
        </div>
    )
}

export default ClubEventList;