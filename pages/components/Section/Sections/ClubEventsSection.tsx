import ClubEventList from "../../ClubEventList/ClubEventList";
import { ListSection } from "../ListSection";
import { ESectionId } from "../../../enums/sectionIds";

export const ClubEventSection = ({ }) => {

    return(
        <ListSection isSecondary={false} sectionId={ESectionId.Events} caption="Events">
            <ClubEventList />
        </ListSection>
    )
} 