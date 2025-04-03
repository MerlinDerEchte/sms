import ClubEventList from "components/ClubEventList/ClubEventList";
import { ESectionId } from "enums/sectionIds";
import { NewSection } from "../Section/NewSection";

export const ClubEventSection:React.FC<{isSecondary:boolean }> = ({isSecondary}) => {

    return(
        <NewSection isSecondary={isSecondary} sectionId={ESectionId.Events}>
            <ClubEventList />
        </NewSection>
    )
} 