import ClubEventList from "components/ClubEventList/ClubEventList";
import { ESectionId } from "enums/sectionIds";
import { NewSection } from "../Section/NewSection";

export const ClubEventSection = ({ }) => {

    return(
        <NewSection isSecondary={true} sectionId={ESectionId.Events} caption="Aktuelles" >
            <ClubEventList />
        </NewSection>
    )
} 