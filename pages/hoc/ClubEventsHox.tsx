import { useQuery } from "@apollo/client";
import { ComponentType, useEffect, useState } from "react"
import { CLUB_EVENTS_QUERY, mapContentfulEvents } from "../api/contentful/conentfulEvent";
import { ClubEvent } from "../types/clubEvent"


export function withClubEvents<T>(Component: ComponentType<T>) {

    return (hocProps: T) => {
        const [clubEvents, setClubEvents] = useState<ClubEvent[]>([]);

        const { data } = useQuery(CLUB_EVENTS_QUERY);

        useEffect(() => {
            if (data?.eventCollection?.items) {
                const newClubEvents = mapContentfulEvents(data.eventCollection.items);
                setClubEvents(newClubEvents);
            }
        }, [data])
        return (
            <Component
                {...hocProps}
                clubEvents={clubEvents}
            />
        )
    }
}