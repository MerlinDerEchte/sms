import ClubEventList from "components/ClubEventList/ClubEventList";
import { ListSection } from "../ListSection";
import { ESectionId } from "enums/sectionIds";

export const ClubEventSection = ({ }) => {

    return(
        <ListSection isSecondary={true} sectionId={ESectionId.Events} caption="Events">
            <ClubEventList />
        </ListSection>
    )
} 