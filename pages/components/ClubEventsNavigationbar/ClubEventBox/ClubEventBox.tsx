import { BlogPost } from "../../../types/blogPost";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { ClubEvent } from "../../../types/clubEvent";
import { createClubEventBoxStyles } from "./ClubEventBoxStyles";


export const ClubEventBox: React.FC<{ clubEvent: ClubEvent }> = ({ clubEvent }) => {

    const clubEventStyles = createClubEventBoxStyles();
    return (
        <div className={clubEventStyles}>
          
            <div className="club-event-header">
                <h2>{clubEvent.title}</h2>

            </div>
            <div className="club-event-wrapper">
                <div className="club-event-read-more-container">
                    Mehr lesen...
                </div>
                {documentToReactComponents(clubEvent.content)}
            </div>
        </div>

    )
}