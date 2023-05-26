import { BlogPost } from "../../../types/blogPost";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { ClubEvent } from "../../../types/clubEvent";
import { createClubEventBoxStyles } from "./ClubEventBoxStyles";
import { useContext, useState } from 'react';
import { GlobalContext } from "../../../GlobalContext";

export const ClubEventBox: React.FC<{ clubEvent: ClubEvent }> = ({ clubEvent }) => {
    const { isMobile } = useContext(GlobalContext); 
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleIsExpanded = () => {
        if (isExpanded) {
            setIsExpanded(false)
        } else {
            setIsExpanded(true)
        }
    }
    const [isFocused, setIsFocused] = useState(false);


    const clubEventStyles = createClubEventBoxStyles(isExpanded, isFocused, isMobile);
    const date:Date = clubEvent.date;
    const addZeroToMinuteStringIfNeeded = (minuteString:string) => {
        if(minuteString.length === 1){
            return 0 + minuteString;
        }else{
            return minuteString;
        }
    } 
    const dateAsString:string = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} - ${date.getHours()}:${addZeroToMinuteStringIfNeeded(date.getMinutes().toString())}`;
    return (
        <div className={clubEventStyles} onMouseEnter={() => setIsFocused(true)} onMouseLeave={() => setIsFocused(false)} onClick={toggleIsExpanded}>
            <div className="foto-wrapper">
                <img src={clubEvent.fotoLink}></img>
            </div>
            <div className="club-event-content-wrapper">
                <div className="club-event-header">
                    <h2>{clubEvent.title}</h2>
                </div>
                <div className="club-event-date-wrapper">{dateAsString} </div> 
                <div className="club-event-text-wrapper">
                    {documentToReactComponents(clubEvent.content)}
                </div>
                {!isExpanded && <div className="club-event-read-more-container">
                    Mehr lesen...
                </div>
                }

            </div>
        </div>

    )
}