import React from "react";
import { withClubEvents } from "../../hoc/ClubEventsHox"
import { ClubEvent } from "../../types/clubEvent";
import { ComponentBox } from "../ComponentBox/ComponentBox";
import { ClubEventBox } from "./ClubEventBox/ClubEventBox";
import { createClubEventsNavigationbarStyles } from "./ClubEventsNavigationbarStyles";


const ClubEventNavigationbar: React.FC<{ clubEvents: ClubEvent[] }> = ({ clubEvents }) => {

    const clubEventNavigationbarStyles = createClubEventsNavigationbarStyles();
    return (
        <div className={clubEventNavigationbarStyles}>
            <div className="club-events-header">
                <h1>Events</h1>
            </div>
            <div className="club-events-container">
                {clubEvents.map(ce => {
                    return (
                       
                        <ComponentBox boxProps={{
                            boxContent: <ClubEventBox clubEvent={ce} />,
                            isClickable: true
                        }} />

                    )
                })}
                
            </div>
        </div>)
}
export default withClubEvents(ClubEventNavigationbar);